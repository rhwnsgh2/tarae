"use client";
import { useGetMemoList } from "../hooks/useGetMemoList";
import { useMemoUsecase } from "../hooks/useMemoUsecase";
import { MemoForm } from "./MemoForm";
import { MemoList } from "./MemoList";

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
    <>
      <MemoForm handleSave={handleSave} memo={null} />
      <MemoList memoList={memoList} />
    </>
  );
};
