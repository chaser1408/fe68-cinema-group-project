// import Footer from "components/Footer/Footer";
// import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import withLayout from "hocs/withLayout";
import React from "react";

function ClientLayout(props) {
  return (
    <>
      <Header/>
      {/* <Carousel/> */}
        {props.children}
      <Footer/>
    </>
  );
}

export default withLayout(ClientLayout);
