import Image from "next/image";

export const PlanItem = ({ title, description, image_url, price }) => {
  return (
    <div
      className={
        "flex max-sm:flex-col max-sm:text-center gap-4 items-center justify-center"
      }
    >
      <Image
        src={image_url}
        alt={title}
        width={100}
        className={"rounded-lg"}
        height={100}
      />
      <div className={"p-5"}>
        <div
          className={
            "flex max-sm:flex-col max-sm:order-1 items-center justify-between "
          }
        >
          <h1 className={`text-2xl mb-3 font-bold`}>{title}</h1>
          <span className={"max-sm:hidden text-2xl"}>
            ...............................
          </span>
          <p className={"text-link-color-hover text-3xl"}>${price}</p>
        </div>
        <p className={"w-2/3 max-sm:w-full"}>{description}</p>
      </div>
    </div>
  );
};
