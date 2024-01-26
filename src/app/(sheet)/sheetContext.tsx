"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { CharacterAttributes } from "./definitions";

type SheetState = {
  attributes: CharacterAttributes;
  setAttributes: React.Dispatch<React.SetStateAction<CharacterAttributes>>;
};

const SheetContext = createContext<SheetState | undefined>(undefined);

export function SheetWrapper({ children }: { children: ReactNode }) {
  const [attributes, setAttributes] = useState<CharacterAttributes>({
    agi: 0,
    for: 0,
    int: 0,
    pre: 0,
    vig: 0,
  });

  const sheetState = useMemo(() => {
    return {
      attributes,
      setAttributes,
    };
  }, [attributes]);

  return (
    <SheetContext.Provider value={sheetState}>{children}</SheetContext.Provider>
  );
}

export function useSheetContext(): SheetState {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("useSheetContext must be used within a SheetWrapper");
  }
  return context;
}