"use client";
import { createContext, useMemo, useState } from "react";
import { useGetMemoList } from "../hooks/useGetMemoList";
import { useMemoUsecase } from "../hooks/useMemoUsecase";
import { ActiveMemo } from "./ActiveMemo";
import { MemoList } from "./MemoList";

export const ActiveMemoContext = createContext<{
  activeMemoId: string | null;
  setActiveMemoId: (id: string) => void;
}>({
  activeMemoId: null,
  setActiveMemoId: () => {},
});

export const MemoMain = () => {
  const { memoList, refetchMemoList } = useGetMemoList();
  const [activeMemoId, setActiveMemoId] = useState<string | null>(null);
  const { saveMemo } = useMemoUsecase();

  const handleSave = (
    memo:
      | {
          id: string;
          title: string;
          content: string;
        }
      | {
          title: string;
          content: string;
        }
  ) => {
    saveMemo(memo).then(() => {
      refetchMemoList();
    });
  };

  const activeMemo = useMemo(() => {
    return memoList.find((memo) => memo.id === activeMemoId);
  }, [activeMemoId, memoList]);

  return (
    <ActiveMemoContext.Provider
      value={{
        activeMemoId,
        setActiveMemoId,
      }}
    >
      <ActiveMemo handleSave={handleSave} memo={activeMemo} />
      <MemoList memoList={memoList} />
    </ActiveMemoContext.Provider>
  );
};
