"use client";
import supportedGames, { IGame } from "@/lib/data/supportedGames";
import { createContext, useContext, useState } from "react";

type AppContext = {
  SelectedGameColor: string;
  SelectedGame: Array<IGame>;
};
const AppContext = createContext({} as any);

export const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [selectedGameColor, setSelectedGameColor] = useState("#DF4FB6");
  const [selectedGame, setSelectedGame] = useState<IGame>(supportedGames[0]);
  return (
    <AppContext.Provider
      value={{
        SelectedGameColor: [selectedGameColor, setSelectedGameColor],
        SelectedGame: [selectedGame, setSelectedGame],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
