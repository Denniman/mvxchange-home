import React, { Fragment } from "react";

import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Navigation } from "../../components/molecules";

export const Home = () => {
  return (
    <Fragment>
      <div className='px-5 laptop:px-[2.7rem] pb-[10rem] bg-white'>
        <Navigation />
        <Hero />
      </div>
      <Footer />
    </Fragment>
  );
};
