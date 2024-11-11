import { BsBox } from "react-icons/bs";
import { bitter } from "../../constants";

export const SpecialTreatments = () => {
  return (
    <section
      className={
        "grid max-sm:px-10 max-lg:px-10 max-lg:grid-rows-2 gap-10 grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 lg:mt-30 md:mt-20 sm:mt-10 mt-6 flex-wrap "
      }
    >
      <div className={" items-center justify-center flex flex-col gap-4"}>
        <span className={"text-white bg-link-color-hover p-4 rounded-full"}>
          <BsBox size={40} />
        </span>
        <h1 className={"text-3xl  ${bitter.className}"}>Finnish Sauna</h1>
        <p className={"text-darkish-color  text-center lg:w-2/3"}>
          ampling of sauna experiences in different parts of the country.
        </p>
      </div>
      <div className={" items-center justify-center flex flex-col gap-4"}>
        <span className={"text-white bg-link-color-hover p-4 rounded-full"}>
          <BsBox size={40} />
        </span>
        <h1 className={`text-3xl  ${bitter.className}`}> Daily Program</h1>
        <p className={"text-darkish-color  text-center lg:w-2/3"}>
          Spa day at home can be just as relaxing and beautifying as a day.
        </p>
      </div>
      <div className={" items-center justify-center flex flex-col gap-4"}>
        <span className={"text-white bg-link-color-hover p-4 rounded-full"}>
          <BsBox size={40} />
        </span>
        <h1 className={"text-3xl  ${bitter.className}"}> Volcanic Stones</h1>
        <p className={"text-darkish-color  text-center lg:w-2/3"}>
          These stones are carefully placed along key points of your body.
        </p>
      </div>
      <div className={" items-center justify-center flex flex-col gap-4"}>
        <span className={"text-white bg-link-color-hover p-4 rounded-full"}>
          <BsBox size={40} />
        </span>
        <h1 className={"text-3xl  ${bitter.className}"}> Athlete Recovery</h1>
        <p className={"text-darkish-color  text-center lg:w-2/3"}>
          Facial steam by adding a few drops of essential oil to the pot
        </p>
      </div>
    </section>
  );
};
