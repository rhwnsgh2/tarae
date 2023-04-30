import { Memo } from "@/types/memo";
import { useContext } from "react";
import { ActiveMemoContext } from "./MemoMain";

export const MemoItem = ({ memo }: { memo: Memo }) => {
  const activeMemo = useContext(ActiveMemoContext);

  const handleClickSelect = () => {
    activeMemo.setActiveMemoId(memo.id);
  };

  return (
    <div>
      {memo.title} {memo.content}
      <button onClick={handleClickSelect}> 선택 </button>
    </div>
  );
};
