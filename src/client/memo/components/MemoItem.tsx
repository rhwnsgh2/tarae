import { Memo } from "@/types/memo";
import { useMemoUsecase } from "../hooks/useMemoUsecase";

export const MemoItem = ({ memo }: { memo: Memo }) => {
  const { selectMemo } = useMemoUsecase();

  return (
    <div>
      {memo.title} {memo.content}
      <button onClick={(e) => selectMemo(memo)}> 선택 </button>
    </div>
  );
};
