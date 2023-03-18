import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './chartjs.css'
const Ganttchart = () => {
  useEffect(() => {
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Weekly Sales',
          data: [18, 12, 6, 9, 12, 3, 9],
          backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
          ],
          borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: 'bar',
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const myChart = new Chart(document.getElementById('myChart'), config);

    const chartVersion = document.getElementById('chartVersion');
    chartVersion.innerText = Chart.version;

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      <div className="chartMenu">
       <span id="chartVersion" className='text-black'></span>
        <div className="chartCard">
        <div className="chartBox">
          <canvas id="myChart"></canvas>
        </div>
      </div>
      </div>
    
    </>
  );
};

export default Ganttchart;