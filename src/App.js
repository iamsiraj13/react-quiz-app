import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./componentss/Layout";
import Home from './componentss/pages/Home';
import Signup from "./componentss/pages/Signup";
import Login from './componentss/pages/Login';
import Result from "./componentss/pages/Result";
import Quiz from './componentss/pages/Quiz'
import './styles/App.css';
import AuthProvider from "./contexts/AuthContext";
function App() {
  return (

    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/result">
              <Result></Result>
            </Route>
            <Route path="/quiz">
              <Quiz></Quiz>
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>

  );
}

export default App;
