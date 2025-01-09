import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function DashBoard(props) {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div>DashBoard</div>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

DashBoard.propTypes = {};

export default DashBoard;
