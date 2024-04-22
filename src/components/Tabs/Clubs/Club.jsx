import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Buffer } from "buffer";
import { Avatar, Card, Button, Modal } from "antd";

import image from "../../../Images/scanner.jpeg";
const { Meta } = Card;

const Club = ({ ClubInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let logo = new Blob([Buffer.from(ClubInfo.Logo.data)]);

  return sessionStorage.getItem("user_token") ? (
    <Card
      style={{ width: 1000 }}
      cover={
        <img
          style={{ width: "25vw", margin: "1rem" }}
          src={URL.createObjectURL(logo)}
          alt=""
        />
      }
      actions={[]}
    >
      <Meta avatar={<Avatar src={URL.createObjectURL(logo)} />} />
      <br />
      Name: {ClubInfo.Name} <br />
      <br />
      <Button type="primary" onClick={showModal}>
        Join Club
      </Button>
      <Modal
        title="Make Payment"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={image} style={{ height: "40vh" }} alt={""} />
        </div>
      </Modal>
    </Card>
  ) : (
    <Navigate to="/login" />
  );
};

export default Club;
