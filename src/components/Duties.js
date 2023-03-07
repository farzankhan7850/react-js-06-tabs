import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Duties({ duties }) {
  return (
    <>
      {duties.map((e, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{e}</p>
          </div>
        );
      })}
    </>
  );
}
