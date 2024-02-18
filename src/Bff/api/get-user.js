export const getUser = async (loginToFind) => {
 return fetch(`http://localhost:3004/users?login=${loginToFind}`)
  .then((loadedUser) => loadedUser.json()).then(([loadedUser]) =>loadedUser && ({
    id: loadedUser.id, 
    login: loadedUser.login, 
    roleId: loadedUser.role_id, 
    password: loadedUser.password,
    registedAt: loadedUser.registed_at}));
};

