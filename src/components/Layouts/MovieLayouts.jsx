import { Fragment } from "react";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";

const MovieLayouts = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default MovieLayouts;
