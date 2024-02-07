export const getUsers = () => fetch("http://localhost:3004/user").then(
    (loadedUsers) => loadedUsers.json()
  );

  export default getUsers