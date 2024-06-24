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
        <div className="xs:w-[25px] xs:h-[25px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]  ">
          <SearchIcon />
        </div>
      </div>
      <form className="w-full z-10" onSubmit={(e) => handleSearch(e)}>
        <input
          type="text"
          placeholder="Search Course"
          className=" w-full outline-none h-10 xs:text-sm sm:text-sm md:text-base text-textColor"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      <div
        onClick={() => setSelectedType(null)}
        className="cursor-pointer z-10"
      >
        <VscClose className="xs:text-[25px] md:text-[30px] text-textColor/60" />
      </div>
    </div>
  );
};

export default SearchByName;
