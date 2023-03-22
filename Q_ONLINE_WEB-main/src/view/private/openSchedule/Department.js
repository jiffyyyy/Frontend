import React, { useEffect, useState } from "react";
import axios from "axios";

const Department = () => {
     useEffect(() => {
    axios
      .get("https://json-six-lac.vercel.app/department/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);
  return (
    <div>Department</div>
  )
}

export default Department