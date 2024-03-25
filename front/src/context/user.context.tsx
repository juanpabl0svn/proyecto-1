"use client";

import { createContext, useContext, useReducer } from "react";
import UserReducer from "./user.reducer";
import { IMESSAGE, IUSER } from "@/models/types";

const INITIAL_STATE: {
  user: IUSER | null;
  isLoggedIn: boolean;
  messages: IMESSAGE[];
  addMessage: (message: IMESSAGE) => void;
  logIn: (user: IUSER) => void;
} = {
  user: null,
  isLoggedIn: false,
  messages: [],
  addMessage: () => {},
  logIn: () => {},
};

const UserContext = createContext(INITIAL_STATE);

export const useUserContext = () => useContext(UserContext);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
