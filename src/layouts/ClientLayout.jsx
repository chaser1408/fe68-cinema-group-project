// import Footer from "components/Footer/Footer";
// import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import withLayout from "hocs/withLayout";
import React from "react";

function ClientLayout(props) {
  return (
    <>
      <div className="">
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
}

export default withLayout(ClientLayout);
