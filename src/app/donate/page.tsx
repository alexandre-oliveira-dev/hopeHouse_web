"use client";
import React from "react";
import "./style.css";
import "../page.css";
import MainComponent from "../components/mainComponent";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import DonateComponent from "../components/donateComponent";

export default function Donate() {
  return (
    <MainComponent>
      <section className="section" style={{marginTop: "80px"}}>
        <div className="box-title-donate">
          <Title className="title-donate" level={1}>
            Apadrinhe o Hope
          </Title>
          <Paragraph>
            Em um canto especial da cidade de São Paulo, existe uma comunidade
            vibrante, porém desafiada pela vulnerabilidade. Nesse lugar,
            encontramos crianças e famílias que enfrentam batalhas diárias para
            construir um futuro melhor. É aqui que a sua ajuda pode fazer toda a
            diferença. Tornar-se padrinho ou madrinha é mais do que um ato de
            generosidade; é um compromisso com a transformação de vidas e a
            construção de um amanhã mais brilhante. A importância de ser um
            padrinho ou madrinha vai além do aspecto financeiro. É um gesto de
            solidariedade que envia uma mensagem poderosa: essas crianças e
            famílias não estão sozinhas. O valor mensal que você contribui se
            transforma em esperança, oportunidades e apoio tangível para a
            continuação do trabalho vital realizado por todos nós da Hope House.
          </Paragraph>
          <Title style={{color: "#F1562A"}}>
            Um gesto hoje, uma tranformação para sempre
          </Title>
          <br />
          <Title style={{color: "#F1562A"}}>Faça uma doação </Title>
          <Paragraph>
            Esta é a descrição da sua campanha. É um ótimo lugar para contar aos
            visitantes do que se trata a campanha, conectar-se com doadores e
            chamar atenção para sua causa.
          </Paragraph>
          <br />
          <DonateComponent></DonateComponent>
        </div>
      </section>
    </MainComponent>
  );
}