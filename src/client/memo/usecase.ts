import { Memo } from "@/types/memo";

export interface MemoUsecase {
  getMemoList(): Promise<Memo[]>;
}
