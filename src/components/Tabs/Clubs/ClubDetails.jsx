import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import { useParams, Navigate } from "react-router-dom";
import { Button, Descriptions } from "antd";

import axios from "../../../api/axios";
import "../../../css/Club.css";

const GetClubInfo = async (Id) => {
  let res = await axios.get(`/clubs/${Id}`, {});
  return res.data;
};

const ClubDetails = () => {
  const { Id } = useParams();
  const [ClubInfo, setClubInfo] = useState();

  useEffect(() => {
    GetClubInfo(Id).then((d) => setClubInfo(d));
  }, [Id]);

  return sessionStorage.getItem("user_token") ? (
    ClubInfo ? (
      <>
        <Button onClick={(e) => window.history.back()}>Back</Button>
        <div className="club-details">
          <img src={URL.createObjectURL(new Blob([Buffer.from(ClubInfo.Logo.data)]))} alt="" />
          <div className="flex-div width100per">
            <Descriptions
              bordered
              style={{ width: "80%", padding: "0 1rem" }}
              title="Club Information"
              items={[
                {
                  key: "1",
                  label: "Club Name",
                  children: ClubInfo.Name,
                  span: 24,
                },
                {
                  key: "2",
                  label: "Description",
                  children: ClubInfo.Description,
                  span: 24,
                },
                {
                  key: "3",
                  label: "President",
                  children: (
                    <div className="flex-div">
                      <img
                        className="limit-img"
                        src={URL.createObjectURL(
                          new Blob([Buffer.from(ClubInfo.ClubPresident.profile_picture)])
                        )}
                        alt=""
                      />
                      <div>
                        <div>
                          President Name:{" "}
                          {`${ClubInfo.ClubPresident.first_name} ${ClubInfo.ClubPresident.last_name}`}
                        </div>
                        <div>President Phone Number: {ClubInfo.ClubPresident.phone_number}</div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </>
    ) : (
      "Loading..."
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default ClubDetails;
