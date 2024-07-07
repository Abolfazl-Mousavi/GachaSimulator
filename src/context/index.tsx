"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>({ SelectedGameColor: "#DF4FB6" });

export const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [state, setState] = useState({ SelectedGameColor: "#DF4FB6" });
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
export function useAppContext() {
  return useContext(AppContext);
}
