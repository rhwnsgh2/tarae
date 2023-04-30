import { Memo } from "@/types/memo";
import { MemoSaveButton } from "./MemoSaveButton";
import { useContext, useState } from "react";
import { EditingMemo } from "./EditingMemo";
import { ActiveMemoContext } from "../context/ActiveMemoProvider";

type Props = {
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

export const ActiveMemo = ({ handleSave }: Props) => {
  const { activeMemo, isEdit, setEdit } = useContext(ActiveMemoContext);

  const handleToggleEdit = () => {
    setEdit(!isEdit);
  };

  return (
    <>
      {isEdit ? (
        <EditingMemo
          memo={activeMemo}
          handleSave={handleSave}
          handleClickCancel={handleToggleEdit}
        />
      ) : (
        <div onDoubleClick={handleToggleEdit}>{activeMemo?.content}</div>
      )}
    </>
  );
};
