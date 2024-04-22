import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Col, Row } from "antd";

import axios from "../../../api/axios";
import Club from "./Club";

const GetClubs = async () => {
  let res = await axios.get(`/clubs`, {});
  return res.data;
};

const Clubs = () => {
  const [clubs_list, setClubs] = useState([]);
  useEffect(() => {
    GetClubs().then((d) => setClubs(d));
  }, []);

  return sessionStorage.getItem("user_token") ? (
    <Row>
      {clubs_list.map((c) => (
        <Col
          key={c.Id}
          xs={{ flex: "100%" }}
          sm={{ flex: "50%" }}
          md={{ flex: "40%" }}
          lg={{ flex: "20%" }}
          xl={{ flex: "10%" }}
        >
          <Club ClubInfo={c} />
        </Col>
      ))}
    </Row>
  ) : (
    <Navigate to="/login" />
  );
};

export default Clubs;
