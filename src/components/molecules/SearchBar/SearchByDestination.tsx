import { LocationIcon } from "@/components/atoms/Icons";
import React from "react";
import { VscClose } from "react-icons/vsc";
import { MultiSelectDropdown } from "../MultiSelectDropdown";
import { arrayFormatterForOptions } from "@/utils/arrayFormatterForOptions";
import { useCourseFilterStore } from "@/store";
import { useRouter } from "next/navigation";
import { ICountry } from "@/types/countries";

type Props = {
  setSelectedType: (type: string | null) => void;
  initCountries: ICountry[];
};

const SearchByDestination = ({ setSelectedType, initCountries }: Props) => {
  const router = useRouter();
  const { filter, setFilter, setRefetch } = useCourseFilterStore();

  return (
    <div className="flex gap-4 items-center w-full cursor-pointer ">
      <div>
        <div className="md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] xs:w-[30px] xs:h-[30px]">
          <LocationIcon />
        </div>
      </div>
      <MultiSelectDropdown
        formFieldName={"Select Destination"}
        options={arrayFormatterForOptions(initCountries, "name")}
        selectedOptions={filter.country_ids}
        setSelectedOptions={(selectedOptions) => {
          setFilter({ country_ids: selectedOptions });
          setRefetch(true);
          router.push("/courses");
        }}
        isFullWidth={true}
        isBordered={false}
      />
      <div
        onClick={() => setSelectedType(null)}
        className="cursor-pointer z-10"
      >
        <VscClose className="text-[30px] text-textColor" />
      </div>
    </div>
  );
};

export default SearchByDestination;
