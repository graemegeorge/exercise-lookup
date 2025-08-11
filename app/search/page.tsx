import { runSearch, SearchState } from "@/app/actions";
import { SearchForm } from "@/app/components/SearchForm";

interface Props {
  searchParams?: { q?: string };
}
export default async function Page({ searchParams }: Props) {
  const q = searchParams?.q ?? "";
  const initialState: SearchState = await runSearch(q);
  return <SearchForm initialState={initialState} />;
}
