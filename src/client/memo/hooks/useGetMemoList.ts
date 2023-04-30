"use client";

import { useEffect, useState } from "react";
import { useMemoUsecase } from "./useMemoUsecase";
import { Memo } from "@/types/memo";

export const useGetMemoList = () => {
  const { getMemoList } = useMemoUsecase();

  const [memoList, setMemoList] = useState<Memo[]>([]);

  useEffect(() => {
    getMemoList().then((memoList) => {
      setMemoList(memoList);
    });
  }, [getMemoList]);

  return memoList;
};
