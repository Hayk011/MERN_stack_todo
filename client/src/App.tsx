import * as React from "react";
import "./App.css";
import "materialize-css";
import Nav from "./components/nav/nav";

interface Iprops {
  children: React.ReactNode;
}
const App = (props: Iprops) => {

  return (
    <>
      <Nav />
      {props.children}
    </>
  );
};
export default App;
