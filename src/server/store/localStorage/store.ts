import { Memo } from "@/types/memo";
import { IStore } from "../interface";
import { v4 as uuid } from "uuid";

export class Store implements IStore {
  getMemoList(): Promise<Memo[]> {
    const memoList = this.parseMemoListString(localStorage.getItem("memoList"));

    return Promise.resolve(memoList);
  }

  getMemo(id: number): Promise<Memo> {
    throw new Error("Method not implemented.");
  }

  createMemo(memo: Pick<Memo, "title" | "content">): Promise<Memo> {
    const memoList = this.parseMemoListString(localStorage.getItem("memoList"));

    const newMemo: Memo = {
      id: uuid(),
      title: memo.title,
      content: memo.content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newMemoList = [...memoList, newMemo];

    localStorage.setItem("memoList", JSON.stringify(newMemoList));

    return Promise.resolve(newMemo);
  }

  updateMemo(memo: Pick<Memo, "id" | "title" | "content">): Promise<Memo> {
    const memoList = this.parseMemoListString(localStorage.getItem("memoList"));

    const originMemo = memoList.find((memo) => memo.id === memo.id);

    if (!originMemo) {
      return this.createMemo(memo);
    }

    const newMemo: Memo = {
      ...originMemo,
      title: memo.title,
      content: memo.content,
      updatedAt: new Date(),
    };

    const newMemoList = memoList.map((memo) => {
      if (memo.id === memo.id) {
        return newMemo;
      }
      return memo;
    });

    localStorage.setItem("memoList", JSON.stringify(newMemoList));

    return Promise.resolve(newMemo);
  }

  deleteMemo(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  private parseMemoListString(memoList: string | null) {
    if (memoList === null) return [];

    return JSON.parse(memoList) as Memo[];
  }
}
