import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../Bff/";
import { useState } from "react";
import styled from "styled-components";

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Пустой логин")
    .matches(/\w/, "Логин не подходит. Допускаются только буквы и цифры")
    .min(3, "Неверный логин. Логин слишком мал")
    .max(15, "Неверный логин. Логин слишком большой"),
  password: yup
    .string()
    .required("Пустой пароль")
    .matches(/^[\w#%&   ] +$/, "Допускаются только буквы, цифры и символы")
    .min(8, "Неверный пароль. Слишком мал. Не меньше 8 символов")
    .max(30, "Неверный пароль. Пароль слишком большой. Не больше 30 символов"),
});
const AuthorizationContainer = ({ className }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [serverError, setServerError] = useState("");

  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then((error, res) => {
      if (error) {
        setServerError(`Ошибка запроса ${error}`);
      }
    });
  };

  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  return (
    <>
      <div className={className}>
        <h2>Авторизация</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Login" {...register("login")}></input>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          ></input>
          <button type="submit" disabled={!!formError}>
            Войти
          </button>
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </div>
    </>
  );
};

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  flex-direction: column;
  allign-items: center;
  width: 300px;
  margin: 0 auto;
    

  & > form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & > form > input {
    height: 30px;
  }
  & > form > button {
    height: 30px;
    cursor: pointer;
    background-color: #e6baa3;
    border: none;
    border-radius: 5px;
    justify-content: center;
    color: black;
    font-size: 12px;
    font-weight: 700;
  }
`;
