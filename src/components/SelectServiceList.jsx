import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectServiceList = () => {
  const services = [
    {
      id: 1,
      tag: "eliteRetreat",
      title: "Elite Retreat",
    },
    {
      id: 2,
      tag: "serenitySpa",
      title: "Serenity Spa",
    },
    {
      id: 3,
      tag: "fairytaleSpa",
      title: "Fairytale Spa",
    },
    {
      id: 4,
      tag: "mindBody",
      title: "Mind Body",
    },
    {
      id: 5,
      tag: "flatteredSpa",
      title: "Flatter Spa",
    },
    {
      id: 6,
      tag: "refreshSpa",
      title: "Refresh Spa",
    },
    {
      id: 7,
      tag: "melodySpa",
      title: "Melody Spa",
    },
  ];
  return (
    <Select>
      <SelectTrigger className="w-1/2 max-sm:w-full outline-none px-10 py-8 border-none bg-white">
        <SelectValue
          className={"text-darkish-color"}
          placeholder="Available Service"
        />
      </SelectTrigger>
      <SelectContent>
        {services.map((service) => (
          <SelectItem key={service.id} value={service.tag}>
            {service.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
