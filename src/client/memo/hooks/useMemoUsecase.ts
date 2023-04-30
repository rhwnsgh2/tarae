import { Memo } from "@/types/memo";
import { MemoUsecase } from "../usecase";
import { Store } from "@/server/store/localStorage/store";
import { useCallback, useMemo } from "react";

export const useMemoUsecase = (): MemoUsecase => {
  const store = useMemo(() => new Store(), []);

  const getMemoList = useCallback((): Promise<Memo[]> => {
    return store.getMemoList();
  }, [store]);

  const saveMemo = useCallback(
    (memo: Pick<Memo, "title" | "content">): Promise<Memo> => {
      return store.createMemo(memo);
    },
    [store]
  );

  return {
    getMemoList,
    saveMemo,
  };
};
