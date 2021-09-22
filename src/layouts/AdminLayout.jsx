import Admin from "container/Admin/AdminLayout/Admin";
import withLayout from "hocs/withLayout";
import React from "react";

function AdminLayout(props) {
  return (
    <>
        <Admin />
        {props.children}
    </>
  );
}

export default withLayout(AdminLayout);
