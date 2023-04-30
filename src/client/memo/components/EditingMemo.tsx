import { Memo } from "@/types/memo";
import { useContext, useEffect, useState } from "react";
import { MemoSaveButton } from "./MemoSaveButton";
import { useMemoUsecase } from "../hooks/useMemoUsecase";

type Props = {
  memo: Memo | null;
  handleSave: (
    memo:
      | {
          id: string;
          title: string;
          content: string;
        }
      | {
          title: string;
          content: string;
        }
  ) => void;
};

export const EditingMemo = ({ memo, handleSave }: Props) => {
  const isNewMemo = memo === null;
  const { cancelEdit } = useMemoUsecase();

  const [content, setContent] = useState(isNewMemo ? "" : memo.content);

  const handleClickSaveButton = () => {
    if (memo) {
      handleSave({ id: memo.id, title: memo.title, content });
      return;
    }
    handleSave({ title: "New Memo", content });
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <textarea value={content} onChange={handleChangeContent} />
      <MemoSaveButton handleSave={handleClickSaveButton} />
      {!isNewMemo && <button onClick={cancelEdit}> 취소 </button>}
    </>
  );
};
