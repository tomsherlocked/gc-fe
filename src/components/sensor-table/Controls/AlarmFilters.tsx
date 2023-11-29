import { FC, useState } from "react";

export const AlarmFilters: FC<{
  handleFilterUpdate: (filterKey: string, value: boolean) => void;
}> = ({ handleFilterUpdate }) => {
  const [alarmValue, setAlarmValue] = useState(false);

  const handleButtonClick = () => {
    setAlarmValue((alarmValue) => !alarmValue);
    handleFilterUpdate("alarm", !alarmValue);
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`w-full rounded-md p-1 font-semibold ${
        alarmValue
          ? "hover:bg-red-500 bg-red-400"
          : "hover:bg-green-500 bg-green-400"
      }`}
    >
      {alarmValue ? "On" : "Off"}
    </button>
  );
};
