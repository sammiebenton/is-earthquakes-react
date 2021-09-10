import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [theme, setTheme] = useState('light')
  const [error, setError] = useState('')

  useEffect(() => {
    setError('')
    try {
      const checkTheme = window.matchMedia("(prefers-color-scheme: darks)");
      if (checkTheme.matches) {
        setIsDarkTheme(true)
        setTheme('dark')
      } else {
        setIsDarkTheme(false)
        setTheme('light')
      }
    } catch (error) {
      setError('theme could not be detected')
    }
  })

  const toggleTheme = () => {
    return setIsDarkTheme(() => !theme)
    console.log(isDarkTheme)
  }

  const values = {
    toggleTheme
  }

  return(
    <ThemeContext.Provider value="values">
      {children}
    </ThemeContext.Provider>
  )

}

const styles = {
  dark: {
    backgroundColor: '#131313',
    color: 'white'
  }
}