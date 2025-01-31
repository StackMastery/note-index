"use client";

import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const StoredLayout = localStorage.getItem("layout") || "grid";
  const [layoutIsGrid, setlayoutIsGrid] = useState(StoredLayout);

  return (
    <AppContext.Provider
      value={{
        layoutIsGrid,
        setlayoutIsGrid,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
