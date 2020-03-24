import React, { useEffect, useState, memo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const Chart = memo(({ price }) => {
  const [opts, setOpts] = useState({
    chart: {
      type: "spline",
      height: 70,
      marginLeft: 0,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0
    },
    credits: {
      enabled: false
    },
    title: {
      text: undefined
    },
    xAxis: {
      type: "datetime",
      tickPixelInterval: 150,
      title: {
        text: undefined
      },
      visible: false
    },
    yAxis: {
      plotLines: [
        {
          value: 0,
          width: 1,
          color: "#808080"
        }
      ]
    },
    series: [
      {
        data: [{ x: new Date().getTime(), y: price }]
      }
    ],
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        color: "#ffeb3b"
      }
    }
  });

  useEffect(() => {
    let newPrices = [...opts.series[0].data];
    if (newPrices.length === 7) {
      newPrices.splice(0, 1);
    }
    newPrices.push({ x: new Date().getTime(), y: price });
    setOpts({
      series: [{ data: newPrices }]
    });
  }, [price]);

  return (
    <HighchartsReact
      constructorType="chart"
      allowChartUpdate={true}
      highcharts={Highcharts}
      options={opts}
    />
  );
});
