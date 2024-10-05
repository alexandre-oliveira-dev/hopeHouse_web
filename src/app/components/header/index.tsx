/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import Link from "next/link";
import {FiMenu} from "react-icons/fi";
import useMenuContext from "@/app/context/menuContext";

export default function Header() {
  const {setOpen} = useMenuContext();

  return (
    <header className="header-component">
      <div className="logo">
        <Link href={"/"}>
          <img src={logo.src} alt="logo" />
        </Link>
      </div>
      <nav className="nav-bar">
        <Link className="nav-btn" href={"../donate"}>
          Apadrinhe uma criança
        </Link>
        <Link className="nav-btn" href={""}>
          Doe Agora
        </Link>
        <Link className="nav-btn" href={"../beVolunteer"}>
          Seja Um Voluntario
        </Link>
        <button onClick={() => setOpen(true)} className="nav-btn">
          Menu <FiMenu></FiMenu>
        </button>
      </nav>
    </header>
  );
}
