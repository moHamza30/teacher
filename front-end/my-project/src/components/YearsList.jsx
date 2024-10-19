import React, { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Courses_Context } from "../Contexts/CoursesContext";
const YearsList = () => {
  const navigate = useNavigate()
  const { getCourses, courses } = useContext(Courses_Context);


  useEffect(() => {
    getCourses();
  }, []);
  const gradesArray = [...new Set(courses?.map(item => item.grade))];
  return (
    <div className=' container grid gap-4 sm:grid-cols-2 lg:grid-cols-3 my-8 mb-14'>
      {
        gradesArray.map((grade,index)=>(
          <div key={index}
          onClick={()=>{
            navigate(`/monthsList/${grade}`)
          }}
          className="p-4 rounded-md bg-green-500 cursor-pointer"
          >{grade}</div>
        ))
      }

    </div>

         
  );
};

export default YearsList;
