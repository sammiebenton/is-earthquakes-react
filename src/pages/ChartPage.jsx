import { useEffect, useState, useRef } from 'react'
import {
  Tabs,
  Tab
} from 'react-bootstrap'
import { useQuakeData } from '../context/QuakeDataContext'
import '../styles/chart.styles.scss'
import { BarChart } from '../components/BarChart'
import { LineChart } from '../components/LineChart'
import { PieChart } from '../components/PieChart'
import { DoughnutChart } from '../components/DonutChart'

const ChartPage = () => {
  const [selectedTab, setSelectedTab] = useState('')
  const { data } = useQuakeData()
  const currentData = useRef(data)


  return (
      <div className="chart-page">
      <Tabs defaultActiveKey="line" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="line" title="Line Chart" onClick={() => setSelectedTab('Line')}>
          <LineChart />
          {console.log(selectedTab)}
        </Tab>
        <Tab eventKey="bar" title="Bar Chart">
        <BarChart />
        </Tab>
        <Tab eventKey="donut" title="Donut Chart">
          <DoughnutChart />
        </Tab>
        <Tab eventKey="pie" title="Pie Chart">
          <PieChart />
        </Tab>
      </Tabs>
    </div>
  )
}
export default ChartPage