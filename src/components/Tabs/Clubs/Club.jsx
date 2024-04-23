import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Buffer } from "buffer";
import { Button, Modal } from "antd";

import image from "../../../Images/scanner.jpeg";
import "../../../css/Club.css";

const Club = ({ ClubInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClubClick = (e, ClubInfo) => {
    window.location.href = `/Clubs/${ClubInfo.Id}`;
  };

  let logo = new Blob([Buffer.from(ClubInfo.Logo.data)]);

  return sessionStorage.getItem("user_token") ? (
    <>
      <div className="club-card" onClick={(e) => handleClubClick(e, ClubInfo)}>
        <img src={URL.createObjectURL(logo)} alt="" />

        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <span style={{ fontSize: "x-large", width: "100%", padding: "2px" }}>
            {ClubInfo.Name}
          </span>
          <span style={{ padding: "2px" }}>
            <Button type="primary" onClick={showModal}>
              Join Club
            </Button>
            <Modal title="Make Payment" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={image} style={{ height: "40vh" }} alt={""} />
              </div>
            </Modal>
          </span>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Club;
