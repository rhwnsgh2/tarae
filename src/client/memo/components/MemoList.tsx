"use client";

import { useGetMemoList } from "../hooks/useGetMemoList";
import { useMemoUsecase } from "../hooks/useMemoUsecase";
import { MemoItem } from "./MemoItem";
import { MemoSaveButton } from "./MemoSaveButton";

export const MemoList = () => {
  const { memoList, refetchMemoList } = useGetMemoList();

  const { saveMemo } = useMemoUsecase();

  const handleSave = () => {
    saveMemo({ title: "TestTitle", content: "TestContent" }).then(() => {
      refetchMemoList();
    });
  };

  return (
    <div>
      {memoList.map((memo) => (
        <MemoItem memo={memo} key={memo.id} />
      ))}
      <MemoSaveButton handleSave={handleSave} />
    </div>
  );
};
