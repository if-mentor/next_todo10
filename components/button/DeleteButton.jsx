import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { db } from "@/libs/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export const DeleteButton = ({ id }) => {
  const handleClickDelete = async () => {
    if (confirm("削除しますがよろしいですか？")) {
      await deleteDoc(doc(db, "todos", id)).then(() => {
        alert("削除が完了しました");
      }).catch((error) => {
        console.error("failed", error);
        alert("削除に失敗しました");
      });
    } else {
      alert("キャンセルしました");
    }
  }

  return (
    <IconButton
      size={"sm"}
      colorScheme={"red"}
      icon={<DeleteIcon />}
      onClick={handleClickDelete}
    />
  );
}
