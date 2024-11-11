import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src={"/assets/images/logo.svg"}
      alt={"logo"}
      width={200}
      height={200}
      priority={100}
    />
  );
};
