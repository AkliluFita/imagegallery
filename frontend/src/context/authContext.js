import { createContext, useEffect, useState } from "react";
import http from "../httpCommon";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("current_user")) || null
  );

  // authentication
  const login = async (inputs) => {
    const res = await http.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await http.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("current_user", JSON.stringify(currentUser));
  }, [currentUser]);
  useEffect(() => {
    localStorage.setItem("current_user", JSON.stringify(currentUser));
  }, [currentUser]);

  // call single user
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchSingleUser = async () => {
      try {
        const res = await http.get(`/users/${currentUser.id}`);
        setUser(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleUser();
  }, [currentUser]);

  // list all users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await http.get(`/users`);
        setUsers(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, [currentUser]);

  console.log(user);

  console.log(currentUser);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, login, logout, user, users }}
    >
      {children}
    </AuthContext.Provider>
  );
};
