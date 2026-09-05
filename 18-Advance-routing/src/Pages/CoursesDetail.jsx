import React from "react";
import { useParams } from "react-router-dom";

const CoursesDetail = () => {
  let Param = useParams();
  return (
    <div>
      <h1>{Param.id}Courses detail</h1>
    </div>
  );
};

export default CoursesDetail;
