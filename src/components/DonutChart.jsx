import { useQuakeData } from '../context/QuakeDataContext'
import { Doughnut } from "react-chartjs-2";

export const DoughnutChart = () => {
  const { data } = useQuakeData()
  return (
    <div>
      <Doughnut
        data={{
          labels: Array.from(data.map(date => date.timestamp)),
          datasets: [
            {
              label: "Depth",
              data: Array.from(data.map(depth => depth.depth)),
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
            },
            {
              label: "Size",
              data: Array.from(data.map(size => size.size)),
              backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)'
              ],
            }
          ]
        }}
        height={150}
        width={300}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};


export default DoughnutChart