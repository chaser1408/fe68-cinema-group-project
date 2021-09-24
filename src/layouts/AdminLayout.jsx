import Admin from "container/admin/AdminLayout/Admin";
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
