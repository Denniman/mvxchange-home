import React, { Fragment } from "react";

import { MobileMenu } from "../../components/molecules";
import { Footer, Hero } from "../../components/organisms";

export const Home = () => {
  return (
    <Fragment>
      <MobileMenu />
      <Hero />
      <Footer />
    </Fragment>
  );
};
