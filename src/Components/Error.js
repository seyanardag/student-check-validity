import React from "react";

function Error(props) {



  return (
    <div
      style={props.outed ? { visibility: "hidden" } : { visibility:  "visible"}}
      data-testid="errorMsg"
      className="alert error mt-20 slide-up-fade-in"
    >
      {props.errMessage}

    </div>
  );
}

export default Error;
