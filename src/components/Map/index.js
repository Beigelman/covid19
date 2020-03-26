import React, { useEffect } from "react";
import chart from "tui-chart";
import { worldData, data } from "./components/worldMap";
import "./index.css";

export default function Map({ countriesNumbers }) {
  // useEffect(() => {
  //   const newData = { series: [] };
  //   for (let i of data.series) {
  //     for (let j of countriesNumbers) {
  //       if (i.code === j.iso) {
  //         newData.series.push({
  //           code: i.code,
  //           data: j.confirmed
  //         });
  //       }
  //     }
  //   }
  //   console.log(newData);
  // }, [countriesNumbers]);

  useEffect(() => {
    const newData = { series: [] };
    for (let i of data.series) {
      for (let j of countriesNumbers) {
        if (i.code === j.iso) {
          data.series.push({
            code: String(i.code),
            data: parseFloat(j.confirmed)
          });
        }
      }
    }

    var container = document.getElementById("chart-area");

    var options = {
      chart: {
        width: 900,
        height: 700,
        title: "Population density of World (per ㎢)",
        format: "0.00"
      },
      map: "world",
      legend: {
        align: "right"
      }
    };
    var theme = {
      series: {
        startColor: "#f7f7f7",
        endColor: "#0e1232",
        overColor: "#75b5aa"
      },
      chart: {
        background: {
          color: "yellow",
          opacity: 0
        }
      }
    };

    chart.registerTheme("myTheme", theme);
    options.theme = "myTheme";
    chart.registerMap("world", worldData);
    chart.mapChart(container, data, options);
  }, [countriesNumbers]);

  return <div id="chart-area" />;
}
