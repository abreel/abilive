"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section>
          <h1 className="text-3xl font-bold">Contact Me</h1>
          <div className="mt-4">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
