"use client";

import { Memo } from "@/types/memo";
import { MemoItem } from "./MemoItem";

export const MemoList = ({ memoList }: { memoList: Memo[] }) => {
  return (
    <div>
      {memoList.map((memo) => (
        <MemoItem memo={memo} key={memo.id} />
      ))}
    </div>
  );
};
