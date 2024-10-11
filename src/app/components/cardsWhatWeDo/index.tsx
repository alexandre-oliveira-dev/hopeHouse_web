"use client";
import {Button, Col, Row} from "antd";
import "./style.css";
import monckei from "./assets/macaco.png";
import canguru from "./assets/canguru.png";
import coqueiro from "./assets/coqueiro.png";
import montanhas from "./assets/montanhas.png";
import neve from "./assets/neve.png";
import Title from "antd/es/typography/Title";
import SubscriberComponent from "../subscriberComponent";

export default function CardsWhatWeDo() {
  const cards = [
    {
      img: monckei.src,
      title: "África",
      subtitle: "",
    },
    {
      img: coqueiro.src,
      title: "Ásia",
      subtitle: "",
    },
    {
      img: montanhas.src,
      title: "As Américas",
      subtitle: "",
    },
    {
      img: canguru.src,
      title: "Autrália",
      subtitle: "",
    },
    {
      img: neve.src,
      title: "Europa",
      subtitle: "",
    },
  ];

  return (
    <div className="container-cards">
      <Row className="row-cards">
        {cards.map((item, index) => {
          return (
            <div
              className="card"
              key={index}
              style={{backgroundImage: `url(${item.img})`}}
            >
              <div className="card-animation">
                <Title
                  level={1}
                  style={{
                    color: "#fff",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.title}
                </Title>
              </div>
            </div>
          );
        })}
      </Row>
      <Row className="row-card-banner">
        <Col>
          <Title level={1}>AJA AGORA!</Title>
          <Title level={4}>
            Protegendo as espécies mais ameaçadas do mundo
          </Title>
          <Button>ENTRE EM AÇÃO</Button>
        </Col>
      </Row>
      <SubscriberComponent></SubscriberComponent>
    </div>
  );
}
