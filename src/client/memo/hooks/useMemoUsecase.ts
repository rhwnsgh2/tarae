import { Memo } from "@/types/memo";
import { MemoUsecase } from "../usecase";
import { Store } from "@/server/store/localStorage/store";

export const useMemoUsecase = (): MemoUsecase => {
  const store = new Store();

  const getMemoList = (): Promise<Memo[]> => {
    return store.getMemoList();
  };

  const saveMemo = (memo: Pick<Memo, "title" | "content">): Promise<Memo> => {
    return store.createMemo(memo);
  };

  return {
    getMemoList,
    saveMemo,
  };
};
