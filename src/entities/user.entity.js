const entity = {
    register: async (data) => {},
    login: async (data) => {},
    logout: () => {
        try {
        localStorage.removeItem('id_token');
    } catch (error) {
        console.log("API-ERROR]: Method: .logout() | Message -", error.toString())
    }
    },
};

export default entity;