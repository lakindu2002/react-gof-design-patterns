import axios from "axios";
import { FC, useCallback, useEffect, useState } from "react";

export const UserTable = (props: any) => {
  console.log(props.users, props.onDelete);
  return <></>;
};

export const UserCreateModal = (props: any) => {
  console.log(props.onCreate);
  return <></>;
};

export const NoFacade: FC = () => {
  const [users, setUsers] = useState<any>([]);

  const fetchUsers = useCallback(async () => {
    const resp = await axios.get(`/api/users`);
    setUsers(resp.data);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleUserDelete = async (id: string) => {
    await axios.delete(`/api/users/${id}`);
    setUsers(users.filter((user: any) => user.id !== id));
  };

  const handleCreateUser = async (user: any) => {
    if (!users.find((u: any) => u.id === user.id)) {
      await axios.post(`/api/users`, user);
      setUsers([...users, user]);
    } else {
      console.log("User already exists");
    }
  };
  return (
    <>
      <UserTable users={users} onDelete={handleUserDelete} />
      <UserCreateModal onCreate={handleCreateUser} />
    </>
  );
};
