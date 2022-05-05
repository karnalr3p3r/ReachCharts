import * as React from "react";
import DeviceChart from "./DeviceChart";
import Layout from "./Layout";
import { name } from "../utils/generators";
import RadialChart from "./RadialGradiantChart";

export default function Home() {
  return (
    <Layout>
      <h2>{name("Jacob", "Devereaux")}</h2>
      <DeviceChart
        options={{
          colors: ["#07b521", "#b8db07", "#088fa3"],
          labels: ["Desktop", "Mobile", "Tablet"],
        }}
      />

      <DeviceChart
        options={{
          colors: ["#4a2c2f", "#a3088c", "#c41104"],
          labels: ["Smartphones", "laptops", "ipads"],
        }}
      />

      <RadialChart />

    </Layout>
  );
}