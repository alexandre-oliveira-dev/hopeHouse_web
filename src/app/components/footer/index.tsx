"use client";
import React from "react";
import "./style.css";
import {Button, Col, Input, Row, Typography} from "antd";
import Title from "antd/es/typography/Title";
import SocialIcons from "../socialIcons";
import dayjs from "dayjs";

export default function Footer() {
  return (
    <footer className="footer-component">
      <Row style={{width: "100%"}} className="footer-content">
        <div style={{flex: 1, display: "grid", placeItems: "center"}}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "50%",
            }}
          >
            <h2 style={{fontSize: "30px", fontWeight: "400"}}>
              Entre em contato conosco
            </h2>
            <Input className="input-footer-contact" placeholder="Nome"></Input>
            <Input className="input-footer-contact" placeholder="Email"></Input>
            <Input
              className="input-footer-contact"
              placeholder="Telefone"
            ></Input>
            <Button
              style={{
                borderRadius: "0px ",
                outline: "none",
                marginTop: "20px",
                height: "40px",
              }}
            >
              Enviar
            </Button>
          </Col>
        </div>
        <div style={{flex: 1, display: "grid", placeItems: "center"}}>
          <Col>
            <Row
              className="footer-social-mobile"
              style={{
                justifyContent: "space-between",
                width: "100%",
                gap: "20px",
              }}
            >
              <Col style={{display: "grid", placeItems: "center"}}>
                <Title style={{fontWeight: 200, fontSize: "17px"}}>
                  Endereço
                </Title>
                <Typography.Text>
                  Rua Doutor Bernardino Gomes 216
                </Typography.Text>
              </Col>
              <Col style={{display: "grid", placeItems: "center"}}>
                <Title style={{fontWeight: 200, fontSize: "17px"}}>
                  Telefone
                </Title>
                <Typography.Text>(11) 9999-9999</Typography.Text>
              </Col>
              <Col style={{display: "grid", placeItems: "center"}}>
                <Title style={{fontWeight: 200, fontSize: "17px"}}>Email</Title>
                <Typography.Text>hopehouse@gmail.com</Typography.Text>
              </Col>
            </Row>
            <br />
            <br />
            <SocialIcons></SocialIcons>
          </Col>
        </div>
      </Row>
      <Row
        style={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Typography.Text style={{color:"silver"}}>
          Desenvolvido por TecwebCod - {dayjs(new Date()).format("YYYY")}
        </Typography.Text>
      </Row>
    </footer>
  );
}
