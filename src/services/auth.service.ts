import http from "./http.service";

export async function loginUser({ data }: any) {
    try {
        const res = await http.post("/api/user/login", data);
        return res // Return the data directly if it's a successful response
    } catch (error: any) {
        console.error('Login error:', error);
        return error
    }
}

export async function logoutUser() {
    try {
        const res = await http.post('/api/user/logout', {});
        return res.data // Return the data directly if it's a successful response
    } catch (error: any) {
        console.error('Login error:', error);
        return Promise.reject(error.response ? error.response.data : error.message);
    }
}