import { Memo } from "@/types/memo";
import { createContext, useState } from "react";

export const ActiveMemoContext = createContext<{
  activeMemo: Memo | null;
  isEdit: boolean;
  setActiveMemo: (memo: Memo) => void;
  setEdit: (isEdit: boolean) => void;
}>({
  activeMemo: null,
  isEdit: false,
  setActiveMemo: () => {},
  setEdit: () => {},
});

export const ActiveMemoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeMemo, setActiveMemo] = useState<Memo | null>(null);
  const [isEdit, setEdit] = useState<boolean>(false);
  return (
    <ActiveMemoContext.Provider
      value={{
        activeMemo,
        setActiveMemo,
        isEdit,
        setEdit,
      }}
    >
      {children}
    </ActiveMemoContext.Provider>
  );
};
