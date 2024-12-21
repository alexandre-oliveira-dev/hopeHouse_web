/* eslint-disable react/no-unescaped-entities */
"use client";

import {Col, Row} from "antd";
import MainComponent from "../components/mainComponent";
import Title from "antd/es/typography/Title";
import "./style.css";
import {BsFacebook, BsTwitter} from "react-icons/bs";
import FilterForBanners from "../components/filterForBanners/filterForBanners.component";
import SubscriberComponent from "../components/subscriberComponent";

export default function WhatWeDo() {
  const members = [
    {
      name: "Ana Silva",
      position: "Educadora Social",
      email: "info@hopehouse.com",
      socials: {
        facebook: "",
        x: "",
      },
    },
    {
      name: "Mariana Santos",
      position: "Diretora Executiva",
      email: "info@hopehouse.com",
      socials: {
        facebook: "",
        x: "",
      },
    },
    {
      name: "Paulo Pereira",
      position: "Coordenador de Apoio",
      email: "info@hopehouse.com",
      socials: {
        facebook: "",
        x: "",
      },
    },
    {
      name: "Ricardo Oliveira",
      position: "Gestor de Programas",
      email: "info@hopehouse.com",
      socials: {
        facebook: "",
        x: "",
      },
    },
    {
      name: "Carla Costa",
      position: "Secretária",
      email: "info@hopehouse.com",
      socials: {
        facebook: "",
        x: "",
      },
    },
    {
      name: "Sofia Oliveira",
      position: "Coordenadora de Projetos",
      email: "info@hopehouse.com",
      socials: {
        facebook: "",
        x: "",
      },
    },
  ];

  return (
    <MainComponent>
      <section className="banner bannerWhowheare">
        <FilterForBanners></FilterForBanners>

        <Col className="col-box-title-whoweare">
          <Title className="title" level={1}>
            MEMBROS DA HOPE
          </Title>
        </Col>
      </section>
      <section
        style={{fontSize: "50px !important", marginBottom: "2rem"}}
        className="contentPages"
      >
        <Title level={1}>MEMBROS DA EQUIPE</Title>
        <br />
        <Row className="members" >
          {members.map((item, index) => {
            return (
              <Col key={index}>
                <h1 style={{fontSize: 30, color: "#f1562a"}}>{item.name}</h1>
                <br />
                <p style={{fontSize: 18}}>{item.position}</p>
                <p>{item.email}</p>
                <br />
                <Row style={{gap: 10}}>
                  <BsFacebook></BsFacebook>
                  <BsTwitter></BsTwitter>
                </Row>
              </Col>
            );
          })}
        </Row>
      </section>
      <br />
      <SubscriberComponent></SubscriberComponent>
    </MainComponent>
  );
}
