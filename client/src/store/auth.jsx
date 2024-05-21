import { createContext, useContext, useState, useEffect } from "react";
export const AuthContext = createContext();
import { API } from '../apiconfig';
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setService] = useState([]);
  const authorization =`Bearer ${token}`;

  // const API = import.meta.env.API;




  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //   this is the get the value in either true or false in the original state of token
  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedin ", isLoggedIn);

  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };


  // function to check the user Authentication or not
  const userAuthentication = async () => {
    try {
      const response = await fetch(`${API}/user`, {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });

      if (response.ok) {
        const data = await response.json();

        // our main goal is to get the user data 👇
        setUser(data.userData);
        console.log(data.userData)
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };


  //to fetch the service data from backend
  const getServiceData = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });

      if (response.ok) {
      }
      const data = await response.json();
      setService(data.msg);
      console.log("service", data.msg);
    } catch (error) {
      console.log(error);
    }
  };
    useEffect(() => {
    getServiceData();
    userAuthentication();
  }, []);





  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services ,authorization }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};