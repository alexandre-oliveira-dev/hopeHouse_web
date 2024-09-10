"use client";
import React from "react";
import "./style.css";
import {Button, Col, Input} from "antd";

export default function Footer() {
  return (
    <footer className="footer-component">
      <div style={{flex: 1, display: "grid", placeItems: "center"}}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "70%",
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
          <Button>Enviar</Button>
        </Col>
      </div>
      <div style={{flex: 1, display: "grid", placeItems: "center"}}>s</div>
    </footer>
  );
}
