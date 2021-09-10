
import { Card } from 'react-bootstrap'
import { useQuakeData } from "../context/QuakeDataContext"
import '../styles/app.styles.scss'

const HomePage = () => {
  const { data } = useQuakeData()
  // console.log(data)

  return (
    <div className="home-page">
      <Card>
        <h1>EarthQuakes in Iceland</h1>
        <p><strong>Duration: </strong>12 hours</p>
        <p>Sammie Benton</p>
      </Card>
    </div>
  )
}
export default HomePage