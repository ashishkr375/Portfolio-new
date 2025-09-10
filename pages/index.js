import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import Hero from "../components/ui/Hero";
import About from "../components/ui/About";
import Projects from "../components/ui/Projects";
import Experience from "../components/ui/Experience";
import Contact from "../components/ui/Contact";
import MyTestimonials from "../components/ui/MyTestimonials";
import TechStack from "../components/ui/TechStack";
import Skills from "../components/ui/Skills";
import Script from "next/script";
import FooterCTA from "../components/ui/FooterCTA";

export default function Home() {
  return (
    <>
      <div className="container">
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R4QYTMFJYT"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R4QYTMFJYT');
            `
          }}
        />
      </div>

      <Head>
        <meta name="robots" content="index" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ashish Kumar - Full Stack Developer and Computer Science student specializing in web development, blockchain, and machine learning" />
        <meta name="keywords" content="Ashish Kumar, Portfolio, Web Developer, Full Stack, React, Node.js, Blockchain, Machine Learning" />
        <title>Ashish Kumar - Full Stack Developer</title>
      </Head>
      
      <Hero />
      
      <About />
      
      <GradientWrapper>
        <TechStack />
      </GradientWrapper>
      
      <Skills />
      
      <GradientWrapper>
        <Projects />
      </GradientWrapper>
      
      <Experience />
      
      <GradientWrapper>
        <MyTestimonials />
      </GradientWrapper>
      
      <Contact />
      
      <FooterCTA />
    </>
  );
}
