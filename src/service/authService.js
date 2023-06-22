const storeAuthToken = (token) => {
    localStorage.setItem('token', token)
}

const getAuthToken = () => {
    return localStorage.getItem('token')
}


const removeAuthToken = () => {
    localStorage.removeItem('token')
}

const isAuthenticated = () => {
    const token = getAuthToken();
    return !!token;
}

const storeRole = (role) => {
    localStorage.setItem('role', role)
}

const getRole = () => {
    return localStorage.getItem('role')
}

const authService = {
    storeAuthToken,
    getAuthToken,
    removeAuthToken,
    isAuthenticated,
    storeRole,
    getRole
};

export default authService;