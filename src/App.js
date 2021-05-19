import {Route, BrowserRouter as Router} from "react-router-dom";
import Header from "./headerr.js";
import Upisi from "./klasaa";
import Ljudi from "./Ljudi";
import DNF from "./DNF";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Header}></Route>
        <Route path="/ljudi" component={Ljudi}></Route>
        <Route path="/klasaa" component={Upisi}></Route>
        <Route path="/dnf" component={DNF}></Route>
      </Router>
    </div>
  );
}

export default App;
