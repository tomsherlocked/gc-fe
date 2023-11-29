import { DEFAULT_TABLE_ROWS } from "@/data/constants";
import { useQuery } from "@tanstack/react-query";
import { type FC, useState, useMemo } from "react";
import { LoadingIndicator } from "../LoadingIndicator";
import { Controls } from "./Controls";
import { Message } from "./Message";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import { stringify } from "qs";
import { useDebounce } from "@/hooks";
import { FiltersType } from "@/types";

export const SensorTable: FC = () => {
  const [filters, setFilters] = useState<FiltersType>({
    visibleRows: DEFAULT_TABLE_ROWS,
  });
  const queryString = useMemo(() => stringify(filters), [filters]);

  const debouncedQueryString = useDebounce(queryString, 300);
  const { isLoading, error, data } = useQuery({
    queryKey: ["sensors", debouncedQueryString],
    queryFn: () =>
      fetch(`/api/sensors?${debouncedQueryString}`).then((res) => res.json()),
  });

  return (
    <main className="grid md:grid-cols-[20%_1fr] gap-4 mt-28 m-4">
      <Controls filters={filters} setFilters={setFilters} />
      <section className="overflow-x-hidden">
        {error ? (
          <Message label={"Something's gone wrong. Sorry"} />
        ) : (
          <>
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <>
                {data.length ? (
                  <table className="block overflow-x-scroll table-auto border-collapse w-full text-sm md:text-base">
                    <TableHeader />
                    <TableBody data={data} />
                  </table>
                ) : (
                  <p className="text-center">
                    No data found! Try adjusting the active filters
                  </p>
                )}
              </>
            )}
          </>
        )}
      </section>
    </main>
  );
};
