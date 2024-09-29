import {Button, Col, Input, Row, Space} from "antd";
import Title from "antd/es/typography/Title";
import "./style.css";
import "../../page.css";

export default function SubscriberComponent() {
  return (
    <section
      style={{backgroundColor: "#F89825", position: "relative"}}
      className="section"
    >
      <Col style={{textAlign: "center"}}>
        <Title style={{color: "#fff", fontSize: "50px"}} level={1}>
          Junte-se ao movimento
        </Title>
        <p style={{color: "#fff", fontSize: "20px", margin: "0px"}}>
          Inscreva-se para ficar por dentro de novas notícias!
        </p>
      </Col>
      <Row
        style={{
          position: "absolute",
          bottom: "-20px",
        }}
      >
        <Space.Compact className="input-subscriber">
          <Input placeholder="Digite seu E-mail"></Input>
          <Button>Inscrever-se</Button>
        </Space.Compact>
      </Row>
    </section>
  );
}
