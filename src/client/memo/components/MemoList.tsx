import { useEffect, useState } from "react";
import { useMemoUsecase } from "../hooks/useMemoUsecase";
import { Memo } from "@/types/memo";

export const MemoList = () => {
  const { getMemoList } = useMemoUsecase();

  const [memoList, setMemoList] = useState<Memo[]>([]);

  useEffect(() => {
    getMemoList().then((memoList) => {
      setMemoList(memoList);
    });
  }, [getMemoList]);

  return <div> </div>;
};
