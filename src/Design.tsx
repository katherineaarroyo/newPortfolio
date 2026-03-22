import typefaceCards from "./assets/design/typefaceCards.png";
import typefaceBooklet from "./assets/design/typefaceBooklet.png";
import asamiMatcha from "./assets/design/asamiMatcha.png";

interface DesignProps {
  theme: "light" | "dark";
  setCurrentPage: (page: "work" | "about" | "design") => void;
}

export default function Design({ theme, setCurrentPage }: DesignProps) {
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
          DESIGN PROJECTS
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 4vw, 45px)",
            fontWeight: 600,
            lineHeight: "1.3",
            margin: "0 0 50px 0",
            maxWidth: "800px",
            transition: "color 0.3s",
          }}
        >
          My typography and layout-focused design projects.
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Asami Matcha Card */}
          <div
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "10px",
              marginBottom: '15px'
            }}
          >
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
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(12px, 1.6vw, 18px)",
                  transition: "color 0.3s",
                  letterSpacing: "2px",
                  margin: 0,
                }}
              >
                Asami Matcha Brand Packaging
              </p>

              <a
                href="/asamiMatcha.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "16px",
                  color: c.text,
                  textDecoration: "underline",
                  transition: "color 0.3s",
                  cursor: "pointer",
                }}
              >
                View Full PDF
              </a>
            </div>
            <p style={{
              fontSize: "clamp(12px, 1.6vw, 14px)",
              color: c.text,
              margin: 0
            }}>
              Tin and box brand packaging for a hypothetical matcha brand. Made in Adobe Illustrator.
            </p>
          </div>

          {/* Typeface Cardset */}
          <div 
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "10px",
              marginBottom: '15px'
            }}
          >
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
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(12px, 1.6vw, 18px)",
                  transition: "color 0.3s",
                  letterSpacing: "1px",
                  margin: 0,
                }}
              >
                Typeface Cardset
              </p>
              <a
                href="/typefaceCards.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "16px",
                  color: c.text,
                  textDecoration: "underline",
                  transition: "color 0.3s",
                  cursor: "pointer",
                }}
              >
                View Full PDF
              </a>
            </div>
            <p style={{
              fontSize: "clamp(13px, 1.6vw, 15px)",
              color: c.text,
              margin: 0
            }}>
              A typographic cardset featuring fonts from select typeface variations, styles and sub-categories. Made in Adobe InDesign.
            </p>
          </div>

          {/* Typeface Comp Booklet */}
          <div
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "10px" 
            }}
          >
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
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(12px, 1.6vw, 18px)",
                  transition: "color 0.3s",
                  letterSpacing: "2px",
                  margin: 0,
                }}
              >
                Typeface Comparison Booklet
              </p>
                <a
                  href="/typefaceBooklet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "16px",
                    color: c.text,
                    textDecoration: "underline",
                    transition: "color 0.3s",
                    cursor: "pointer",
                  }}
                >
                  View Full PDF
                </a>
            </div>
            <p style={{
              fontSize: "clamp(12px, 1.6vw, 14px)",
              color: c.text,
              margin: 0
            }}>
              A detailed typographic booklet featuring the comparison between fonts Garamond and Helvetica. Made in Adobe InDesign.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
