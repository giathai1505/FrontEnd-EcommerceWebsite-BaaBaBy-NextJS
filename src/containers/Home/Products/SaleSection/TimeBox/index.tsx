import { useState, useEffect } from "react";
import { TimeBoxContainer, TimeItem } from "./styles";

interface ITimeBoxProps {
  countdown: number;
}

const TimeBox: React.FC<ITimeBoxProps> = ({ countdown: cd }) => {
  const [countdown, setCountdown] = useState(cd);
  const hours = Math.floor(countdown / (60 * 60));
  const minute = Math.floor((countdown - hours * (60 * 60)) / 60);
  const second = countdown - (hours * 60 * 60 + minute * 60);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [countdown]);

  return (
    <TimeBoxContainer>
      <TimeItem>{hours}</TimeItem>:
      <TimeItem>{minute < 10 ? `0${minute}` : minute}</TimeItem>:
      <TimeItem>{second < 10 ? `0${second}` : second}</TimeItem>
    </TimeBoxContainer>
  );
};

export default TimeBox;
