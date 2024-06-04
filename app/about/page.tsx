"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section>
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-4">
            I am a UI/UX Designer and Software Developer skilled in various
            technologies including Figma, Corel Draw, WordPress, React, Next.js,
            Vue.js, Tailwind CSS, Bootstrap, HTML5, Python, and a bit of Machine
            Learning and AI.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
