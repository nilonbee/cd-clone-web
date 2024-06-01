"use client";
import { SearchIcon } from "@/components/atoms/Icons";
import { useCourseFilterStore } from "@/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { VscClose } from "react-icons/vsc";

type Props = {
  setSelectedType: (type: string | null) => void;
};

const SearchByName = ({ setSelectedType }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const { setFilter, setRefetch } = useCourseFilterStore();

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setFilter({ course_name: searchValue });
    router.push("/courses");
    setRefetch(true);
  };
  return (
    <div className="flex gap-4 items-center w-full cursor-pointer ">
      <div>
        <div className="md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] xs:w-[30px] xs:h-[30px]">
          <SearchIcon />
        </div>
      </div>
      <form className="w-full z-10" onSubmit={(e) => handleSearch(e)}>
        <input
          type="text"
          placeholder="Search Course Name"
          className=" w-full outline-none h-10"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      <div
        onClick={() => setSelectedType(null)}
        className="cursor-pointer z-10"
      >
        <VscClose className="text-[30px] text-textColor" />
      </div>
    </div>
  );
};

export default SearchByName;
