"use client";

import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [layoutIsGrid, setlayoutIsGrid] = useState("");

  useEffect(() => {
    const storedLayout = localStorage.getItem("layout") || "grid";
    setlayoutIsGrid(storedLayout);
  }, []);

  return (
    <AppContext.Provider value={{ layoutIsGrid, setlayoutIsGrid }}>
      {children}
    </AppContext.Provider>
  );
};
