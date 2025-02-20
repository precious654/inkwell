import React from "react";
import Form from "next/form";
import SearchFormReset from "@/app/(components)/SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="relative w-fit"
      id="search-form"
    >
      <input
        type="text"
        defaultValue=""
        name="query"
        className="px-4 py-3 rounded-lg shadow-lg outline-0"
        placeholder="Search"
      />
      <div className="flex gap-3 items-center absolute right-3 top-3">
        {query && <SearchFormReset />}
        <button type="submit" className="w-fit p-1.5 rounded-full bg-red-400">
          <Search
            size={18}
            strokeWidth={2.5}
            style={{ cursor: "pointer", color: "#F5F5F5" }}
          />
        </button>
      </div>
    </Form>
  );
};
export default SearchForm;
