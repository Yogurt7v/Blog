import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { Authorization, Registration, Post } from "./pages";
import { H2 } from "./components/h2/h2";
import { Users } from "./pages/users/users";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./actions/set-user.js";
import { Modal } from "./components/modal/modal.js";

const Page = styled.div`
  text-align: center;
  padding: 120px 0;
`;

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: white;
`;

function Blog() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem("userData");

    if (!currentUserDataJSON) {
      return;
    }

    const currentUserData = JSON.parse(currentUserDataJSON);

    dispatch(
      setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) })
    );
  }, [dispatch]);

  return (
    <AppColumn>
      <Header />

      <Page>
        <Routes>
          <Route path="/" element={<H2>Main</H2>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post/" element={<div>New Post</div>} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<div>Error Page</div>} />
        </Routes>
      </Page>

      <Footer />

    <Modal/>
    </AppColumn>
  );
}

export default Blog;
