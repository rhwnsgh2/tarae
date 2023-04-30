import { Memo } from "@/types/memo";
import { MemoSaveButton } from "./MemoSaveButton";
import { useState } from "react";

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

export const MemoForm = ({ memo, handleSave }: Props) => {
  const [content, setContent] = useState(memo?.content ?? "");

  const handleClickSaveButton = () => {
    if (memo) {
      handleSave({ id: memo.id, title: memo.title, content });
      return;
    }
    handleSave({ title: "New Memo", content });
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  return (
    <>
      <textarea
        placeholder="Record your ideas"
        value={content}
        onChange={handleChangeContent}
      ></textarea>
      <MemoSaveButton handleSave={handleClickSaveButton} />
    </>
  );
};
