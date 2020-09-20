import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Login from "./Login";

const PrivateRoute = ({ component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  //AuthContextからcurrentUserを受け取る

  const renderingComponent = currentUser ? component : Login;
  //currentUserがtrueの場合component＝Home、falseならLoginコンポーネントにroute

  return <Route {...rest} component={renderingComponent} />;
};

export default PrivateRoute;

