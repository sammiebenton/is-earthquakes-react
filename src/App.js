import PageRouter from "./components/PageRouter";
import { QuakeDataProvider } from "./context/QuakeDataContext";
import { ThemeProvider } from "./context/ThemeContext";

import './styles/app.styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="app">
      <QuakeDataProvider>
        <ThemeProvider>
          <PageRouter />
        </ThemeProvider>
      </QuakeDataProvider>
    </div>
  );
}

export default App;
