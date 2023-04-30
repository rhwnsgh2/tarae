import { useMemoUsecase } from "../hooks/useMemoUsecase";

export const MemoSaveButton = ({ handleSave }: { handleSave: () => void }) => {
  return <button onClick={handleSave}> Save </button>;
};
