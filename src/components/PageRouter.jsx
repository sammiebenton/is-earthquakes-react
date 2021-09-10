import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from '../pages/HomePage'
import QuakesPage from '../pages/QuakesPage'
import ChartPage from '../pages/ChartPage'
import NavBar from "../components/Navbar";
import DescriptionPage from '../pages/DescriptionPage'

const PageRouter = () =>  {
  return <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/quakes">
        <QuakesPage />
      </Route>
      <Route path="/charts">
        <ChartPage />
      </Route>
      <Route path="/description">
        <DescriptionPage />
      </Route>
    </Switch> 
  </Router>
}

export default PageRouter