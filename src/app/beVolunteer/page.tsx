"use client";

import React from "react";
import MainComponent from "../components/mainComponent";
import "./style.css";
import {Col} from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export default function BeVolunteer() {
  return (
    <MainComponent>
      <section className="bannerBeVolunteer">
        <Col className="beVolunteerTitle">
          <Title className="title" level={1}>
            Seja um voluntário !
          </Title>
          <Paragraph
            style={{color: "#fff", fontSize: "20px", margin: "0px !important"}}
          >
            Acreditamos que o seus serviços voluntários pode nos ajudar
            bastante.
          </Paragraph>
        </Col>
      </section>
    </MainComponent>
  );
}
