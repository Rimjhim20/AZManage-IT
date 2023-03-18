import { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { ProfitData } from "./Data";

function MainChart() {
  const [profitData, setUserData] = useState({
    labels: ProfitData.map((data) => data.year),
    datasets: [
      {
        label: "Profit Gained",
        data: ProfitData.map((data) => data.profitGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#03fcc2",
          "#460066",
          "#26ff00",
          "#ff8000",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="MainChart">
      <div className="d-flex flex-column flex-sm-row">
      <div style={{ width: 550 }}>
        <BarChart chartData={profitData} />
      </div> 
      <div style={{ width: 550 }}>
        <LineChart chartData={profitData} />
      </div>
      </div>

      <div style={{ width: 400 ,margin:"auto"}}>
        <PieChart chartData={profitData} />
      </div>
    </div>
  );
}

export default MainChart;
