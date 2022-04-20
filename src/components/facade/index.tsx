import axios from "axios";
import { FC, useCallback, useEffect, useState } from "react";
import { useFacadeUserAPI } from "../../hooks/use-facade-user-api";

export const UserTable = (props: any) => {
    console.log(props.users, props.onDelete);
    return <></>;
};

export const UserCreateModal = (props: any) => {
    console.log(props.onCreate);
    return <></>;
};

export const Facade: FC = () => {
    const userFacade = useFacadeUserAPI();
    const { createUser, deleteUser, getUsers, users } = userFacade;

    const fetchUsers = useCallback(async () => {
        // replace with facade API method to simplify code
        await getUsers();
    }, [getUsers]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleUserDelete = async (id: string) => {
        // replace with Facade method to hide complex code required in deleting
        await deleteUser(id);
    };

    const handleCreateUser = async (user: any) => {
        // replace with a facade method to hide complex code required in creating
        await createUser(user);
    };
    return (
        <>
            <UserTable users={users} onDelete={handleUserDelete} />
            <UserCreateModal onCreate={handleCreateUser} />
        </>
    );
};
