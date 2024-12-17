import Image from "next/image";

export default function Loading() {
  return (
    <div className={"w-screen h-screen flex items-center justify-center"}>
      <Image
        src={"/assets/images/infinite-spinner.svg"}
        alt={"loading..."}
        width={100}
        height={100}
      />
    </div>
  );
}
