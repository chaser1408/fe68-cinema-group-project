z
import withLayout from "hocs/withLayout";
import React from "react";

function ClientLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default withLayout(ClientLayout);
