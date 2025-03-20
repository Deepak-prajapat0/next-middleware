import http from "./http.service";


interface ApiData {
    data: {
        email: string,
        password: string
    }
}

export async function loginUser({ data }: ApiData) {
    try {
        const res = await http.post("/api/user/login", data);
        return res // Return the data directly if it's a successful response
    } catch (error: unknown) {
        if (error instanceof Error) {
            return error
        }
        return error
    }
}

export async function logoutUser() {
    try {
        const res = await http.post('/api/user/logout', {});
        return res.data // Return the data directly if it's a successful response
    } catch (error: unknown) {
        if (error instanceof Error) {
            return error
        }
        return error
    }
}