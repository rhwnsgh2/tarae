import { Memo } from "@/types/memo";

export const MemoItem = ({ memo }: { memo: Memo }) => {
  return <div>{memo.title}</div>;
};
