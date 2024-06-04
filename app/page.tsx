"use client"
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4">
            I am a UI/UX Designer and Software Developer. Here are some of my
            works.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
