"use client";
import {Button, Col, Row} from "antd";
import "./style.css";
import img1 from "./assets/imghover1.webp";
import img2 from "./assets/imghover2.webp";
import img3 from "./assets/imghover3.webp";
import img4 from "./assets/imghover4.webp";
import img5 from "./assets/imghover5.webp";
import Title from "antd/es/typography/Title";
import SubscriberComponent from "../subscriberComponent";
import Paragraph from "antd/es/typography/Paragraph";
import { useRouter } from "next/navigation";

export default function CardsWhatWeDo() {
  const {push} = useRouter()
  const cards = [
    {
      img: img1.src,
      title: "Acolhimento e Esperança",
      subtitle:
        "Em nossa missão, cada sorriso e abraço importa. Trabalhamos em comunidades carentes, oferecendo acolhimento e cuidados essenciais às famílias e crianças que mais precisam.",
    },
    {
      img: img2.src,
      title: "Distribuição de Alimentos",
      subtitle:
        "Organizamos doações e entregas de alimentos em locais vulneráveis, garantindo que o básico chegue à mesa de quem mais necessita.",
    },
    {
      img: img3.src,
      title: "Atividades com Jovens",
      subtitle:
        "Atuamos em espaços comunitários com projetos voltados à juventude, incentivando a educação, trabalho em equipe e o cuidado com o ambiente.",
    },
    {
      img: img4.src,
      title: "Mutirões de Limpeza",
      subtitle:
        "Promovemos ações práticas como mutirões de limpeza, envolvendo crianças e jovens para revitalizar e valorizar os espaços onde vivem.",
    },
    {
      img: img5.src,
      title: "Gratidão e Conexão",
      subtitle:
        "Valorizamos cada gesto de apoio. Nossos presentes simbólicos representam a gratidão a todos que participam e contribuem para a nossa causa.",
    },
  ];

  return (
    <div className="container-cards">
      <Row className="row-cards">
        {cards.map((item, index) => {
          return (
            <div
              className="card"
              key={index}
              style={{backgroundImage: `url(${item.img})`}}
            >
              <div className="card-animation">
                <Title
                  level={1}
                  style={{
                    color: "#fff",
                    whiteSpace: "wrap",
                    width: "100%",
                  }}
                >
                  {item.title}
                </Title>
                <Paragraph style={{color: "#fff", fontSize: 17}}>
                  {item.subtitle}
                </Paragraph>
              </div>
            </div>
          );
        })}
      </Row>
      <Row className="row-card-banner">
        <Col>
          <Title level={1}>AJA AGORA!</Title>
          <Title level={4}>Seja um voluntário</Title>
          <Button onClick={() => push("/beVolunteer")}>ENTRE EM AÇÃO</Button>
        </Col>
      </Row>
      <SubscriberComponent></SubscriberComponent>
    </div>
  );
}
