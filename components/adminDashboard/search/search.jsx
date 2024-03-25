"use client";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    const value = e.target.value;
    if (value) {
      if (value.startsWith("email")) {
        params.set("email", value.slice(6));
      } else {
        params.set("name", value);
      }
    } else {
      params.delete("name");
      params.delete("email");
    }
    replace(`${pathname}?${params}`);
  }, 500);

  return (
    <div className={styles.container}>
      <i className="pi pi-search" />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
