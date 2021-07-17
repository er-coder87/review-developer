import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>

        <Home />
      </div>
      <Switch>
        <Navbar />
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
function Home() {
  console.log("home");
  return (
    <div className="bg-indigo-300">
      <div className="object-cover md:object-scale-down h-100 w-full">
        <img src="https://builderscrack.co.nz/v4/bc/assets/backgrounds/homepage/pizza-sm.jpg.pagespeed.ce.Puw3czHKFU.jpg" />
      </div>
    </div>
  );
}

export default App;
