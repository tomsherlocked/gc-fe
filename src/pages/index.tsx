import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC } from "react";
import { Header, SensorTable } from "../components";

const Home: FC = () => (
  <>
    <Header />
    <SensorTable />
  </>
);
export default Home;
