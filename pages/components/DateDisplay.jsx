import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function DateDisplay({ date }) {
  const [dateMessage, setDateMessage] = useState("");

  //firebaseからとってきた日付データ(tipmestanp型)を
  //2023-5-4:16 みたいな形式に直している
  useEffect(() => {
    if (date) {
      const Year = date.getFullYear();
      const Month = date.getMonth() + 1;
      const Day = date.getDate();
      const Hours = date.getHours();
      const Minutes = date.getMinutes();
      const dates =
        Year + "-" + Month + "-" + Day + " " + Hours + ":" + Minutes;
      setDateMessage(dates);
    }
  }, [date]);
  return <>{dateMessage}</>;
}
