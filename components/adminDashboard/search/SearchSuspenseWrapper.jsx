import { Suspense } from "react";
import Search from "./search";

const SearchSuspenseWrapper = () => (
  <Suspense>
    <Search />
  </Suspense>
);

export default SearchSuspenseWrapper;
