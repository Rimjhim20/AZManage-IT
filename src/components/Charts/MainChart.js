import { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Ganttchart from "./Ganttchart";
import { ProfitData } from "./Data";
import { TeamData } from "./Data1";
import {ProgressData} from './Data2'
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
  const [teamData, setTeamData] = useState({
    labels: TeamData.map((data) => data.team),
    datasets: [
      {
        label: "Team Peformance",
        data: TeamData.map((data) => data.PerformanceGain),
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
  const [progressData, setProgressData] = useState({
    labels: ProgressData.map((data) => data.day),
    datasets: [
      {
        label: "Progress Report",
        data: ProgressData.map((data) => data.ProgressGain),
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

  return (
    <div className="MainChart mt-2">
     
      <div className="d-flex flex-column flex-sm-row">
      <div style={{ width: 550 }}>
        <BarChart chartData={profitData} />
      </div> 
      <div style={{ width: 550 }}>
        <LineChart chartData={teamData} />
      </div>
      </div>
      <br/>
      <div className="d-flex flex-column flex-sm-row">
      <div style={{ width: 350 ,margin:"auto"}}>
       <Ganttchart/>
      </div>
      <div style={{ width: 350 ,margin:"auto"}}>
        <PieChart chartData={progressData} />
        <p className="text-center">Progress chart</p>
      </div>
     </div>
    </div>
  );
}

export default MainChart;
