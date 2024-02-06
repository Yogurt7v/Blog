
const generatedDate =  () => new Date(Math.random() * 1000000000 + 1999999999999).toISOString().substring(0, 16).replace('T', ' ');


export const server = {
  async authorize(authLogin, authPassword) {
    const users = await fetch("http://localhost:3004/user").then(
      (loadedUsers) => loadedUsers.json()
    );

    const user = users.find(({ login }) => login === authLogin);

    if (!user) {
      return {
        error: "Пользователь не найден",
        res: null,
      };
    }
    if (authPassword !== user.password) {
      return {
        error: "Неверный пароль",
        res: null,
      };
    }

    const session = {
      logOut() {
        Object.keys(session).forEach((key) => delete session[key]);
      },
      removeComment() {
        console.log("removeComment");
      },
    };

    return {
      error: null,
      res: session,
    };
  },

  async register(regLogin, regPassword) {
    const users = await fetch("http://localhost:3004/user").then(
      (loadedUsers) => loadedUsers.json()
    );
    const user = users.find(({ login }) => login === regLogin);

    if (user) {
      return {
        error: "Такой пользователь уже существует",
        res: null,
      };
    }

    fetch("http://localhost:3004/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ 
        login: regLogin,
        password: regPassword,
        registed_at: generatedDate(),
        role_id: 2,
     }),
    })

    const session = {
        logOut() {
          Object.keys(session).forEach((key) => delete session[key]);
        },
        removeComment() {
          console.log("removeComment");
        },
      };

    return {
        error: null,
        res: session,
    }
  },
};
