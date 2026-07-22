import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PersonalHero from "@/components/sections/personal/PersonalHero";
import BenefitCards from "@/components/sections/personal/BenefitCards";
import AiSearchSection from "@/components/sections/personal/AiSearchSection";
import BeforeAfter from "@/components/sections/personal/BeforeAfter";
import PlanTable from "@/components/sections/personal/PlanTable";
import FaqSection from "@/components/sections/personal/FaqSection";
import FinalCta from "@/components/sections/personal/FinalCta";
import { EasterEggProvider } from "@/components/ui/EasterEgg";

export const metadata: Metadata = {
  title: "Evernote Personal: Your second brain, without limits",
  description:
    "Unlock every device, offline access, AI-powered search, and 100 GB of monthly uploads with Evernote Personal for €7.99/month.",
};

export default function Home() {
  return (
    <EasterEggProvider>
      <Header />
      <main className="flex-1 pt-[81px]">
        <PersonalHero />
        <BenefitCards />
        <AiSearchSection />
        <BeforeAfter />
        <PlanTable />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </EasterEggProvider>
  );
}
