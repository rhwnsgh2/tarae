import { Memo } from "@/types/memo";
import { MemoUsecase } from "../usecase";
import { Store } from "@/server/store/localStorage/store";
import { useCallback, useContext, useMemo } from "react";
import { ActiveMemoContext } from "../context/ActiveMemoProvider";

export const useMemoUsecase = (): MemoUsecase => {
  const activeMemoContext = useContext(ActiveMemoContext);
  const store = useMemo(() => new Store(), []);

  const getMemoList = useCallback((): Promise<Memo[]> => {
    return store.getMemoList();
  }, [store]);

  const saveMemo = useCallback(
    (
      memo:
        | Pick<Memo, "title" | "content">
        | Pick<Memo, "id" | "title" | "content">
    ): Promise<Memo> => {
      if ("id" in memo) {
        return store.updateMemo(memo);
      }

      return store.createMemo(memo);
    },
    [store]
  );

  const selectMemo = useCallback(
    (memo: Memo) => {
      console.log(memo.id);
      activeMemoContext.setActiveMemo(memo);
      activeMemoContext.setEdit(false);
    },
    [activeMemoContext]
  );

  const cancelEdit = useCallback(() => {
    activeMemoContext.setEdit(false);
  }, [activeMemoContext]);

  return {
    getMemoList,
    saveMemo,
    selectMemo,
    cancelEdit,
  };
};
