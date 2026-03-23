import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Main({
  children,
  theme,
  toggleTheme,
}: LayoutProps) {
  const location = useLocation();

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
      subtitle: "#666666",
      modalBg: "#ffffff",
      modalOverlay: "rgba(0, 0, 0, 0.6)",
      progressInactive: "#ccc",
      sectionBg: "#f9f9f9",
      metricBg: "#f0f0f0",
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
      subtitle: "#b8b8b8",
      modalBg: "#2a2a2a",
      modalOverlay: "rgba(0, 0, 0, 0.8)",
      progressInactive: "#666",
      sectionBg: "#1a1a1a",
      metricBg: "#1a1a1a",
    },
  };

  const c = colors[theme];

  // Update body background
  useEffect(() => {
    document.body.style.backgroundColor = c.bg;
    document.body.style.transition = "background-color 0.3s";
  }, [theme, c.bg]);

  // Update document title based on route
  useEffect(() => {
    const titles: { [key: string]: string } = {
      "/": "Katherine Arroyo | Portfolio",
      "/about": "About | Katherine Arroyo",
      "/design": "Design | Katherine Arroyo",
    };

    document.title = titles[location.pathname] || "Katherine Arroyo";
  }, [location]);

  // update favicon
  useEffect(() => {
    const favicon = document.querySelector(
      "link[rel='icon']",
    ) as HTMLLinkElement;

    if (!favicon) {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href =
        theme === "dark" ? "/favicon_dark.png" : "/favicon_light.png";
      document.head.appendChild(newFavicon);
    } else {
      favicon.href =
        theme === "dark" ? "/favicon_dark.png" : "/favicon_light.png";
    }
  }, [theme]);

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
        {/* Nav bar */}
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
            <Link
              to="/"
              style={{
                fontSize: "16px",
                color: c.text,
                textDecoration: "none",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
            >
              work
            </Link>
            <Link
              to="/about"
              style={{
                fontSize: "16px",
                color: c.text,
                textDecoration: "none",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
            >
              about
            </Link>
            <Link
              to="/design"
              style={{
                fontSize: "16px",
                color: c.text,
                textDecoration: "none",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
            >
              design
            </Link>
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

        {/* Page content */}
        {children}
      </main>
    </>
  );
}
