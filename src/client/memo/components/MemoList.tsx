import { useGetMemoList } from "../hooks/useGetMemoList";
import { MemoItem } from "./MemoItem";

export const MemoList = () => {
  const memoList = useGetMemoList();

  return (
    <div>
      {memoList.map((memo) => (
        <MemoItem memo={memo} key={memo.id} />
      ))}
    </div>
  );
};
