"use client";

import { useGetMemoList } from "../hooks/useGetMemoList";
import { useMemoUsecase } from "../hooks/useMemoUsecase";
import { MemoItem } from "./MemoItem";
import { MemoSaveButton } from "./MemoSaveButton";

export const MemoList = () => {
  const memoList = useGetMemoList();

  const { saveMemo } = useMemoUsecase();

  const handleSave = () => {
    saveMemo({ title: "TestTitle", content: "TestContent" });
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
