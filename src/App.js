import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    //   <div>
    //     <Navbar />
    //     <Wrapper>
    //       <Route exact path="/" component={Directory} />
    //     </Wrapper>
    //     <Footer />
    //   </div>
    <Directory />
  );
}

export default App;
