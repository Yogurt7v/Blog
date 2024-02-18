export const transformUser = (dbUser) => {
    return {
        id: dbUser.id,
        login: dbUser.login,
        roleId: dbUser.role_id,
        password: dbUser.password,
        registedAt: dbUser.registed_at,
    };
}