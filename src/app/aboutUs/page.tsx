/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./style.css";
import MainComponent from "../components/mainComponent";
import {Col, Row} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import logo1 from "./assets/weagle.png";
import logo2 from "./assets/tecwebcod.png";
import logo3 from "./assets/relevans.png";
import FilterForBanners from "../components/filterForBanners/filterForBanners.component";

export default function AboutUs() {
  return (
    <MainComponent>
      <section className="banner banner-aboutus">
        <FilterForBanners></FilterForBanners>
        <Col style={{width: "100%"}} className="title-container">
          <Title className="title title-aboutus" level={1}>
            SOBRE HOPE HOUSE
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
      <section style={{fontSize: "50px !important"}} className="contentPages">
        <Title level={1}>MISSÃO E HISTÓRIA</Title>
        <Col style={{width: "55%"}}>
          <Paragraph>
            O Hope tem como objetivo promover a JUSTIÇA SOCIAL e TRANSFORMAÇÃO
            DE VIDA para os menos favorecidos através do amor, compaixão e
            ações, nas áreas do esporte, educação e arte. Queremos ser
            relevantes, impactando a sociedade e expandindo o projeto para
            outros lugares.
          </Paragraph>
          <Paragraph>
            Hoje a nossa ação mais pulsante na comunidade é o Hope Football,
            projeto esportivo que iniciamos em 2021, conta com aproximadamente
            100 crianças, meninos e meninas, entre 05 e 17 anos, seguido pelo
            Hope Ballet com 20 meninas atendidas de quarta e sábado e o Hope
            Family com rodas de conversas mensais com as mães, pais e
            responsáveis dos alunos e alunas com temas referenciais para
            desenvolvimento individual e familiar de cada atendido e entrega de
            cestas básicas para as que hoje possuem necessidade de apoio. Além
            disso temos várias ações pontuais dentro desses projetos e hoje
            atuamos em parceria com a comunidade para entender os pontos de
            melhoria e possíveis novos projetos.
          </Paragraph>
        </Col>
      </section>
      <section className="sponsors-container">
        <Col className="container-logo-sponsors">
          <Title level={1}>PARCEIROS</Title>
          <br />
          <Row style={{width: "100%", gap: 30}}>
            <img className="logo-parceiros" src={logo1.src} alt="logo" />
            <img className="logo-parceiros" src={logo2.src} alt="logo" />
            <img className="logo-parceiros" src={logo3.src} alt="logo" />
          </Row>
        </Col>
      </section>
    </MainComponent>
  );
}
