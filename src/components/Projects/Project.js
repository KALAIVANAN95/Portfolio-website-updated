import React from "react";
import { useState } from "react";
import "./Project.css";

const Project = ({ img, title, des, link }) => {
  const [show, setShow] = useState(false);
  return (
    <a href={link}>
      <div
        className="project"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show ? (
          <div className="project__content">
            <h4>{title}</h4>
            <p>{des}</p>
          </div>
        ) : (
          <img src={img} alt={title} />
        )}
      </div>
    </a>
  );
};

export default Project;
