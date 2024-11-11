import { bitter } from "../../constants";
import { BsPlay, BsPlayBtn } from "react-icons/bs";
import Link from "next/link";

export const TryOurOil = () => {
  return (
    <section className="px-16 max-lg:px-4 mb-20 h-full rounded-3xl">
      <section
        className={
          "bg-tryOurOil bg-center rounded-3xl max-sm:px-10 max-lg:px-20 px-60 py-40 h-full w-full bg-cover "
        }
      >
        <h1
          className={`${bitter.className} w-[800px] max-lg:w-2/3 max-sm:w-4/5 mb-8 max-sm:text-2xl max-lg:text-4xl text-7xl text-white`}
        >
          Try our spa treatment with aroma oils
        </h1>
        <div className={"flex items-center gap-10"}>
          <div
            className={
              "text-white bg-link-color-hover p-6 border-4 border-white rounded-full"
            }
          >
            <BsPlayBtn size={40} />
          </div>
          <Link href={"#"} className={"text-lg font-bold text-white"}>
            {" "}
            Watch our video
          </Link>
        </div>
      </section>
    </section>
  );
};
