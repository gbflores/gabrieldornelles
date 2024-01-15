import Image from "next/image";
import { Header } from "./components/header/header";
import { Experiences } from "./components/experiences/experience";
import { Infos } from "./components/infos/info";
import { Buttons } from "./components/buttons/button";
import { IconEmail } from "./components/icons/email";

import './styles/home.scss';

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experiences />
      <Infos />
      <div className="buttons">
        <Buttons />
        <a className="btn-primary" href="mailto:ogabrieldornelle@gmail.com">
          Entre em contato!
          <IconEmail width="24" height="24" color="white" />
        </a>
      </div>
    </main>
  )
}
