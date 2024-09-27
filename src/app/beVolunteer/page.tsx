/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import MainComponent from "../components/mainComponent";
import "./style.css";
import {Button, Col, Form, Input, Radio, Row, Select} from "antd";
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
      <section
        style={{fontSize: "50px !important"}}
        className="content-beVolunteer"
      >
        <Title level={1}>PROJETOS</Title>
        <br />
        <Col style={{width: "40%"}}>
          <Paragraph>
            Um instituto criativo que acredita em justiça social. Clique aqui
            para adicionar seu próprio texto e editar. É fácil. Basta clicar em
            "Editar texto" ou clicar duas vezes em mim para adicionar seu
            próprio conteúdo e fazer alterações na fonte. Sinta-se à vontade
            para arrastar e soltar-me onde quiser na sua página.
          </Paragraph>
          <Paragraph>
            Este é um ótimo espaço para escrever um longo texto sobre a sua
            organização e os serviços que oferece. Você pode usar este espaço
            para detalhar um pouco mais sobre a sua organização. Fale sobre a
            sua equipe e quais serviços você oferece.
          </Paragraph>
          <br />
          <br />
          <Row style={{width: "100%", gap: "4rem"}}>
            <Col style={{flex: 1}}>
              <Title style={{color: "#f1562a"}} level={2}>
                Hope Family
              </Title>
              <Paragraph>
                Através do Hope Family desenvolvemos o PROJETO ACOLHIMENTO, com
                a finalidade de receber as famílias da comunidade Beira Mar, São
                Paulo. PUBLICO ALVO Pais e responsáveis das crianças e
                adolescentes participantes do Projeto Hope Football. OBJETIVO
                Acolhimento e escuta, com o objetivo de investigar as
                experiências emocionais de cada participante, desta forma os
                integrantes conseguirão participar da superação das condições
                adversas, ou seja, deve valer-se do vínculo para estimular o
                grupo a participar da resolução de seus próprios problemas.
              </Paragraph>
            </Col>
            <Col style={{flex: 1}}>
              <Title style={{color: "#f1562a"}} level={2}>
                Hope Arts
              </Title>
              <Paragraph>
                Atendemos cerca 90 crianças e adolescentes na comunidade Beira
                Mar, Zona Norte de São Paulo, através do projeto Hope Football.
                Atualmente, nossas aulas acontecem às quartas, quintas e aos
                sábados. Nosso time participa frequentemente de amistosos e
                peneiras para seleção de atletas.
              </Paragraph>
              <Paragraph>
                Será um prazer receber sua visita para conhecer o projeto.
                Acreditamos que através do Esporte vamos mudar a realidade de
                muitas crianças e adolescentes.
              </Paragraph>
            </Col>
            <Col style={{flex: 1}}>
              <Title style={{color: "#f1562a"}} level={2}>
                Hope FootBall
              </Title>
              <Paragraph>
                O trabalho de artes desempenha um papel fundamental no
                desenvolvimento de crianças e adolescentes. Em comunidades no
                Brasil, onde muitas vezes o acesso a recursos culturais é
                limitado, a arte pode oferecer uma oportunidade valiosa para que
                possam explorar sua criatividade, desenvolver habilidades
                físicas e emocionais, e sonhar com um futuro mais promissor. O
                ballet é uma forma de arte que combina movimento gracioso,
                disciplina e expressão artística. Ao praticar ballet, as
                crianças e adolescentes aprendem a desenvolver postura,
                equilíbrio, flexibilidade e coordenação motora.
              </Paragraph>
            </Col>
          </Row>
        </Col>
      </section>

      <Form layout="vertical" className="form-subscriber">
        <div className="container-form-subscriber">
          <Title level={1}> Inscrição</Title>

          <Row style={{width: "100%"}}>
            <Col flex={2}>
              <Form.Item label="Nome">
                <Input></Input>
              </Form.Item>
              <Form.Item label="E-mail">
                <Input></Input>
              </Form.Item>
              <Form.Item label="País">
                <Select placeholder="Selecione"></Select>
              </Form.Item>
            </Col>
            <Col
              flex={1}
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "30px",
              }}
            >
              <label style={{fontSize: "20px"}}>Como você pode ajudar ?</label>
              <br />
              <Form.Item>
                <Radio.Group
                  size="large"
                  style={{display: "grid"}}
                  buttonStyle="outline"
                >
                  <Radio
                    style={{fontSize: "17px"}}
                    name="howHelping"
                    value="voluntario"
                  >
                    Voluntário
                  </Radio>
                  <Radio
                    style={{fontSize: "17px"}}
                    name="howHelping"
                    value="padrinhamento"
                  >
                    Apadrinhamento
                  </Radio>
                  <Radio
                    style={{fontSize: "17px"}}
                    name="howHelping"
                    value="Patrocinador"
                  >
                    Patrocinador
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <br />
          <Button
            style={{
              width: "50%",
              height: "50px",
              backgroundColor: "#f1562a",
              color: "#fff",
              fontSize: 20,
            }}
          >
            Enviar
          </Button>
        </div>
      </Form>
    </MainComponent>
  );
}
