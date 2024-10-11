"use client";

import React from "react";
import MainComponent from "../components/mainComponent";
import "./style.css";
import {Col} from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import SubscriberComponent from "../components/subscriberComponent";

export default function LastNews() {
  return (
    <MainComponent>
      <section className="banner lastNews">
        <div
          style={{
            position: "absolute",
            backgroundColor: "#121212",
            opacity: "0.4",
            width: "100%",
            height: "100%",
            left: "0px",
          }}
        ></div>
        <Col>
          <Title className="title" level={1}>
            ÚLTIMAS NOTÍCIAS
          </Title>

          <Paragraph
            style={{
              color: "#fff",
              fontSize: "20px",
              margin: "0px !important",
            }}
          >
            Acreditamos que o seus serviços voluntários pode nos ajudar
            bastante.
          </Paragraph>
        </Col>
      </section>
      <section className="news-content"></section>
      <SubscriberComponent></SubscriberComponent>
    </MainComponent>
  );
}
