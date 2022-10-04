import {useEffect, useRef, useState} from "react";
import {useFetching} from "./utils/hooks/useFetching";
import UsersRepository from "./data/UsersRepository";
import {Toast} from 'primereact/toast';
import UsersTable from "./utils/components/UsersTable";
import LoadingIndicator from "./utils/components/LoadingIndicator";
import ErrorOverlap from "./utils/components/ErrorOverlap";

function App() {
    const [users, setUsers] = useState([])

    const successToast = useRef(null)
    const editToast = useRef(null)
    const deleteToast = useRef(null)

    const [fetchUsers, isUsersLoading, isUsersError] = useFetching(async () => {
        const usersList = await UsersRepository.getUsers()
        setUsers(usersList)
        successToast.current.show({
            severity: 'success',
            summary: 'Получение списка пользователей',
            detail: 'Данные пользователей успешно получены'
        });
    })

    const deleteUser = async (user) => {
        try {
            await UsersRepository.deleteUser(user.id)
            deleteToast.current.show({
                severity: 'error',
                summary: 'Удаление пользователя',
                detail: 'Пользователь ' + user.firstName + ' ' + user.lastName + ' удален'
            });
            setUsers(users.filter(p => p.id !== user.id))
        } catch (e) {
            deleteToast.current.show({
                severity: 'warn',
                summary: 'Удаление пользователя',
                detail: 'Пользователя ' + user.firstName + ' ' + user.lastName + ' не получилось удалить'
            });
        }
    }

    const editUser = (user) => {
        editToast.current.show({
            severity: 'warn',
            summary: 'Редактирование пользователя',
            detail: 'Пользователь ' + user.firstName + ' ' + user.lastName + ' отредактирован'
        });
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <Toast ref={successToast}/>
            <Toast ref={editToast}/>
            <Toast ref={deleteToast}/>
            <div className="App">
                {isUsersLoading
                    ? <LoadingIndicator/>
                    : isUsersError
                        ? <ErrorOverlap retry={fetchUsers}/>
                        : <UsersTable users={users} deleteUser={deleteUser} editUser={editUser}/>
                }
            </div>
        </div>
    );
}

export default App;
