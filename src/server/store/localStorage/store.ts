import { Memo } from "@/types/memo";
import { IStore } from "../interface";

export class LocalStorage implements IStore {
  getMemoList(): Promise<Memo[]> {
    const memoList = this.parseMemoListString(localStorage.getItem("memoList"));

    return Promise.resolve(memoList);
  }

  getMemo(id: number): Promise<Memo> {
    throw new Error("Method not implemented.");
  }

  createMemo(memo: Memo): Promise<Memo> {
    const memoList = this.parseMemoListString(localStorage.getItem("memoList"));

    const newMemoList = [...memoList, memo];

    localStorage.setItem("memoList", JSON.stringify(newMemoList));

    return Promise.resolve(memo);
  }

  updateMemo(memo: Memo): Promise<Memo> {
    throw new Error("Method not implemented.");
  }

  deleteMemo(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  private parseMemoListString(memoList: string | null) {
    if (memoList === null) return [];

    return JSON.parse(memoList) as Memo[];
  }
}
