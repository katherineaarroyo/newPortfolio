import { Link } from 'react-router-dom';
import me from "./assets/about/me.jpg";
import typefaceCards from "./assets/design/typefaceCards.png";
import typefaceBooklet from "./assets/design/typefaceBooklet.png";
import asamiMatcha from "./assets/design/asamiMatcha.png";

interface AboutProps {
  theme: "light" | "dark";
}

export default function About({ theme }: AboutProps) {
  const colors = {
    light: {
      bg: "#f5f5f5",
      text: "#1a1a1a",
      cardBg: "#ffffff",
      cardBorder: "rgba(0, 0, 0, 0.1)",
      tagBg: "#36291E",
      tagText: "#FBF3E4",
      navBg: "rgba(255, 255, 255, 0.8)",
      navBorder: "rgba(0, 0, 0, 0.1)",
      subtitle: "#808368",
      sectionBg: "#f9f9f9",
    },
    dark: {
      bg: "#1a1a1a",
      text: "#ffffff",
      cardBg: "#2a2a2a",
      cardBorder: "rgba(255, 255, 255, 0.3)",
      tagBg: "#FBF3E4",
      tagText: "#36291E",
      navBg: "rgba(58, 58, 58, 0.8)",
      navBorder: "rgba(255, 255, 255, 0.3)",
      subtitle: "#c6caa0",
      sectionBg: "#1a1a1a",
    },
  };

  const c = colors[theme];

  return (
    <div
      style={{
        backgroundColor: c.bg,
        color: c.text,
        width: "100%",
        maxWidth: "1200px",
        padding: "0 40px",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      {/* Hero Section with Image and Bio */}
      <section style={{ marginBottom: "100px" }}>
        <div
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: c.subtitle,
            marginBottom: "20px",
            transition: "color 0.3s",
          }}
        >
          ABOUT ME
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 600,
            lineHeight: "1.3",
            margin: "0 0 60px 0",
            maxWidth: "800px",
            transition: "color 0.3s",
          }}
        >
          {" "}
          I design accessible, thoughtful digital experiences—with real-world
          impact in mind.
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "60px",
            alignItems: "start",
            marginBottom: "40px",
          }}
        >
          {/* Profile Image */}
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              aspectRatio: "4/5",
              backgroundColor: c.cardBg,
              borderRadius: "8px",
              overflow: "hidden",
              border: `1px solid ${c.cardBorder}`,
              transition: "all 0.3s",
            }}
          >
            <img
              src={me}
              style={{
                width: "100%",
                height: "100%",
              }}
              alt="Katherine Arroyo"
            />
          </div>
          {/* Bio Text */}
          <div
            style={{
              fontSize: "clamp(15px, 1.6vw, 20px)",
              lineHeight: "1.5",
              color: c.text,
              transition: "color 0.3s",
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              My name is Katherine Arroyo and I'm an aspiring product designer
              with a background in computer science and design. I will be
              graduating with a Bachelor of Arts in{" "}
              <em style={{ color: c.subtitle }}>
                {" "}
                Computer Science - Web Development
              </em>{" "}
              and a minor in{" "}
              <em style={{ color: c.subtitle }}>Web and New Media Design</em> at
              Southern Adventist University in May 2026.
            </p>
            <p style={{ marginBottom: "20px" }}>
              I've worked on an end-to-end product experience, building off
              early concepts and implementation, with a focus on usability,
              accessibility, and efficiency. My experience collaborating with
              developers, and contributing as one, has allowed me to translate
              ideas into practical, scalable solutions.
            </p>
            <p style={{ marginBottom: "20px" }}>
              I value clear communication, intentional design decisions, and
              understanding diverse perspectives within a team. I am
              detail-oriented and driven to create a meaningful impact,
              designing products that not only function well, but are enjoyable
              and improve how people interact with technology.
            </p>
            <p style={{ margin: 0 }}>
              Feel free to contact me via{" "}
              <a
                href="mailto:katherineannearroyo@gmail.com"
                style={{ color: c.text, textDecoration: "underline" }}
              >{" "}
                email{" "}
              </a>
              or{" "}
              <a
                href="https://linkedin.com/in/katherineannearroyo"
                style={{ color: c.text, textDecoration: "underline" }}
              >
                LinkedIn
              </a>
              !
            </p>
          </div>
        </div>
      </section>

      {/* Design Work */}
      <section style={{ marginBottom: "80px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 600,
              marginBottom: "40px",
              transition: "color 0.3s",
            }}
          >
            Here's some of my design work!
          </h2>
          <div
            style={{
              backgroundColor: c.navBg,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: `.25px solid ${c.navBorder}`,
              borderRadius: "50px",
              padding: "10px 30px",
              display: "flex",
              gap: "30px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = c.text;
              const link = e.currentTarget.querySelector('a') as HTMLElement;
              if (link) link.style.color = c.bg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = c.navBg;
              const link = e.currentTarget.querySelector('a') as HTMLElement;
              if (link) link.style.color = c.text;
            }}
        >
            <Link
              to="/design"
              style={{
                fontSize: "16px",
                color: c.text,
                textDecoration: "none",
                transition: "color 0.3s",
                cursor: 'pointer'
              }}
            >
              See More
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          <div>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                backgroundColor: c.cardBg,
                borderRadius: "8px",
                marginBottom: "16px",
                overflow: "hidden",
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={asamiMatcha}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                alt="Asami Matcha packaging"
              />
            </div>
            <p
              style={{
                fontSize: "clamp(12px, 1.6vw, 15px)",
                margin: 0,
                transition: "color 0.3s",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "20px",
              }}
            >
              ASAMI Matcha Brand Packaging
            </p>
          </div>

          <div>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                backgroundColor: c.cardBg,
                borderRadius: "8px",
                marginBottom: "16px",
                overflow: "hidden",
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={typefaceCards}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                alt="Typeface cardset"
              />
            </div>
            <p
              style={{
                fontSize: "clamp(12px, 1.6vw, 15px)",
                margin: 0,
                transition: "color 0.3s",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "20px",
              }}
            >
              Typeface Cardset
            </p>
          </div>
          <div>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                backgroundColor: c.cardBg,
                borderRadius: "8px",
                marginBottom: "16px",
                overflow: "hidden",
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={typefaceBooklet}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                alt="Typeface comparison booklet"
              />
            </div>
            <p
              style={{
                fontSize: "clamp(12px, 1.6vw, 15px)",
                margin: 0,
                transition: "color 0.3s",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "20px",
              }}
            >
              Typeface Comparison Booklet
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}