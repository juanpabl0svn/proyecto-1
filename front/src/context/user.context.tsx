"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import UserReducer from "./user.reducer";
import { IMESSAGE, IUSER } from "@/models/types";

export const INITIAL_STATE: {
  user: IUSER | null;
  isLoggedIn: boolean;
  messages: IMESSAGE[];
  addMessage: (message: IMESSAGE) => void;
  logIn: (user: IUSER) => void;
  logOut: () => void;
} = {
  user: null,
  isLoggedIn: false,
  messages: [],
  addMessage: () => {},
  logIn: () => {},
  logOut: () => {},
};

const UserContext = createContext(INITIAL_STATE);

export const useUserContext = () => useContext(UserContext);

export default function UserProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: IUSER | null;
}) {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  useEffect(() => {
    if (user) {
      dispatch({ type: "LOG_IN", payload: user });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        logIn(user: IUSER) {
          dispatch({ type: "LOG_IN", payload: user });
        },
        addMessage(message: IMESSAGE) {
          dispatch({ type: "ADD_MESSAGE", payload: message });
        },
        logOut() {
          dispatch({ type: "LOG_OUT" });
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
