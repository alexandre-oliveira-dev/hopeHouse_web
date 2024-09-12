"use client";
import React, {useEffect} from "react";
import MainComponent from "./components/mainComponent";
import "./page.css";
import {Button, Col, Input, notification, Row, Space, Typography} from "antd";
import Title from "antd/es/typography/Title";
import background from "./assets/image.png";
import background2 from "./assets/image copy.png";
import background3 from "./assets/_AR_9469.jpg";
import ballet from "./assets/ballet.png";
import footbolBoys from "./assets/footbol-boys.png";
import {MdWarning} from "react-icons/md";

export default function Home() {
  useEffect(() => {
    notification.info({
      icon: <MdWarning></MdWarning>,
      message: "Hope house em desenvolvimento. Versão mobile não disponível!",
      duration: 5,
    });
  }, []);
  return (
    <MainComponent>
      <section className="section background-fixed">
        <div
          style={{
            width: "50%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#F89825",
              margin: "0px",
              fontSize: "70px",
              fontWeight: "800",
            }}
          >
            Hope House
          </h1>
          <h4
            style={{
              margin: "0px",
              fontWeight: "600",
              fontSize: "25px",
              color: "#fff",
            }}
          >
            Acreditamos que através do esporte, educação e arte vamos mudar a
            realidade de muitas crianças
          </h4>
        </div>
      </section>
      <section className="section">
        <div className="box-numbers">
          <Col className="col-box-numbers">
            <div>
              <Title level={2}>40</Title>
              <Typography.Text>Famílias ajudadas</Typography.Text>
            </div>
          </Col>
          <Col className="col-box-numbers">
            <div>
              <Title level={2}>10</Title>
              <Typography.Text>Voluntários</Typography.Text>
            </div>
          </Col>
          <Col className="col-box-numbers">
            <div>
              <Title level={2}>140</Title>
              <Typography.Text>Crianças no programa</Typography.Text>
            </div>
          </Col>
          <Col className="col-box-numbers">
            <div>
              <Title level={2}>1</Title>
              <Typography.Text>Comunidade para proteger</Typography.Text>
            </div>
          </Col>
        </div>
      </section>
      <section className="section">
        <Col style={{width: "100%", height: "100%"}}>
          <Row style={{width: "100%", height: "450px"}}>
            <div
              style={{
                flex: 2,
                backgroundColor: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col style={{width: "50%"}}>
                <Title style={{color: "#fff", width: "65%"}} level={1}>
                  Sobre a Hope House
                </Title>

                <p
                  style={{
                    color: "#fff",
                    fontSize: "15px",
                    lineHeight: "27px",
                    fontWeight: 800,
                  }}
                >
                  O Hope tem como objetivo promover a JUSTIÇA SOCIAL e
                  TRANSFORMAÇÃO DE VIDA para os menos favorecidos através do
                  amor, compaixão e ações, nas áreas do esporte, educação e
                  arte.
                </p>
                <br />
                <Button
                  className="btn-style"
                  style={{
                    background: "transparent",
                    color: "#fff",
                    width: "150px",
                    height: "40px",
                  }}
                >
                  Saiba mais
                </Button>
              </Col>
            </div>
            <div
              style={{
                flex: 1.5,
                backgroundImage: `url('${background3.src}')`,
                backgroundSize: "cover",
              }}
            ></div>
            <div
              style={{
                flex: 2,
                backgroundColor: "#7EB7E4",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col style={{width: "50%"}}>
                <Title style={{color: "#fff", width: "65%"}} level={1}>
                  Projetos
                </Title>

                <p
                  style={{
                    color: "#fff",
                    fontSize: "15px",
                    lineHeight: "27px",
                    fontWeight: 800,
                  }}
                >
                  Hope House atua em diversas áreas como esporte, educação e
                  arte. Além dos projetos com crianças e adolescentes,
                  trabalhamos com as famílias dos alunos dos nossos projetos,
                  compartilhando vivências, ensinando valores, acolhimento,
                  auxiliando e ajudando as necessidades de cada família.
                </p>
                <br />
                <Button
                  className="btn-style"
                  style={{
                    background: "transparent",
                    color: "#fff",
                    width: "150px",
                    height: "40px",
                  }}
                >
                  Apoie-nos
                </Button>
              </Col>
            </div>
          </Row>
          <Row style={{width: "100%", height: "auto", position: "relative"}}>
            <div
              style={{
                flex: 1.14,
                backgroundImage: `url('${background.src}')`,
                backgroundSize: "contain",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  width: "400px",
                  height: "400px",
                  backgroundColor: "#F89825",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Col style={{width: "80%"}}>
                  <Title style={{color: "#fff", width: "100%"}} level={1}>
                    Últimas Noticias
                  </Title>

                  <p
                    style={{
                      color: "#fff",
                      fontSize: "15px",
                      lineHeight: "27px",
                      fontWeight: 800,
                    }}
                  >
                    Hope House atua em diversas áreas como esporte, educação e
                    arte. Além dos projetos com crianças e adolescentes,
                    trabalhamos com as famílias dos alunos dos nossos projetos,
                    compartilhando vivências, ensinando valores, acolhimento,
                    auxiliando e ajudando as necessidades de cada família.
                  </p>
                  <br />
                  <Button
                    className="btn-style"
                    style={{
                      background: "transparent",
                      color: "#fff",
                      width: "150px",
                      height: "40px",
                    }}
                  >
                    Leia agora
                  </Button>
                </Col>
              </div>
            </div>

            <Col style={{flex: 2}}>
              <Row
                style={{
                  backgroundColor: "#679C6C",
                  width: "100%",
                  alignItems: "center",
                  padding: "2rem 2rem 2rem 4rem",
                  display: "flex",
                }}
              >
                <Col style={{flex: 1}}>
                  <Title
                    style={{
                      fontSize: "70px",
                      color: "#fff",
                      width: "75%",
                    }}
                    level={1}
                  >
                    COMO VOCÊ PODE AJUDAR
                  </Title>
                  <Button
                    className="btn-style"
                    style={{
                      background: "transparent",
                      color: "#fff",
                      width: "150px",
                      height: "40px",
                    }}
                  >
                    Saiba mais
                  </Button>
                </Col>
                <div style={{flex: 1}}>
                  <ul
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                      lineHeight: "40px",
                      fontWeight: "200",
                    }}
                  >
                    <li>Apadrinhamento</li>
                    <li>Doações</li>
                    <li>Patrocinando Hope House</li>
                  </ul>
                </div>
              </Row>
              <Row
                style={{
                  width: "100%",
                  height: "auto",
                  flexWrap: "nowrap",
                }}
              >
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundColor: "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Col style={{width: "80%"}}>
                    <Title style={{color: "#fff", width: "100%"}} level={1}>
                      Conheça-nos
                    </Title>

                    <p
                      style={{
                        color: "#fff",
                        fontSize: "15px",
                        lineHeight: "27px",
                        fontWeight: 800,
                      }}
                    >
                      Hope House atua em diversas áreas como esporte, educação e
                      arte. Além dos projetos com crianças e adolescentes,
                      trabalhamos com as famílias dos alunos dos nossos
                      projetos, compartilhando vivências, ensinando valores,
                      acolhimento, auxiliando e ajudando as necessidades de cada
                      família.
                    </p>
                    <br />
                    <Button
                      className="btn-style"
                      style={{
                        background: "transparent",
                        color: "#fff",
                        width: "150px",
                        height: "40px",
                      }}
                    >
                      Nossa Equipe
                    </Button>
                  </Col>
                </div>
                <div
                  style={{
                    flex: 1,
                    height: "400px",
                    backgroundImage: `url('${background2.src}')`,
                    backgroundSize: "contain",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></div>
              </Row>
            </Col>
          </Row>
        </Col>
      </section>
      <Row
        style={{
          justifyContent: "center",
          width: "100%",
          height: "150px",
          alignItems: "center",
        }}
      >
        <Title level={1}>Próximos eventos</Title>
      </Row>
      <section className="section">
        <Col style={{width: "100%", height: "100%"}}>
          <Row style={{width: "100%", height: "400px"}}>
            <div
              style={{
                flex: 1,
                backgroundImage: `url('${ballet.src}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              style={{
                flex: 1,
                backgroundColor: "#F1562A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col style={{textAlign: "start"}}>
                <Title
                  style={{color: "#fff", fontSize: "60px", width: "45%"}}
                  level={1}
                >
                  COMO VOCÊ PODE AJUDAR
                </Title>
                <p style={{color: "#fff", fontSize: "20px", margin: "0px"}}>
                  Inscreva-se para ficar por dentro de novas notícias!
                </p>
              </Col>
            </div>
          </Row>
          <Row style={{width: "100%", height: "400px"}}>
            <div style={{flex: 1, backgroundColor: "#F1562A"}}></div>
            <div
              style={{
                flex: 1,
                backgroundImage: `url('${footbolBoys.src}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Row>
        </Col>
      </section>
      <Row
        style={{
          justifyContent: "center",
          width: "100%",
          height: "150px",
          alignItems: "center",
        }}
      >
        <Title level={1}>Últimas notícias</Title>
      </Row>

      <section className="section">
        <Col style={{textAlign: "center"}}>
          <h2>Verifique em breve</h2>
          <p>
            Assim que novos posts forem publicados, você poderá vê-los aqui.
          </p>
        </Col>
      </section>

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
    </MainComponent>
  );
}
