"use client";

import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [popopOpen, setpopopOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        popopOpen,
        setpopopOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
