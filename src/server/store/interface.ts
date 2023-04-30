import { Memo } from "@/types/memo";

export interface IStore {
  getMemoList(): Promise<Memo[]>;
  getMemo(id: number): Promise<Memo>;
  createMemo(memo: Memo): Promise<Memo>;
  updateMemo(memo: Memo): Promise<Memo>;
  deleteMemo(id: number): Promise<void>;
}
