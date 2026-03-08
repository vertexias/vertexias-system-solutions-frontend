import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Reveal from "@/components/animation/Reveal";

export default function ContactPageShell() {
  return (
    <main id="page-contact" className="page-section">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <Reveal>
              <ContactInfo />
            </Reveal>

            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}