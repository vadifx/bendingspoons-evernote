import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeatureCarousel from "@/components/sections/FeatureCarousel";
import DarkBanner from "@/components/sections/DarkBanner";
import FeatureSplit from "@/components/sections/FeatureSplit";
import AiShowcase from "@/components/sections/AiShowcase";
import DownloadSection from "@/components/sections/DownloadSection";
import OrganizeVisual from "@/components/visuals/OrganizeVisual";
import SearchVisual from "@/components/visuals/SearchVisual";
import CollabVisual from "@/components/visuals/CollabVisual";
import CaptureVisual from "@/components/visuals/CaptureVisual";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-[81px]">
        <Hero />
        <FeatureCarousel />
        <DarkBanner />

        <FeatureSplit
          badge={{ label: "Riordina", tone: "pink" }}
          title="Metti ordine in tutto ciò che fai"
          body="Grazie alla struttura semplice e flessibile di Evernote, organizzare i tuoi contenuti è più facile che mai. Inoltre le task integrate ti aiutano a tenere sotto controllo tutte le cose da fare."
          visual={<OrganizeVisual />}
        />

        <FeatureSplit
          badge={{ label: "Ricerca", tone: "orange" }}
          title="Trova rapidamente ciò che ti serve"
          body="Trova facilmente la nota giusta, proprio quando ti serve: già sincronizzata su tutti i tuoi dispositivi."
          visual={<SearchVisual />}
          reverse
        />

        <AiShowcase />

        <FeatureSplit
          badge={{ label: "Condividi", tone: "yellow" }}
          title="Rendi la collaborazione semplice"
          body="Migliora il teamwork con la modifica in tempo reale, lascia commenti per rimanere sincronizzato e assegna tasks per mantenere tutto in movimento."
          visual={<CollabVisual />}
        />

        <FeatureSplit
          badge={{ label: "Cattura", tone: "purple" }}
          title="Salva qualsiasi cosa, in qualsiasi forma"
          body="Registra, trascrivi, scansiona, ritaglia: indipendentemente dal modo in cui raccogli le informazioni, Evernote conserva tutti i tuoi contenuti in modo sicuro."
          visual={<CaptureVisual />}
          reverse
        />

        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
