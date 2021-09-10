import { useEffect, useState } from 'react'
import { 
  Container, 
  Row, 
  Table,
  ButtonGroup,
  Button
} from 'react-bootstrap'
import { useQuakeData } from '../context/QuakeDataContext'

import '../styles/graphpage.styles.scss'


const QuakesPage= () => {

  const { 
    data,
    sortByDepthAscending
  } = useQuakeData()

  // useEffect(() => {
  //   return data
  // }, [data])

  return (
    <div className="d-flex mt-100 justify-content-center align-items-center" id="graph-page">
      <Container>
        <Row>
          {/* <SortByButtons /> */}
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                <ButtonGroup>
                  <Button disabled variant="light">depth:</Button>
                  <Button variant="primary" onClick={sortByDepthAscending}>sort</Button>
                </ButtonGroup>
                </th>
                <th>
                <ButtonGroup>
                  <Button disabled variant="light">location</Button>
                </ButtonGroup>
                </th>
                <th>
                <ButtonGroup>
                  <Button disabled variant="light">latitude</Button>
                </ButtonGroup>
                </th>
                <th>
                <ButtonGroup>
                  <Button disabled variant="light">longitude</Button>
                </ButtonGroup>
                </th>
                <th>  
                <ButtonGroup>
                  <Button disabled variant="light">quality</Button>
                </ButtonGroup>
                </th>
                <th>
                <ButtonGroup>
                  <Button disabled variant="light">size</Button>
                </ButtonGroup>
                </th>
                <th>
                <ButtonGroup>
                  <Button disabled variant="light">time</Button>
                </ButtonGroup>
                </th>
              </tr>
            </thead>
          <tbody>
            {
              data.map((quake, index) => {
                
                return <tr key={index}>
                  <td>{quake.depth}</td>
                  <td>{quake.humanReadableLocation}</td>
                  <td>{quake.latitude}</td>
                  <td>{quake.longitude}</td>
                  <td>{quake.quality}</td>
                  <td>{quake.size}</td>
                  <td>{quake.timestamp}</td>
                </tr>
              })
            }
        </tbody>
      </Table>
        </Row>
      </Container>
      
      
    </div>
  )
}

export default QuakesPage