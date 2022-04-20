import axios from "axios";
import { useState } from "react";

export const useFacadeUserAPI = () => {
  const [users, setUsers] = useState<any>([]);
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);

  async function getUsers() {
    setActionExecuting(true);
    try {
      const resp = await axios.get("/api/users");
      setUsers(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function createUser(user: any) {
    setActionExecuting(true);
    try {
      await axios.post("/api/users", user);
      setUsers([...users, user]);
    } catch (err) {
      console.log(err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function deleteUser(id: string) {
    setActionExecuting(true);
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers(users.filter((user: any) => user.id !== id));
    } catch (err) {
      console.log(err);
    } finally {
      setActionExecuting(false);
    }
  }

  return {
    users,
    actionExecuting,
    getUsers,
    createUser,
    deleteUser,
  };
};
