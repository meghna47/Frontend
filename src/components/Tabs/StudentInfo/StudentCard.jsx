import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import { useParams, Navigate } from "react-router-dom";

import axios from "../../../api/axios";

export const GetStudentInfo = async (Id) => {
  let res = await axios.get(`/user/${Id}`, {});
  return res.data;
};

const StudentCard = ({ StudentInfo: _StudentInfo }) => {
  const { Id } = useParams();
  const [StudentInfo, setStudentInfo] = useState(_StudentInfo);

  useEffect(() => {
    if (!_StudentInfo) {
      GetStudentInfo(Id).then((d) => setStudentInfo(d));
    }
  }, [Id, _StudentInfo]);

  return sessionStorage.getItem("user_token") ? (
    StudentInfo ? (
      <div className="student-info">
        {StudentInfo?.profile_picture && (
          <img
            className="limit-img"
            src={URL.createObjectURL(
              new Blob([Buffer.from(StudentInfo?.profile_picture)])
            )}
            alt=""
          />
        )}

        <div className="info-text">
          <b>{`${StudentInfo?.first_name ?? ""} ${
            StudentInfo?.last_name ?? ""
          }`}</b>
        </div>
        <div className="info-text">{StudentInfo?.phone_number || ""}</div>
      </div>
    ) : (
      "Loading..."
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default StudentCard;
