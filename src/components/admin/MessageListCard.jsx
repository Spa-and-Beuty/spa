import { AvatarIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const MessageListCard = ({ message }) => {
  return (
    <Link href={`messages/${message.id}`}>
      <div
        className="
        grid grid-cols-4 items-center gap-2 border-b border-gray-300 hover:border p-2
        overflow-x-auto scrollbar-thin"
      >
        <div className="col-span-1 flex items-center">
          <input className="scale-150 mr-3" type="checkbox" disabled />
          <span className="text-base font-bold mr-20 whitespace-nowrap">
            {message.fullname}
          </span>
        </div>
        <h2
          className="
        col-span-3 text-base flex items-center whitespace-nowrap overflow-hidden font-bold"
        >
          <span className="flex-grow overflow-hidden text-ellipsis whitespace-nowrap">
            {message.subject}
          </span>
          <span className="text-base font-normal px-2">-</span>
          <span
            className="
          flex-grow text-sm text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {message.message}
          </span>
        </h2>
      </div>
    </Link>
  );
};
