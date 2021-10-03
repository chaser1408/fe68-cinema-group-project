import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const withLayout = (WrappedComponent) => {
  return ({ component: Component, isPrivate, ...rest }) => {
    console.log("isPrivate", isPrivate);
    const userLogin = useSelector((state) => state.userLoginReducer.userLogin);
    const storageUserLogin = localStorage.getItem("userLogin", userLogin);
    console.log(storageUserLogin, "storageUserLogin");

    console.log(userLogin, "userLogin");
    const content = (
      <Route
        {...rest}
        render={(routeProps) => (
          <WrappedComponent>
            <Component {...routeProps} />
          </WrappedComponent>
        )}
      />
    );
    if (isPrivate) {
      if (userLogin || storageUserLogin) {
        return content;
      } else {
      
        return <Redirect to="/Login" />;
      }
    }
    return content;
  };
};

export default withLayout;
