import { Memo } from "@/types/memo";

interface MemoUsecase {
  getMemoList(): Promise<Memo[]>;
}
