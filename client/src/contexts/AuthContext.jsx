import { useState } from "react";
import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";


export const AuthContext = createContext();

export function AuthContextProvider(props) {
  const [authState, setAuthState] = usePersistedState('auth', {});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);

    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}