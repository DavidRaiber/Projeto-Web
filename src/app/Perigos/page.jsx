import Image from "next/image";
import Menu from "../components/Menu";
import Card from "../components/Card"
import "./stylesPerigos.css";

export default function Home() {
  return (
    <>
      <Menu></Menu>
      <div className="page">
        <div className="painel">
        <Card title="Maconha" desc="Alterções Cognitivas, Deficit de Aprendizado, perda de memória, de atenção e de movimentos cognitivos" imagem="droga1.jpg"/>
        <Card title="Álcool" desc="Disturbios Mentais e Comportamentais. Depedência. Cirrose. Câncer. Doenças Cardiovasculares" imagem="droga2.jpg" />
        <Card title="Crack" desc="Perda dos sentidos, surtos psicóticos, alucinações, vício extremo, agressividade, tremores, câncer e lesões cerebrais " imagem="droga3.jpg"/>
        <Card title="Cocaína" desc="Sangramento no nariz, Náuseas, Euforia, Agressividade, Perda de Memória, Hemorragia, Depressão, Isolamento e Comportamento Agressivo" imagem="droga4.jpg"/>
        <Card title="Heroina" desc="Danos permanentes no cérebro, Danos à capacidade cognitiva, perda de memória, perda na capacidade de tomar decisões, problemas de fala, perda da visão" imagem="droga.jpg"/>
        </div>
        
      </div>
    </>
  );
}