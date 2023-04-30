import { Memo } from "@/types/memo";
import { MemoUsecase } from "../usecase";

export const useMemoUsecase = (): MemoUsecase => {
  const getMemoList = (): Promise<Memo[]> => {
    return Promise.resolve([]);
  };

  return {
    getMemoList,
  };
};
