import React from "react";

const Title = ({ title , styleClass }) => {
  return (
    <div className={ styleClass}>
      <h4 className="text-uppercase">{title}</h4>
      <div/>
    </div>
  );
};

export default Title;
