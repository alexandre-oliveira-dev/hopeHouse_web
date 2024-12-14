/* eslint-disable react/no-unescaped-entities */
"use client";

import {Col, Row} from "antd";
import MainComponent from "../components/mainComponent";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import "./style.css";
import CardsWhatWeDo from "../components/cardsWhatWeDo";
import FilterForBanners from "../components/filterForBanners/filterForBanners.component";

export default function WhatWeDo() {
  return (
    <MainComponent>
      <section className="banner bannerWhatWeDo">
        <FilterForBanners></FilterForBanners>
        <Col className="col-title">
          <Title className="title" level={1}>
            O que fazemos
          </Title>
        </Col>
      </section>
      <section style={{fontSize: "50px !important"}} className="contentPages">
        <Title level={1}>PROGRAMAS & PROJETOS</Title>
        <br />
        <Col className="col-programsprojects" style={{width: "55%"}}>
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
            style={{
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Col className="col-programsprojects" style={{width: "300px"}}>
              <Title style={{color: "#f1562a"}} level={2}>
                Conservação Comunitária
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
            <Col className="col-programsprojects" style={{width: "300px"}}>
              <Title style={{color: "#f1562a"}} level={2}>
                Educação Infantil
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
            <Col className="col-programsprojects" style={{width: "300px"}}>
              <Title style={{color: "#f1562a"}} level={2}>
                Restauração Florestal
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
            <Col className="col-programsprojects" style={{width: "300px"}}>
              <Title style={{color: "#f1562a"}} level={2}>
                Pare o crime contra a vida selvagem
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
            <Col className="col-programsprojects" style={{width: "300px"}}>
              <Title style={{color: "#f1562a"}} level={2}>
                Conservação Marinha
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
            <Col className="col-programsprojects" style={{width: "300px"}}>
              <Title style={{color: "#f1562a"}} level={2}>
                Política Ambiental
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
        <br />
        <br />
        <Title level={1}>ONDE TRABALHAMOS</Title>
      </section>
      <br />
      <br />
      <CardsWhatWeDo></CardsWhatWeDo>
    </MainComponent>
  );
}
