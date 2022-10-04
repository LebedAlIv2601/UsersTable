import axios from "axios";

export default class UsersService {
    static BASE_URL = "https://reqres.in/";

    static async getUsers() {
        const users = (await axios.get(`${this.BASE_URL}api/users`)).data
        return users
    }

    static async deleteUser(id) {
        await axios.get(`${this.BASE_URL}api/users/${id}`)
    }
}