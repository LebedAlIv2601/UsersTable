import React, {useRef, useState} from 'react';
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {ContextMenu} from "primereact/contextmenu";

const UsersTable = ({users, editUser, deleteUser}) => {

    const [selectedUser, setSelectedUser] = useState(null)
    const menuModel = [
        {label: 'Edit', icon: 'pi pi-fw pi-pencil', command: () => editUser(selectedUser)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteUser(selectedUser)}
    ];
    const cm = useRef(null);

    return (
        <div>
            <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedUser(null)}/>
            <DataTable
                value={users}
                header="Таблица пользователей"
                showGridlines
                onContextMenuSelectionChange={e => setSelectedUser(e.value)}
                onContextMenu={e => cm.current.show(e.originalEvent)}
                responsiveLayout="scroll"
            >
                <Column field="id" header="ID" sortable filter></Column>
                <Column field="email" header="Email" sortable filter></Column>
                <Column field="firstName" header="First Name" sortable filter></Column>
                <Column field="lastName" header="Last Name" sortable filter></Column>
            </DataTable>
        </div>
    );
};

export default UsersTable;