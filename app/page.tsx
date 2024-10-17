import Image from "next/image";
import Hero from "@/components/Hero";
import ComponentsPanel from "@/components/ComponentsPanel";
import FeaturesPanel from "@/components/FeaturesPanel";
import ClientsPanel from "@/components/ClientsPanel";
import PaymentPlanPanel from "@/components/PaymentPlanPanel";

export default function Home() {
  return (
    <div>
      <Hero />
      <ComponentsPanel/>
      <FeaturesPanel/>
      <ClientsPanel/>
      <PaymentPlanPanel/>
    </div>
  );
}
