import Image from "next/image";
import { Header } from "./components/header/header";
import { Experiences } from "./components/experiences/experience";

import './styles/home.scss';

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experiences />
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages">
          <span> BR - Native</span>
          <span>EN - Intermediate</span>
        </div>
        <div className="educational">
          <span></span>
          <span>texto educação</span>
        </div>
      </div>
      <div className="buttons">
        <div className="social">
          <button>Contact me!</button>
        </div>
      </div>
    </main>
  )
}
