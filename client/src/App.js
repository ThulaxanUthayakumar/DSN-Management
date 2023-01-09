import { Switch, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddManager from "./pages/AddManager";
import EditManager from "./pages/EditManager";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddManager} />
          <Route path="/edit/:id" component={EditManager} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
