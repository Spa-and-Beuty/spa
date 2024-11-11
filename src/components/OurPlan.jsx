import Image from "next/image";
import { bitter } from "../../constants";

export const OurPlan = () => {
  return (
    <div className={"flex max-lg:px-10  mt-20 flex-col items-center"}>
      <span
        className={
          "px-8 uppercase text-sm  py-1 rounded-full bg-secondary-color"
        }
      >
        {" "}
        Best Plans
      </span>
      <h1
        className={`text-blackish-color my-3 mb-10 max-lg:text-center max-lg:text-4xl max-sm:text-4xl text-6xl font-semibold ${bitter.className}`}
      >
        Our Flexible Pricing Plan
      </h1>
      <div
        className={
          "grid grid-cols-2 max-lg:grid-cols-1 max-lg:grid-rows-1 grid-rows-3 gap-x-20 gap-y-10"
        }
      >
        {" "}
        <PlanItem
          image_url={"/assets/images/pricing-plan-01.jpg"}
          title={"Full body massage"}
          price={"110"}
          description="Classic relaxation massfae eases tension and promotes circulation"
        />
        <PlanItem
          image_url={"/assets/images/pricing-plan-02.jpg"}
          title={"Craniosacral Therapy"}
          price={"110"}
          description="Classic relaxation massfae eases tension and promotes circulation"
        />
        <PlanItem
          image_url={"/assets/images/pricing-plan-03.jpg"}
          title={"Therapeutic Massage"}
          price={"110"}
          description="Classic relaxation massfae eases tension and promotes circulation"
        />
        <PlanItem
          image_url={"/assets/images/pricing-plan-04.jpg"}
          title={"Swedish Massage"}
          price={"110"}
          description="Classic relaxation massfae eases tension and promotes circulation"
        />
        <PlanItem
          image_url={"/assets/images/pricing-plan-05.jpg"}
          title={"Luxury Group Massage"}
          price={"110"}
          description="Classic relaxation massfae eases tension and promotes circulation"
        />
        <PlanItem
          image_url={"/assets/images/pricing-plan-06.jpg"}
          title={"Scrub Massage"}
          price={"110"}
          description="Classic relaxation massfae eases tension and promotes circulation"
        />
      </div>
    </div>
  );
};

const PlanItem = ({ title, description, image_url, price }) => {
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
