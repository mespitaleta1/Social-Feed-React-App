import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Widget from "./components/Widget/Widget";
import APIconstants from "./constants/api"; 
import { LIMIT_OF_POST, TIME_RANGE } from "./constants/widgetConstants"

function App() {
  const BASE_URL = APIconstants.API_BASE_URL;
  const limit = LIMIT_OF_POST;
  const updateInterval = TIME_RANGE;  

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <div>
          <header>
            <div
              style={{
                backgroundColor: "#741AF6",
                height: "600px",
              }}
            >
              <h1 style={{ padding: "30px 300px", color: "white" }}>Social widget feed</h1>
            </div>
          </header>
          </div>

        <Routes>
          <Route path="/" element={
            <Widget 
            feedUrl={BASE_URL} 
            limit={limit} 
            updateInterval={updateInterval}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
