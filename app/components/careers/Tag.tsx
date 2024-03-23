import { MdAttachMoney } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";

export const Tag = ({ data }: any) => {
  const IconTag = () => {
    switch (data?.icon) {
      case "money":
        return <MdAttachMoney size={20} />;
      case "location":
        return <IoLocationOutline size={20} />;
      case "time":
        return <LuClock4 size={20} />;
      default:
        return null;
    }
  };
  return (
    <div className="border border-white rounded-full pl-[4px] pr-[8px] max-sm:pl-[2px] max-sm:pr-[4px] max-sm:text-[8px] flex items-center gap-1">
      <span>{IconTag()}</span>
      {data?.text}
    </div>
  );
};
