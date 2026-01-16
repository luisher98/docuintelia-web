import { Hero } from "@/components/home/hero";
import { Problema } from "@/components/home/problema";
import { Solucion } from "@/components/home/solucion";
import { ComoFunciona } from "@/components/home/como-funciona";
import { SectoresPreview } from "@/components/home/sectores-preview";
import { Resultado } from "@/components/home/resultado";
import { CTAFinal } from "@/components/home/cta-final";

export default function Home() {
  return (
    <>
      <Hero />
      <Problema />
      <Solucion />
      <ComoFunciona />
      <SectoresPreview />
      <Resultado />
      <CTAFinal />
    </>
  );
}
