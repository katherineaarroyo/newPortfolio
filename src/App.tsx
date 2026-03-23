import "./App.css";
import About from "./About";
import Design from "./Design";

import profilePicLight from "./assets/work/profile_light.png";
import profilePicDark from "./assets/work/profile_dark.png";
import screens from "./assets/work/4screens.png";
import iterationOne from "./assets/work/iterations/iterationOne/Iteration1_4Screens.png";
import iterationThree from "./assets/work/iterations/iterationThree/Iteration3_2Screens.png";
import iterationFinal from "./assets/work/iterations/iterationFinal/iterationFinal_MapView.png";
// import deleteAcctGif from './assets/iterations/iterationFinal/IterationFinal_DeleteAccount.gif';

import { useState, useEffect } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [currentPage, setCurrentPage] = useState<"work" | "about" | "design">(
    "work",
  );
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  // favicon color mode
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    
    if (!favicon) {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = theme === 'dark' ? '/favicon_dark.png' : '/favicon_light.png';
      document.head.appendChild(newFavicon);
    } else {
      favicon.href = theme === 'dark' ? '/favicon_dark.png' : '/favicon_light.png';
    }
  }, [theme]);

  // device color mode preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const colors = {
    light: {
      bg: "#f5f5f5",
      intro: "#472e10",
      text: "#1a1a1a",
      cardBg: "#ffffff",
      cardBorder: "rgba(0, 0, 0, 0.1)",
      tagBg: "#36291E",
      tagText: "#FBF3E4",
      navBg: "rgba(255, 255, 255, 0.8)",
      navBorder: "rgba(0, 0, 0, 0.1)",
      subtitle: "#808368",
      modalBg: "#ffffff",
      modalOverlay: "rgba(0, 0, 0, 0.6)",
      progressInactive: "#ccc",
      sectionBg: "#f9f9f9",
      metricBg: "#f0f0f0",
    },
    dark: {
      bg: "#1a1a1a",
      intro: "#ffffff",
      text: "#ffffff",
      cardBg: "#2a2a2a",
      cardBorder: "rgba(255, 255, 255, 0.3)",
      tagBg: "#FBF3E4",
      tagText: "#36291E",
      navBg: "rgba(58, 58, 58, 0.8)",
      navBorder: "rgba(255, 255, 255, 0.3)",
      subtitle: "#c6caa0",
      modalBg: "#2a2a2a",
      modalOverlay: "rgba(0, 0, 0, 0.8)",
      progressInactive: "#666",
      sectionBg: "#1a1a1a",
      metricBg: "#1a1a1a",
    },
  };

  const c = colors[theme];

  useEffect(() => {
    document.body.style.backgroundColor = c.bg;
    document.body.style.transition = "background-color 0.3s";
  }, [theme, c.bg]);

  useEffect(() => {
    const titles = {
      work: 'Katherine Arroyo',
      about: 'About | Katherine Arroyo',
      design: 'Design | Katherine Arroyo'
    };
    
    document.title = titles[currentPage] || 'Katherine Arroyo';
  }, [currentPage]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleScroll = (e: Event) => {
      const sections = [
        "overview",
        "problems",
        "research",
        "iterations",
        "impact",
      ];
      const scrollContainer = e.target as HTMLElement;

      // Check if scrolled to bottom
      const isAtBottom =
        scrollContainer.scrollHeight - scrollContainer.scrollTop <=
        scrollContainer.clientHeight + 10;

      if (isAtBottom) {
        setActiveSection("impact");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const containerRect = scrollContainer.getBoundingClientRect();
          if (rect.top - containerRect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const modalContent = document.querySelector(".modal-scroll-container");
    modalContent?.addEventListener("scroll", handleScroll);

    return () => modalContent?.removeEventListener("scroll", handleScroll);
  }, [isModalOpen]);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column !important;
          }
          .hero-text {
            text-align: center !important;
          }
        }
        
        @media (max-width: 900px) {
          .work-card {
            flex-direction: column !important;
          }
          .work-content {
            text-align: center !important;
            align-items: center !important;
          }
          .work-image {
            max-width: 100% !important;
          }
          .tag-container {
            justify-content: center !important;
          }
        }
      `}</style>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          backgroundColor: c.bg,
          color: c.text,
          minHeight: "100vh",
          padding: "40px 0",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        {/* nav bar */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "60px",
            width: "100%",
            maxWidth: "1400px",
            padding: "0 40px",
          }}
        >
          <div
            style={{
              backgroundColor: c.navBg,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: `.25px solid ${c.navBorder}`,
              borderRadius: "50px",
              padding: "12px 30px",
              display: "flex",
              gap: "30px",
              transition: "all 0.3s",
            }}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("work");
              }}
              href="#work"
              style={{
                fontSize: "16px",
                color: c.text,
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              work
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("about");
              }}
              href="#about"
              style={{
                fontSize: "16px",
                color: c.text,
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              about
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("design");
              }}
              href="#design"
              style={{
                fontSize: "16px",
                color: c.text,
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              design
            </a>
          </div>
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: c.navBg,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: `.25px solid ${c.navBorder}`,
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                transition: "transform 0.3s",
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </div>
          </button>
        </nav>

        {/* Home Page */}
        {currentPage === "work" && (
          <>
            {/* intro */}
            <div
              className="hero-section"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "60px",
                marginBottom: "80px",
                maxWidth: "1400px",
                padding: "0 40px",
              }}
            >
              <img
                src={theme === "dark" ? profilePicLight : profilePicDark}
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  minWidth: "300px",
                  height: "auto",
                  objectFit: "contain",
                  flexShrink: 0,
                }}
                alt="Profile illustration"
              />
              <div
                className="hero-text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  maxWidth: "fit-content",
                  paddingTop: "20px",
                }}
              >
                <h1
                  style={{
                    fontSize: "clamp(40px, 5vw, 64px)",
                    color: c.intro,
                    fontWeight: 600,
                    margin: 0,
                    padding: 0,
                    lineHeight: "1.1",
                    marginBottom: "8px",
                    transition: "color 0.3s",
                  }}
                >
                  hello there!
                </h1>
                <h1
                  style={{
                    fontSize: "clamp(40px, 5vw, 64px)",
                    color: c.intro,
                    fontWeight: 600,
                    margin: 0,
                    padding: 0,
                    lineHeight: "1.1",
                    marginBottom: "24px",
                    transition: "color 0.3s",
                  }}
                >
                  i'm katherine arroyo.
                </h1>
                <h3
                  style={{
                    fontSize: "clamp(24px, 3vw, 40px)",
                    fontWeight: 400,
                    color: c.subtitle,
                    margin: 0,
                    fontStyle: "italic",
                    lineHeight: "1.3",
                    transition: "color 0.3s",
                  }}
                >
                  bridging{" "}
                  <em style={{ fontStyle: "italic" }}>product design</em> and
                  <br />
                  <em style={{ fontStyle: "italic" }}>front-end development</em>
                </h3>
              </div>
            </div>

            {/* portfolio works */}
            <div
              style={{
                width: "100%",
                maxWidth: "1400px",
                padding: "0 40px",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(36px, 5vw, 45px)",
                  fontWeight: 600,
                  textAlign: "center",
                  margin: "0 0 20px",
                  transition: "color 0.3s",
                }}
              >
                Selected Works
              </h2>
              <div
                className="work-card"
                style={{
                  backgroundColor: c.cardBg,
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: `.25px solid ${c.cardBorder}`,
                  borderRadius: "24px",
                  padding: "50px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "50px",
                  alignItems: "center",
                  marginBottom: "100px",
                  cursor: "pointer",
                  transition:
                    "transform 0.2s, box-shadow 0.2s, background-color 0.3s",
                }}
                onClick={() => setIsModalOpen(true)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 40px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 30px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src={screens}
                  className="work-image"
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    minWidth: "300px",
                    height: "auto",
                    flexShrink: 0,
                  }}
                  alt="Sorora app screens"
                />
                <div
                  className="work-content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    flex: 1,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      textTransform: "uppercase",
                      color: c.subtitle,
                      letterSpacing: "1.5px",
                      marginBottom: "12px",
                      transition: "color 0.3s",
                    }}
                  >
                    REDESIGN
                  </div>
                  <h4
                    style={{
                      margin: 0,
                      padding: 0,
                      fontSize: "clamp(36px, 5vw, 50px)",
                      fontWeight: 600,
                      marginBottom: "20px",
                      transition: "color 0.3s",
                    }}
                  >
                    Sorora
                  </h4>
                  <div
                    style={{
                      backgroundColor: c.navBg,
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      border: `.25px solid ${c.cardBorder}`,
                      borderRadius: "50px",
                      padding: "10px 24px",
                      display: "inline-block",
                      width: "fit-content",
                      marginBottom: "30px",
                      transition: "all 0.3s",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        margin: 0,
                        color: c.text,
                        transition: "color 0.3s",
                      }}
                    >
                      Case Study
                    </p>
                  </div>
                  <div
                    className="tag-container"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "12px",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: c.tagBg,
                        color: c.tagText,
                        borderRadius: "30px",
                        padding: "12px 24px",
                        transition: "all 0.3s",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          margin: 0,
                        }}
                      >
                        Accessibility
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: c.tagBg,
                        color: c.tagText,
                        borderRadius: "30px",
                        padding: "12px 24px",
                        transition: "all 0.3s",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          margin: 0,
                        }}
                      >
                        Error Prevention
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: c.tagBg,
                        color: c.tagText,
                        borderRadius: "30px",
                        padding: "12px 24px",
                        transition: "all 0.3s",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          margin: 0,
                        }}
                      >
                        Freedom & Control
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* footer */}
            <div
              style={{
                width: "100%",
                maxWidth: "1400px",
                padding: "0 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 36px)",
                  fontWeight: 600,
                  margin: 0,
                  transition: "color 0.3s",
                }}
              >
                Let's get in touch.
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                }}
              >
                {/* Placeholder for signature/logo */}
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: c.modalOverlay,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1000,
                  padding: "20px",
                  transition: "background-color 0.3s",
                }}
                onClick={() => setIsModalOpen(false)}
              >
                <div
                  className="modal-scroll-container"
                  style={{
                    backgroundColor: c.modalBg,
                    borderRadius: "24px",
                    maxWidth: "1400px",
                    display: "flex",
                    gap: "40px",
                    width: "100%",
                    maxHeight: "90vh",
                    overflow: "auto",
                    position: "relative",
                    padding: "clamp(30px, 5vw, 60px) clamp(25px, 4vw, 50px)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                    transition: "background-color 0.3s",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      backgroundColor: c.navBg,
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      color: c.text,
                      fontSize: "24px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.7")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    ×
                  </button>

                  {/* Progress Bar */}
                  <div
                    style={{
                      position: "sticky",
                      top: "60px",
                      width: "200px",
                      flexShrink: 0,
                      display: window.innerWidth < 900 ? "none" : "block",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                      }}
                    >
                      {[
                        { id: "overview", label: "Overview" },
                        { id: "problems", label: "The Problems" },
                        { id: "research", label: "Competitor Research" },
                        { id: "iterations", label: "Design Iterations" },
                        { id: "impact", label: "Impact" },
                      ].map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById(section.id)
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          style={{
                            fontSize: "14px",
                            color:
                              activeSection === section.id
                                ? c.text
                                : c.progressInactive,
                            borderLeft:
                              activeSection === section.id
                                ? `3px solid ${c.text}`
                                : `3px solid ${c.progressInactive}`,
                            textDecoration: "none",
                            paddingLeft: "16px",
                            transition: "all 0.3s",
                            cursor: "pointer",
                            fontWeight:
                              activeSection === section.id ? 600 : 400,
                          }}
                          onMouseEnter={(e) => {
                            if (activeSection !== section.id) {
                              e.currentTarget.style.color = c.subtitle;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (activeSection !== section.id) {
                              e.currentTarget.style.color = c.progressInactive;
                            }
                          }}
                        >
                          {section.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Modal content */}
                  <div
                    style={{ color: c.text, flex: 1, transition: "color 0.3s" }}
                  >
                    <div
                      style={{
                        fontSize: "12px",
                        textTransform: "uppercase",
                        color: c.subtitle,
                        letterSpacing: "1.5px",
                        marginBottom: "12px",
                        transition: "color 0.3s",
                      }}
                    >
                      CASE STUDY
                    </div>

                    <h2
                      style={{
                        fontSize: "clamp(32px, 5vw, 48px)",
                        fontWeight: 600,
                        margin: "0 0 16px 0",
                        transition: "color 0.3s",
                      }}
                    >
                      Keep Her Safe — UX/UI Redesign
                    </h2>

                    <p
                      style={{
                        fontSize: "clamp(14px, 1.6vw, 16px)",
                        color: c.subtitle,
                        transition: "color 0.3s",
                        marginBottom: "40px",
                        lineHeight: "1.5",
                      }}
                    >
                      Redesigning a personal safety app to be faster, more
                      accessible, and usable in high-stress situations.
                    </p>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "16px",
                        marginBottom: "40px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: c.sectionBg,
                          padding: "20px",
                          borderRadius: "12px",
                          transition: "background-color 0.3s",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            color: c.subtitle,
                            marginBottom: "8px",
                            textTransform: "uppercase",
                            transition: "color 0.3s",
                          }}
                        >
                          Company
                        </div>
                        <div
                          style={{ fontSize: "16px", transition: "color 0.3s" }}
                        >
                          Sorora
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: c.sectionBg,
                          padding: "20px",
                          borderRadius: "12px",
                          transition: "background-color 0.3s",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            color: c.subtitle,
                            marginBottom: "8px",
                            textTransform: "uppercase",
                            transition: "color 0.3s",
                          }}
                        >
                          My Role
                        </div>
                        <div
                          style={{ fontSize: "16px", transition: "color 0.3s" }}
                        >
                          Designer & Developer
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: c.sectionBg,
                          padding: "20px",
                          borderRadius: "12px",
                          transition: "background-color 0.3s",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            color: c.subtitle,
                            marginBottom: "8px",
                            textTransform: "uppercase",
                            transition: "color 0.3s",
                          }}
                        >
                          Context
                        </div>
                        <div
                          style={{ fontSize: "16px", transition: "color 0.3s" }}
                        >
                          Senior Project
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#FBF3E4",
                          color: "#36291E",
                          padding: "20px",
                          borderRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#36291E",
                            marginBottom: "8px",
                            textTransform: "uppercase",
                          }}
                        >
                          Read Time
                        </div>
                        <div style={{ fontSize: "16px" }}>5 minutes</div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "12px",
                        marginBottom: "40px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#FBF3E4",
                          color: "#36291E",
                          borderRadius: "30px",
                          padding: "10px 20px",
                          fontSize: "13px",
                        }}
                      >
                        UX Research
                      </div>
                      <div
                        style={{
                          backgroundColor: "#FBF3E4",
                          color: "#36291E",
                          borderRadius: "30px",
                          padding: "10px 20px",
                          fontSize: "13px",
                        }}
                      >
                        UI Design
                      </div>
                      <div
                        style={{
                          backgroundColor: "#FBF3E4",
                          color: "#36291E",
                          borderRadius: "30px",
                          padding: "10px 20px",
                          fontSize: "13px",
                        }}
                      >
                        Accessibility
                      </div>
                      <div
                        style={{
                          backgroundColor: "#FBF3E4",
                          color: "#36291E",
                          borderRadius: "30px",
                          padding: "10px 20px",
                          fontSize: "13px",
                        }}
                      >
                        Mobile Cross-Platform
                      </div>
                      <div
                        style={{
                          backgroundColor: "#FBF3E4",
                          color: "#36291E",
                          borderRadius: "30px",
                          padding: "10px 20px",
                          fontSize: "13px",
                        }}
                      >
                        Prototyping
                      </div>
                      <div
                        style={{
                          backgroundColor: "#FBF3E4",
                          color: "#36291E",
                          borderRadius: "30px",
                          padding: "10px 20px",
                          fontSize: "13px",
                        }}
                      >
                        Front-End Development
                      </div>
                    </div>

                    <img
                      src={screens}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                        marginBottom: "50px",
                      }}
                      alt="Sorora app screens"
                    />

                    <div
                      style={{
                        fontSize: "clamp(16px, 1.8vw, 18px)",
                        lineHeight: "1.6",
                        color: c.text,
                        transition: "color 0.3s",
                      }}
                    >
                      <h3
                        id="overview"
                        style={{
                          fontSize: "clamp(24px, 3vw, 32px)",
                          marginTop: "0",
                          marginBottom: "20px",
                          fontWeight: 600,
                          transition: "color 0.3s",
                        }}
                      >
                        Overview
                      </h3>
                      <p style={{ marginBottom: "16px" }}>
                        Keep Her Safe is a mobile safety app by Sorora that lets
                        users instantly alert trusted contacts — and emergency
                        services — if needed.
                      </p>
                      <p style={{ marginBottom: "16px" }}>
                        A business team had built an MVP with live location
                        tracking and a contact list. Our senior project team was
                        brought in to:
                      </p>
                      <ul style={{ marginLeft: "20px", marginBottom: "30px" }}>
                        <li style={{ marginBottom: "8px" }}>
                          Implement missing core functionality
                        </li>
                        <li style={{ marginBottom: "8px" }}>
                          Redesign the UI for usability and accessibility
                        </li>
                        <li style={{ marginBottom: "8px" }}>
                          Establish a development workflow to support long-term
                          growth
                        </li>
                      </ul>
                      <p style={{ marginBottom: "40px" }}>
                        As both a designer and developer, I worked across the
                        full product lifecycle — from identifying problems to
                        shipping the redesign.
                      </p>

                      <h3
                        id="problems"
                        style={{
                          fontSize: "clamp(24px, 3vw, 32px)",
                          marginTop: "50px",
                          marginBottom: "20px",
                          fontWeight: 600,
                          transition: "color 0.3s",
                        }}
                      >
                        The problems
                      </h3>
                      <p style={{ marginBottom: "24px" }}>
                        We evaluated the MVP against Jakob Nielsen's Usability
                        Heuristics and found three critical issues:
                      </p>

                      <div
                        style={{
                          backgroundColor: "#FBF3E4",
                          padding: "24px",
                          borderRadius: "12px",
                          marginBottom: "20px",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "clamp(18px, 2vw, 20px)",
                            marginTop: "0",
                            marginBottom: "16px",
                            fontWeight: 600,
                            color: "#36291E",
                          }}
                        >
                          No user control or wayfinding
                        </h4>
                        <ul
                          style={{
                            marginLeft: "20px",
                            marginBottom: 0,
                            color: "#36291E",
                          }}
                        >
                          <li style={{ marginBottom: "8px" }}>
                            No visual indicators showing the user's current
                            location in the app
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            Navigation relied entirely on a back button — no
                            save or exit options
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            Violated "Recognition over Recall" by forcing users
                            to mentally track their own flow
                          </li>
                        </ul>
                      </div>

                      <div
                        style={{
                          backgroundColor: "#FBF3E4",
                          padding: "24px",
                          borderRadius: "12px",
                          marginBottom: "20px",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "clamp(18px, 2vw, 20px)",
                            marginTop: "0",
                            marginBottom: "16px",
                            fontWeight: 600,
                            color: "#36291E",
                          }}
                        >
                          Accidental SOS triggers
                        </h4>
                        <ul
                          style={{
                            marginLeft: "20px",
                            marginBottom: 0,
                            color: "#36291E",
                          }}
                        >
                          <li style={{ marginBottom: "8px" }}>
                            Emergency button could be activated too easily,
                            risking accidental contact with law enforcement
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            Multi-step flows increased cognitive load in urgent
                            situations
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            No confirmation or error prevention in place
                          </li>
                        </ul>
                      </div>

                      <div
                        style={{
                          backgroundColor: "#FBF3E4",
                          padding: "24px",
                          borderRadius: "12px",
                          marginBottom: "30px",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "clamp(18px, 2vw, 20px)",
                            marginTop: "0",
                            marginBottom: "16px",
                            fontWeight: 600,
                            color: "#36291E",
                          }}
                        >
                          Visual overload, no hierarchy
                        </h4>
                        <ul
                          style={{
                            marginLeft: "20px",
                            marginBottom: 0,
                            color: "#36291E",
                          }}
                        >
                          <li style={{ marginBottom: "8px" }}>
                            No clear visual hierarchy — hard to identify the
                            app's primary purpose at a glance
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            Interactive and static elements looked the same
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            Settings were fragmented across too many screens
                            with minimal content per page
                          </li>
                        </ul>
                      </div>

                      <h3
                        id="research"
                        style={{
                          fontSize: "clamp(24px, 3vw, 32px)",
                          marginTop: "50px",
                          marginBottom: "20px",
                          fontWeight: 600,
                          transition: "color 0.3s",
                        }}
                      >
                        Competitor research
                      </h3>
                      <p style={{ marginBottom: "16px" }}>
                        Before designing, we looked at how others solved similar
                        problems:
                      </p>
                      <ul style={{ marginLeft: "20px", marginBottom: "40px" }}>
                        <li style={{ marginBottom: "8px" }}>
                          <strong>Life360</strong> — Referenced their navigation
                          bar pattern for clear wayfinding
                        </li>
                        <li style={{ marginBottom: "8px" }}>
                          <strong>Noonlight</strong> — Their patented deadlock
                          SOS feature (requiring sustained, deliberate
                          interaction) directly informed our error prevention
                          approach
                        </li>
                      </ul>

                      <h3
                        id="iterations"
                        style={{
                          fontSize: "clamp(24px, 3vw, 32px)",
                          marginTop: "50px",
                          marginBottom: "20px",
                          fontWeight: 600,
                          transition: "color 0.3s",
                        }}
                      >
                        Design iterations
                      </h3>

                      <div style={{ marginBottom: "10px" }}>
                        <h4
                          style={{
                            fontSize: "clamp(18px, 2vw, 20px)",
                            marginBottom: "12px",
                            fontWeight: 600,
                            transition: "color 0.3s",
                          }}
                        >
                          Iteration 1
                        </h4>
                        <ol style={{ marginLeft: "20px" }}>
                          <li style={{ marginBottom: "8px" }}>
                            Introduced a map-centric home page
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            Established a pink color scheme
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            Defined the key action pages
                          </li>
                        </ol>

                        <img
                          src={iterationOne}
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "12px",
                            marginBottom: "5px",
                          }}
                          alt="Sorora app design iteration one"
                        />
                      </div>

                      <div style={{ marginBottom: "10px" }}>
                        <h4
                          style={{
                            fontSize: "clamp(18px, 2vw, 20px)",
                            marginBottom: "12px",
                            fontWeight: 600,
                            transition: "color 0.3s",
                          }}
                        >
                          Iteration 2
                        </h4>
                        <ol style={{ marginLeft: "20px" }}>
                          <li style={{ marginBottom: "8px" }}>
                            Doubled down on the pink color scheme
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            Increased touch target and font sizes for better
                            ergonomics
                          </li>
                        </ol>
                      </div>

                      <div style={{ marginBottom: "30px" }}>
                        <h4
                          style={{
                            fontSize: "clamp(18px, 2vw, 20px)",
                            marginBottom: "12px",
                            fontWeight: 600,
                            transition: "color 0.3s",
                          }}
                        >
                          Iteration 3
                        </h4>
                        <ol style={{ marginLeft: "20px" }}>
                          <li style={{ marginBottom: "8px" }}>
                            Replaced pink palette after it failed WCAG contrast
                            standards
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            Swapped column layout for a scrollable layout on
                            contact/profile editing
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            Added confirmation alerts for SOS and edit actions
                            to prevent errors
                          </li>
                        </ol>

                        <img
                          src={iterationThree}
                          style={{
                            width: "50%",
                            height: "auto",
                            borderRadius: "12px",
                            marginBottom: "10px",
                          }}
                          alt="Sorora app design iteration three"
                        />
                      </div>

                      <div style={{ marginBottom: "40px" }}>
                        <h4
                          style={{
                            fontSize: "clamp(18px, 2vw, 20px)",
                            marginBottom: "12px",
                            fontWeight: 600,
                            transition: "color 0.3s",
                          }}
                        >
                          Final
                        </h4>
                        <ol style={{ marginLeft: "20px" }}>
                          <li style={{ marginBottom: "8px" }}>
                            Dropped Life360-style map view selector in favor of
                            a cleaner button approach
                          </li>
                          <li style={{ marginBottom: "8px" }}>
                            Added safeguards to the delete account flow
                          </li>
                        </ol>

                        <img
                          src={iterationFinal}
                          style={{
                            width: "50%",
                            height: "auto",
                            borderRadius: "12px",
                            marginBottom: "10px",
                          }}
                          alt="Sorora app final design"
                        />
                        {/* <img src={deleteAcctGif} style={{ 
                        width: '50%',
                        height: 'auto',
                        borderRadius: '12px',
                        marginBottom: '50px',
                      }} alt="Sorora app design iteration three" /> */}
                      </div>

                      <h3
                        id="impact"
                        style={{
                          fontSize: "clamp(24px, 3vw, 32px)",
                          marginTop: "50px",
                          marginBottom: "20px",
                          fontWeight: 600,
                          transition: "color 0.3s",
                        }}
                      >
                        Impact
                      </h3>
                      <p style={{ marginBottom: "30px" }}>
                        The redesign produced measurable gains across
                        accessibility, ergonomics, and user performance:
                      </p>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "20px",
                          marginBottom: "30px",
                          paddingBottom: "50px",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: c.sectionBg,
                            padding: "30px",
                            borderRadius: "12px",
                            transition: "background-color 0.3s",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "clamp(36px, 5vw, 48px)",
                              fontWeight: 700,
                              marginBottom: "12px",
                              color: "#4ade80",
                            }}
                          >
                            5.41:1
                          </div>
                          <div
                            style={{
                              fontSize: "14px",
                              color: c.text,
                              transition: "color 0.3s",
                            }}
                          >
                            Avg. color contrast — up from 3.31:1 to meet WCAG AA
                            minimums
                          </div>
                        </div>
                        <div
                          style={{
                            backgroundColor: c.sectionBg,
                            padding: "30px",
                            borderRadius: "12px",
                            transition: "background-color 0.3s",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "clamp(36px, 5vw, 48px)",
                              fontWeight: 700,
                              marginBottom: "12px",
                              color: "#4ade80",
                            }}
                          >
                            48px
                          </div>
                          <div
                            style={{
                              fontSize: "14px",
                              color: c.text,
                              transition: "color 0.3s",
                            }}
                          >
                            Avg. touch target size — up from 40.5px minimum
                          </div>
                        </div>
                        <div
                          style={{
                            backgroundColor: c.sectionBg,
                            padding: "30px",
                            borderRadius: "12px",
                            transition: "background-color 0.3s",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "clamp(36px, 5vw, 48px)",
                              fontWeight: 700,
                              marginBottom: "12px",
                              color: "#4ade80",
                            }}
                          >
                            −70%
                          </div>
                          <div
                            style={{
                              fontSize: "14px",
                              color: c.text,
                              transition: "color 0.3s",
                            }}
                          >
                            Task completion time — down from 2:48 to 0:51
                            average
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* About Page */}
        {currentPage === "about" && (
          <About 
            theme={theme}
            setCurrentPage={setCurrentPage}
          />
        )}

        {/* Design Page */}
        {currentPage === "design" && (
          <Design 
            theme={theme}
          />
        )}
      </main>
    </>
  );
}
