import { ReachUs } from "@/components/ReachUs";
import { BsChat, BsCheckCircle } from "react-icons/bs";
import { bitter } from "../../constants";
import { AboutSlider } from "@/components/AboutSlider";
import { SpecialTreatments } from "@/components/SpecialTreatments";

export const AboutUs = () => {
  return (
    <section
      className={`lg:pt-24 max-sm:pt-10 max-lg:pt-14 relative   max-sm:mt-10  mt-20 pb-20`}
    >
      <section
        className={
          " relative bg-10% max-sm:px-10 px-10 bg-about bg-no-repeat bg-left-bottom"
        }
      >
        <div
          className={
            "container mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
          }
        >
          <div className={" mb-10 justify-around w-full lg:flex "}>
            {" "}
            <div className={"  flex-1"}>
              <span
                className={
                  "uppercase mbg-light-color text-blackish-color p-3 rounded-full"
                }
              >
                About Us
              </span>
              <h1
                className={`${bitter.className}  font-semibold max-sm:mb-2 mb-10 my-3 max-sm:text-3xl max-sm:4xl text-6xl text-blackish-color`}
              >
                Discover Your Inner
                <br /> Peace Wellness.
              </h1>
              <ReachUs
                Icon={BsChat}
                showSearch={false}
                title={"chat is anytime"}
                buttonText={"Learn More"}
                number={"+240-380-4294"}
                smallHidden={false}
              />
            </div>
            <div className={"flex-1"}>
              <p
                className={`font-bold max-sm:mt-5 text-blackish-color text-xl mb-10`}
              >
                Our story unfolds as a testament to the transformative power of
                wellness innovation. Founded on the belief that everyone
                deserves personalized well being, we embark on a journey
                dedicated to empowering lives.
              </p>
              <p className={"text-darkish-color  mb-10"}>
                Steam saunas or Turkish baths, provide a wet heat experience by
                using high humidity and steam ugit quando intell
              </p>
              <div
                className={
                  "grid grid-rows-2 grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-1 gap-6 mb-10"
                }
              >
                <p className={"flex items-center gap-6 font-bold"}>
                  <span
                    className={
                      "text-white bg-link-color-hover p-1 rounded-full"
                    }
                  >
                    {" "}
                    <BsCheckCircle />
                  </span>
                  <span>Entrance to the Blue Lagoon</span>
                </p>
                <p className={"flex items-center gap-6 font-bold"}>
                  <span
                    className={
                      "text-white bg-link-color-hover p-1 rounded-full"
                    }
                  >
                    {" "}
                    <BsCheckCircle />
                  </span>
                  <span>Use of soft towel and bathrobe</span>
                </p>
                <p className={"flex items-center gap-6 font-bold"}>
                  <span
                    className={
                      "text-white bg-link-color-hover p-1 rounded-full"
                    }
                  >
                    {" "}
                    <BsCheckCircle />
                  </span>
                  <span>Silica mud mask (face and body)</span>
                </p>
                <p className={"flex items-center gap-6 font-bold"}>
                  <span
                    className={
                      "text-white bg-link-color-hover p-1 rounded-full"
                    }
                  >
                    {" "}
                    <BsCheckCircle />
                  </span>
                  <span>Entrance to the Blue Lagoon</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={
          "container mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
        }
      >
        <AboutSlider />
        <SpecialTreatments />
      </div>
    </section>
  );
};
