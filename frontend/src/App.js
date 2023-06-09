import React, {useState} from "react";
import './App.css';
import routes from "./utils/routes/routes";
import clientRoutesFinall from "./utils/routes/clientRoutes";
import RouteLoader from "./utils/routes/routeLoader";

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("token"))
  const authRouter = () => {
    if(!auth) {
      return(
          routes.map((route, i) => (
              <RouteLoader key={i} {...route}/>
          ))
      )
    }
    else {
      return(
          clientRoutesFinall.map((route, i) => (
              <RouteLoader key={i} {...route}/>
          ))
      )
    }
  }

  return (
      <>
          {authRouter()}
      </>
  );
}

export default App;