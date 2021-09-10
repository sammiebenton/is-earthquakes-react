import { useState } from "react"
import { Button, ToggleButton } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from "../context/ThemeContext"

const ToggleThemeButton = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  
  function toggleDarkTheme() {
    setDarkTheme(() => !darkTheme)
  }

  return (
    <Button className="btn btn-sm" onClick={toggleDarkTheme} variant="dark">
      {darkTheme ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    </Button>
  )
}

export default ToggleThemeButton