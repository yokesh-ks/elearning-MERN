import Header from "./Components/Header";
import Home from "./screens/Home";
import Login from "./screens/login.js";
import Register from "./screens/register";
import Viewcourse from "./screens/viewcourse";
import Create from "./screens/create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/register">{user ? <Register /> : <Register />}</Route>
        <Route path="/login">{user ? <Login /> : <Login />}</Route>
        <Route path="/viewcourse">{user ? <Viewcourse /> : <Register />}</Route>
        <Route path="/create">{user ? <Create /> : <Register />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
