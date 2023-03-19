import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './chartjs.css'
import 'chartjs-adapter-date-fns';
import ChartDataLabels from 'chartjs-plugin-datalabels';
const Ganttchart = () => {
  useEffect(() => {
    const data = {
      labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
      datasets: [
        {
          label: 'Projected Time',
          data: [
            ['2023-01-01', '2023-04-01'],
            ['2023-04-01', '2023-07-01'],
            ['2023-03-01', '2023-05-31'],
            ['2023-06-01', '2023-09-30'],
            ['2023-10-01', '2023-12-31'],
          ],
          taskCompleted: [100, 100, 100, 100, 100],
          backgroundColor:
            'rgba(0,0,0,0.2)',
          borderColor: 'rgba(0,0,0,0.6)',
          borderWidth: 1,
          borderSkipped: false,
        },
        {
          label: 'Actual Time',
          data: [
            ['2023-01-01', '2023-04-15'],
            ['2023-04-01', '2023-07-28'],
            ['2023-03-01', '2023-05-31'],
            ['2023-06-01', '2023-10-20'],
            ['2023-10-01', '2023-12-16'],
          ],
          taskCompleted: [100, 80, 10, 90, 70],
          backgroundColor: 'rgba(255, 26, 104, 0.4)',
          borderColor: 'rgba(255, 26, 104, 1)',
          borderWidth: 1,
          borderSkipped: false,
        },
      ],
    };

    const config = {
      type: 'bar',
      data,
      options: {
        plugins: {
          tooltip: {
            // enabled: false
            filter: (tooltipItem) => {
              return tooltipItem.datasetIndex === 1;
            },
            yAlign: 'bottom',
            callbacks: {
              label: (context) => {
                const taskPercentage = context.dataset.taskCompleted[context.dataIndex];
                const completedDate = new Date(context.parsed.x);
                const cleanedDate = completedDate.getFullYear() + '/' + (completedDate.getMonth() + 1) + '/' + completedDate.getDate();
                const realtime = new Date(data.datasets[1].data[context.dataIndex][1]);
                const projectedtime = new Date(data.datasets[0].data[context.dataIndex][1]);
                const dateDifference = realtime - projectedtime;
                let delay = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
                delay = delay < 0 ? 0 : delay;
                const response = taskPercentage === 100 ?
                  `Completed Date:${cleanedDate},Total Delay of ${delay} Days` :
                  `Ongoing Project:${cleanedDate}`
                return response
              }
            }
          },
          datalabels: {
            formatter: (value, context) => {
              const taskPercentage = context.dataset.taskCompleted[context.dataIndex];
              return `${taskPercentage}%`;
            }
          }
        },
        indexAxis: 'y',
        scales: {
          x: {
            offset: false,
            min: '2023-01-01',
            position: 'top',
            type: 'time',
            adapters: {
              time: {
                unit: 'quarter'
              },
            },
            ticks: {
              align: 'start'
            },
            grid: {
              borderDash: [5, 5]
            }
          },
          y: {
            beginAtZero: true,
          },
        },
      },
      plugins: [ChartDataLabels]
    };

    const myChart = new Chart(document.getElementById('myChart'), config);


    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>

        <div className="chartCard">
          <div className="chartBox">
            <canvas id="myChart"></canvas>
          </div>
        </div>
     

    </>
  );
};

export default Ganttchart;
