import { useState, useEffect, useContext, createContext } from 'react'
import axios from 'axios';

const QuakeDataContext = createContext();

export const useQuakeData = () => {
  return useContext(QuakeDataContext)
}

export const QuakeDataProvider = ({children}) => {
  const [data, setData] = useState([])
  const [sorted, setSorted] = useState()
  
  useEffect(() => {
    getData()
  }, [])

  function getData() { 
    try{
      axios.get('https://apis.is/earthquake/is').then((response) => {
        setData(() => response.data.results)
      })
    }catch(error) {
      console.error(error)
    }
    return data
  }

  
  function sortDataAsc(field) {
    setSorted(field)
    let sortedQuakes = data
    if (sorted !== null) {
      sortedQuakes.sort((a, b) => {
        if (a[sorted] < b[sorted]) {
          return -1;
        }
        if (a[sorted] > b[sorted]) {
          return 1;
        }
        return 0;
      })
  }
  return sortedQuakes
  }
  function sortDataDesc(field) {
    setSorted(field)
    let sortedQuakes = data
    if (sorted !== null) {
      sortedQuakes.sort((a, b) => {
        if (a[sorted] > b[sorted]) {
          return 1;
        }
        if (a[sorted] < b[sorted]) {
          return -1;
        }
        return 0;
      })
  }
  return sortedQuakes
  }
  

  async function sortByDepthAscending() {
    await data
    setData(() => sortDataAsc('depth'))
  }


  async function sortByDepthDescending() {
    await data
    setData(() => sortDataDesc('depth'))
  }

  const values = {
    data,
    sorted,
    sortByDepthAscending,
    sortByDepthAscending,
    sortDataAsc
  }

  return(
    <QuakeDataContext.Provider value={values}>
      {children}
    </QuakeDataContext.Provider>
  )
}

export default QuakeDataProvider