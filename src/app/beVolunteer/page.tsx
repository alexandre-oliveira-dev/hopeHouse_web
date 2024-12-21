/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import MainComponent from "../components/mainComponent";
import "./style.css";
import {Button, Col, Form, Input, Radio, Row} from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import SubscriberComponent from "../components/subscriberComponent";
import "../components/footer/style.css";
import FilterForBanners from "../components/filterForBanners/filterForBanners.component";

export default function BeVolunteer() {
  return (
    <MainComponent>
      <section className="banner bannerBeVolunteer">
        <FilterForBanners></FilterForBanners>

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
      <section style={{fontSize: "50px !important"}} className="contentPages">
        <Title level={1}>PROJETOS</Title>
        <br />
        <Col className="container-projects-bevolunteer" style={{width: "50%"}}>
          <Paragraph>
            Nossos projetos têm como foco promover impacto positivo e
            transformação social. Atuamos em diversas frentes, oferecendo apoio
            às comunidades mais vulneráveis por meio de iniciativas como
            distribuição de alimentos, mutirões de limpeza, ações educativas e
            atividades com jovens. Trabalhamos lado a lado com voluntários e
            parceiros, acreditando que juntos podemos construir um futuro mais
            justo, solidário e sustentável. Saiba mais sobre nossas ações e como
            você pode fazer parte dessa mudança!
          </Paragraph>

          <br />
          <br />
          <Row
            className="projects-be-volunteer"
            style={{width: "100%", gap: "4rem"}}
          >
            <Col style={{flex: 1}}>
              <Title style={{color: "#f1562a"}} level={2}>
                Hope Family
              </Title>
              <Paragraph>
                Através do Hope Family desenvolvemos o PROJETO ACOLHIMENTO, com
                a finalidade de receber as famílias da comunidade Beira Mar, São
                Paulo. PUBLICO ALVO Pais e responsáveis das crianças e
                adolescentes participantes do Projeto Hope Football.
              </Paragraph>
              <Paragraph>
                OBJETIVO Acolhimento e escuta, com o objetivo de investigar as
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
              <Form.Item>
                <Input
                  placeholder="Nome"
                  className="input-footer-contact"
                ></Input>
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="E-mail"
                  className="input-footer-contact"
                ></Input>
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
      <SubscriberComponent></SubscriberComponent>
    </MainComponent>
  );
}
