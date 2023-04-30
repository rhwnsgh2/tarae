"use client";
import { useGetMemoList } from "../hooks/useGetMemoList";
import { useMemoUsecase } from "../hooks/useMemoUsecase";
import { ActiveMemo } from "./ActiveMemo";
import { MemoList } from "./MemoList";
import { ActiveMemoProvider } from "../context/ActiveMemoProvider";

export const MemoMain = () => {
  const { memoList, refetchMemoList } = useGetMemoList();

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

  return (
    <ActiveMemoProvider>
      <ActiveMemo handleSave={handleSave} />
      <MemoList memoList={memoList} />
    </ActiveMemoProvider>
  );
};
