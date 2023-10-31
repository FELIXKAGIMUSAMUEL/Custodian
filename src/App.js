//import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import MainDash from "./components/Maindash/MainDash";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Bookings from "./components/Bookings/Bookings";
import Clearance from "./components/Clearance/Clearance";
import Analytics from "./components/Analytics/Analytics";
import EditPage from "./components/EditPage/EditPage";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <MainDash />
            <RightSide />
          </Route>
          <Route exact path="/bookings">
            <Bookings />
          </Route>
          <Route exact path="/clearance">
            <Clearance />
          </Route>
          <Route exact path="/analytics">
            <Analytics />
          </Route>
          <Route exact path="editpage">
            <EditPage />
          </Route>
        </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
