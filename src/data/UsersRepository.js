import UsersService from "./UsersService";

export default class UsersRepository{

    static async getUsers(){
        const usersList = (await UsersService.getUsers()).data
        const users = usersList.map((user) => {
            return {id: user.id, email: user.email, firstName: user.first_name, lastName: user.last_name}
        })
        return users
    }

    static async deleteUser(id){
        await UsersService.deleteUser(id)
    }
}