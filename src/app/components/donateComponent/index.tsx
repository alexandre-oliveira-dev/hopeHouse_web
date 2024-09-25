"use client";
import {Button, Col, Form, Radio, Row} from "antd";
import React, {useState} from "react";
import "./style.css";
import Title from "antd/es/typography/Title";
import {useForm} from "antd/es/form/Form";
import Input from "antd/es/input/Input";

export default function DonateComponent() {
  const [optionSelected, setOptionSelected] = useState<string | number>();
  const [form] = useForm();
  return (
    <Col style={{width: "100%"}}>
      <Row
        style={{
          width: "100%",
          justifyContent: "center",
          height: "auto",
        }}
      >
        <Title level={5}>Selecione um valor para doar:</Title>
        <Radio.Group
          style={{display: "flex"}}
          onChange={e => setOptionSelected(e.target.value)}
        >
          <Radio.Button className="radioButton" value={10}>
            R$10,00
          </Radio.Button>
          <Radio.Button className="radioButton" value={50}>
            R$50,00
          </Radio.Button>
          <Radio.Button className="radioButton" value={100}>
            R$100,00
          </Radio.Button>
          <Radio.Button className="radioButton" value={200}>
            R$200,00
          </Radio.Button>
          <Radio.Button className="radioButton" value="other">
            outro valor
          </Radio.Button>
          <Radio.Button className="radioButton" value="pix">
            Pix
          </Radio.Button>
        </Radio.Group>
      </Row>
      {optionSelected === "other" && (
        <>
          <br />
          <br />
          <Input
            placeholder="Digite o valor que deseja!"
            // onChange={e => setOptionSelected(e.target.value)}
          ></Input>
        </>
      )}
      <br />
      <br />
      <Form form={form} layout="vertical" style={{width: "100%"}}>
        <Form.Item label="Nome completo">
          <Input placeholder="Digite seu nome"></Input>
        </Form.Item>
        <Row style={{justifyContent: "center", width: "100%", gap: 5}}>
          <Form.Item style={{flex: 1}} label="N° do cartão">
            <Input placeholder="Digite o número do seu cartão"></Input>
          </Form.Item>
          <Form.Item style={{flex: 1}} label="Validade">
            <Input placeholder="ex: 02/35"></Input>
          </Form.Item>
          <Form.Item style={{flex: 1}} label="cvc">
            <Input placeholder="111"></Input>
          </Form.Item>
        </Row>
      </Form>
      <Button style={{width: "100%"}}>Fazer doação</Button>
    </Col>
  );
}
