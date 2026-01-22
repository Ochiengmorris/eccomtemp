import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative rounded-full overflow-hidden bg-slate-900/10">
      <input
        type="text"
        className="ml-8 py-3 px-4 text-sm w-84 focus:outline-none font-semibold"
        placeholder="Search"
      />
      <Search className="absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default SearchBar;
