import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import StudentCard, { GetStudentInfo } from "./StudentCard";

const Student_Info = () => {
  const user_id = sessionStorage.getItem("user_id");
  const [UserInfo, setUserInfo] = useState();

  useEffect(() => {
    GetStudentInfo(user_id).then((user) => setUserInfo(user));
  }, [user_id]);

  return sessionStorage.getItem("user_token") ? (
    UserInfo ? (
      <StudentCard StudentInfo={UserInfo} />
    ) : (
      "Loading..."
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default Student_Info;
