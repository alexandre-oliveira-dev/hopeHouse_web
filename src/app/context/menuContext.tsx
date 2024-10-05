/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, {createContext, useContext, useState} from "react";

interface ContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = createContext({} as ContextProps);

export function MenucontextProvider({children}: {children: React.ReactNode}) {
  const [open, setOpen] = useState(false);

  return (
    <MenuContext.Provider value={{open, setOpen}}>
      {children}
    </MenuContext.Provider>
  );
}

export default function useMenuContext() {
  return useContext(MenuContext);
}
