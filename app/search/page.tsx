import { runSearch, SearchState } from "@/app/actions";
import { SearchForm } from "@/app/components/SearchForm";
import { Suspense } from "react";

interface Props {
  searchParams?: Promise<{ q?: string }>;
}
export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const q = searchParams?.q ?? "";
  const initialState: SearchState = await runSearch(q);
  return (
    <Suspense fallback={null}>
      <SearchForm initialState={initialState} />
    </Suspense>
  );
}
