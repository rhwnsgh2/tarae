import { Memo } from "@/types/memo";

export interface MemoUsecase {
  getMemoList(): Promise<Memo[]>;
  saveMemo(memo: Pick<Memo, "title" | "content">): Promise<Memo>;
  selectMemo(memo: Memo): void;
  cancelEdit(): void;
}
