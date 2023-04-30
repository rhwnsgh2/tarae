import { Memo } from "@/types/memo";
import { IStore } from "../interface";

export class LocalStorage implements IStore {
  getMemoList(): Promise<Memo[]> {
    throw new Error("Method not implemented.");
  }
  getMemo(id: number): Promise<Memo> {
    throw new Error("Method not implemented.");
  }
  createMemo(memo: Memo): Promise<Memo> {
    throw new Error("Method not implemented.");
  }
  updateMemo(memo: Memo): Promise<Memo> {
    throw new Error("Method not implemented.");
  }
  deleteMemo(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
