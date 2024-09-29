"use client";
import React from "react";
import "./style.css";
import {Button, Row} from "antd";
import Link from "next/link";

export default function Menu() {
  const btns = [
    {
      title: "sobre",
      href: "",
    },
    {
      title: "O que fazemos",
      href: "",
    },
    {
      title: "Quem somos",
      href: "",
    },
    {
      title: "Eventos",
      href: "",
    },
    {
      title: "Notícias",
      href: "",
    },
    {
      title: "Mais",
      href: "",
    },
  ];

  return (
    <div className="container-menu">
      <Row>
        {btns.map((button, index) => {
          return (
            <Link href={button.href} key={index}>
              <Button>{button.title}</Button>
            </Link>
          );
        })}
      </Row>
    </div>
  );
}
