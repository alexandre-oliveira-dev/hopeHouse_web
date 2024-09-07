"use client";
import React, {useEffect} from "react";
import MainComponent from "./components/mainComponent";
import "./page.css";
import {Col, notification, Row, Typography} from "antd";
import Title from "antd/es/typography/Title";
import animal from "./assets/animal.png";
import leao from "./assets/leao.png";
import elefante from "./assets/elefante.png";
import ballet from "./assets/ballet.png";
import footbolBoys from "./assets/footbol-boys.png";
import {MdWarning} from "react-icons/md";

export default function Home() {
  useEffect(() => {
    notification.info({
      icon: <MdWarning></MdWarning>,
      message: "Hope house em desenvolvimento. Versão mobile não disponível!",
      duration: 5,
    });
  }, []);
  return (
    <MainComponent>
      <section className="section background-fixed">
        <div
          style={{
            width: "50%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#F89825",
              margin: "0px",
              fontSize: "65px",
              fontWeight: "800",
            }}
          >
            Hope House
          </h1>
          <h4 style={{margin: "0px", fontWeight: "400", fontSize: "20px"}}>
            Acreditamos que através do esporte, educação e arte vamos mudar a
            realidade de muitas crianças
          </h4>
        </div>
      </section>
      <section className="section">
        <div className="box-numbers">
          <Col className="col-box-numbers">
            <div>
              <Title level={2}>40</Title>
              <Typography.Text>Famílias ajudadas</Typography.Text>
            </div>
          </Col>
          <Col className="col-box-numbers">
            <div>
              <Title level={2}>10</Title>
              <Typography.Text>Voluntários</Typography.Text>
            </div>
          </Col>
          <Col className="col-box-numbers">
            <div>
              <Title level={2}>140</Title>
              <Typography.Text>Crianças no programa</Typography.Text>
            </div>
          </Col>
          <Col className="col-box-numbers">
            <div>
              <Title level={2}>1</Title>
              <Typography.Text>Comunidade para proteger</Typography.Text>
            </div>
          </Col>
        </div>
      </section>
      <section className="section">
        <Col style={{width: "100%", height: "100%"}}>
          <Row style={{width: "100%", height: "300px"}}>
            <div style={{flex: 2, backgroundColor: "#000"}}>
              <Title style={{color: "#fff"}} level={1}>
                Sobre a Hope House
              </Title>
            </div>
            <div
              style={{
                flex: 1,
                backgroundImage: `url('${animal.src}')`,
                backgroundSize: "cover",
              }}
            ></div>
            <div style={{flex: 2, backgroundColor: "#7EB7E4"}}></div>
          </Row>
          <Row style={{width: "100%", height: "700px", position: "relative"}}>
            <div
              style={{
                flex: 2,
                backgroundImage: `url('${leao.src}')`,
                backgroundSize: "contain",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Row
                style={{
                  width: "84%",
                  height: "50%",
                  position: "absolute",
                  bottom: "0px",
                  right: "0px",
                }}
              >
                <div
                  style={{
                    flex: 2,
                    backgroundColor: "#F89825",
                  }}
                ></div>
                <div style={{flex: 2, backgroundColor: "#000"}}></div>
                <div
                  style={{
                    flex: 3,
                    backgroundImage: `url('${elefante.src}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </Row>
            </div>
            <Col style={{flex: 3}}>
              <Row
                style={{
                  backgroundColor: "#F1562A",
                  width: "100%",
                  height: "50%",
                }}
              ></Row>
            </Col>
          </Row>
        </Col>
      </section>
      <Row
        style={{
          justifyContent: "center",
          width: "100%",
          height: "150px",
          alignItems: "center",
        }}
      >
        <Title level={1}>Próximos eventos</Title>
      </Row>
      <section className="section">
        <Col style={{width: "100%", height: "100%"}}>
          <Row style={{width: "100%", height: "400px"}}>
            <div
              style={{
                flex: 1,
                backgroundImage: `url('${ballet.src}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div style={{flex: 1, backgroundColor: "#F1562A"}}></div>
          </Row>
          <Row style={{width: "100%", height: "400px"}}>
            <div style={{flex: 1, backgroundColor: "#F1562A"}}></div>
            <div
              style={{
                flex: 1,
                backgroundImage: `url('${footbolBoys.src}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPositionX: "right",
              }}
            ></div>
          </Row>
        </Col>
      </section>
    </MainComponent>
  );
}
