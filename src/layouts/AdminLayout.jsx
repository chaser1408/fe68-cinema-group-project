<<<<<<< HEAD
import Admin from "container/admin/AdminLayout/Admin";
import withLayout from "hocs/withLayout";
=======
import withLayout from "hocs/withLayout";
import Admin from "../container/admin/AdminLayout/Admin";
>>>>>>> mia
import React from "react";

function AdminLayout(props) {
  return (
    <>
<<<<<<< HEAD
      <Admin />
      {props.children}
=======
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            {""}
            <Admin />
          </div>
          <div className="col-9">{props.children}</div>
        </div>
      </div>
>>>>>>> mia
    </>
  );
}

export default withLayout(AdminLayout);
