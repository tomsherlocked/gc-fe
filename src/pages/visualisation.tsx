import { Header, LoadingIndicator } from "@/components";
import dynamic from "next/dynamic";
import { FC, useMemo } from "react";

const Visualisation: FC = () => {
  // dynamically import the map so nextjs only CSRs it
  const Map = useMemo(
    () =>
      dynamic(
        async () => {
          const { Map } = await import("../components/map");
          return { default: Map };
        },
        {
          ssr: false,
          loading: () => (
            <div className="mt-24">
              <LoadingIndicator />
            </div>
          ),
        }
      ),
    []
  );

  return (
    <>
      <Header />
      <Map />
    </>
  );
};
export default Visualisation;
