import * as React from "react";
import DeviceChart from "./DeviceChart";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <DeviceChart
        options={{
          colors: ["#0f6375", "#f5a623", "#f5a623"],
          labels: ["Desktop", "Mobile", "Tablet"],
        }}
      />

      <DeviceChart
        options={{
          colors: ["#c00", "#3469a7", "#c1b01e"],
          labels: ["Smartphones", "laptops", "ipads"],
        }}
      />
    </Layout>
  );
}
