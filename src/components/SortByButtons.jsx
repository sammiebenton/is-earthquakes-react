import { 
  ButtonGroup, 
  Button, 
  Container, 
  Row,
  DropdownButton,
  Dropdown
} from "react-bootstrap"
import { useQuakeData } from "../context/QuakeDataContext"

const styles = {
  sortButtons: {
    width: 'auto',
    margin: '5px 0px',
    marginRight: 25
  }
}

const SortByButtons = () => {
  return (
    <Container fluid>
      <Row>
      <ButtonGroup>
      <Button>1</Button>
      <Button>2</Button>

      <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
      </ButtonGroup>
      </Row>
    </Container>
  )
}

export default SortByButtons