import { MdAttachMoney } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";

export const Tag = ({ data }: any) => {
  const IconTag = () => {
    switch (data?.icon) {
      case "money":
        return (
          <img
            className=":w-[15px] h-[20px] max-sm:w-[7px] max-sm:h-[10px]"
            src="/icon/money.svg"
          />
        );
      case "location":
        return (
          <img
            className="w-[13px] h-[18px] max-sm:w-[7px] max-sm:h-[9px]"
            src="/icon/location.svg"
          />
        );
      case "time":
        return (
          <img
            className="w-[15px] h-[15px] max-sm:w-[7px] max-sm:h-[7px]"
            src="/icon/clock-normal.svg"
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="border border-white py-1 rounded-full pl-[8px] pr-[10px] max-sm:pl-[4px] max-sm:pr-[4px] max-sm:text-[8px] flex items-center gap-2 max-sm:gap-[3px] text-[14px]">
      <span>{IconTag()}</span>
      {data?.text}
    </div>
  );
};
