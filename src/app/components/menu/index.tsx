/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./style.css";
import "../footer/style.css";
import {Button, Row} from "antd";
import Link from "next/link";
import logo from "../../assets/logoIcon.png";
import SocialIcons from "../socialIcons";
import useMenuContext from "@/app/context/menuContext";

export default function Menu() {
  const {open, setOpen} = useMenuContext();
  const btns = [
    {
      title: "sobre",
      href: "/aboutUs",
    },
    {
      title: "O que fazemos",
      href: "/whatWeDo",
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
      title: "Últimas Notícias",
      href: "/lastNews",
    },
  ];

  return (
    <div
      style={open ? {display: "flex"} : {display: "none"}}
      className="container-menu"
    >
      <button className="close-btn-menu" onClick={() => setOpen(false)}>
        X
      </button>
      <Row>
        <img className="logo-menu" src={logo.src} alt="logo"></img>
      </Row>
      <Row className="btns-menu-mobile">
        {btns.map((button, index) => {
          return (
            <Link onClick={() => setOpen(false)} href={button.href} key={index}>
              <Button className="btn-menu">{button.title}</Button>
            </Link>
          );
        })}
      </Row>
      <Row className="btn-menu-2">
        <Link
          style={{flex: 1, height: 55, backgroundColor: "#F1562A"}}
          href={"/donate"}
          onClick={() => setOpen(false)}
        >
          Adote agora!
        </Link>
        <Link
          style={{flex: 1, height: 55, backgroundColor: "#F89825"}}
          href={"/"}
        >
          Pegue uma Ação
        </Link>
      </Row>
      <SocialIcons></SocialIcons>
    </div>
  );
}
