import './App.css'
import profilePic from './assets/profile.png';
import screens from './assets/4screens.png'

export default function App() {
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
      
      <main style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%',
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        minHeight: '100vh',
        padding: '40px 0'
      }}>
        {/* nav bar */}
        <nav style={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '60px',
          width: '100%',
          maxWidth: '1400px',
          padding: '0 40px'
        }}>
          <div style={{
            backgroundColor: '#3a3a3a',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '.25px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50px',
            padding: '12px 30px',
            display: 'flex',
            gap: '30px'
          }}>
            <a href='#about' style={{ 
              fontSize: '16px',
              color: '#ffffff',
              textDecoration: 'none'
            }}>about</a>
            <a href='#contact' style={{ 
              fontSize: '16px',
              color: '#ffffff',
              textDecoration: 'none'
            }}>contact</a>
          </div>
          <div style={{
            backgroundColor: '#3a3a3a',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '.25px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'linear-gradient(to right, #ffffff 50%, #1a1a1a 50%)'
            }}></div>
          </div>
        </nav>

        {/* intro */}
        <div className="hero-section" style={{ 
          display: 'flex', 
          flexDirection: 'row',
          alignItems: 'center',
          gap: '60px',
          marginBottom: '80px',
          maxWidth: '1400px',
          padding: '0 40px'
        }}>
          <img src={profilePic} style={{ 
            width: '100%',
            maxWidth: '450px',
            minWidth: '300px',
            height: 'auto',
            objectFit: 'contain',
            flexShrink: 0
          }} alt="Profile illustration" />
          <div className="hero-text" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            textAlign: 'left',
            maxWidth: 'fit-content',
            paddingTop: '20px'
          }}>
            <h1 style={{ 
              fontSize: 'clamp(40px, 5vw, 64px)', 
              fontWeight: 600, 
              margin: 0, 
              padding: 0,
              lineHeight: '1.1',
              marginBottom: '8px'
            }}>hello there!</h1>
            <h1 style={{ 
              fontSize: 'clamp(40px, 5vw, 64px)', 
              fontWeight: 600, 
              margin: 0, 
              padding: 0,
              lineHeight: '1.1',
              marginBottom: '24px'
            }}>i'm katherine arroyo.</h1>
            <h3 style={{ 
              fontSize: 'clamp(24px, 3vw, 40px)', 
              fontWeight: 400, 
              color: '#b8b8b8',
              margin: 0,
              fontStyle: 'italic',
              lineHeight: '1.3'
            }}>
              bridging <em style={{ fontStyle: 'italic' }}>product design</em> and<br/>
              <em style={{ fontStyle: 'italic' }}>front-end development</em>
            </h3>
          </div>
        </div>

        {/* portfolio works */}
        <div style={{ 
          width: '100%', 
          maxWidth: '1400px',
          padding: '0 40px'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(36px, 5vw, 45px)', 
            fontWeight: 600,
            textAlign: 'center',
            margin: '0 0 20px'
          }}>Selected Works</h2>
          <div className="work-card" style={{ 
            backgroundColor: '#2a2a2a',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '.25px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '24px',
            padding: '50px',
            display: 'flex',
            flexDirection: 'row',
            gap: '50px',
            alignItems: 'center',
            marginBottom: '100px'
          }}>
            <img src={screens} className="work-image" style={{ 
              width: '100%',
              maxWidth: '500px',
              minWidth: '300px',
              height: 'auto',
              flexShrink: 0
            }} alt="Sorora app screens" />
            <div className="work-content" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              textAlign: 'left',
              flex: 1,
              alignItems: 'flex-start'
            }}>
              <div style={{ 
                fontSize: '14px',
                textTransform: 'uppercase',
                color: '#b8b8b8',
                letterSpacing: '1.5px',
                marginBottom: '12px'
              }}>REDESIGN</div>
              <h4 style={{ 
                margin: 0,
                padding: 0,
                fontSize: 'clamp(36px, 5vw, 50px)',
                fontWeight: 600,
                marginBottom: '20px'
              }}>Sorora</h4>
              <div style={{
                backgroundColor: '#3a3a3a',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',
                border: '.25px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                padding: '10px 24px',
                display: 'inline-block',
                width: 'fit-content',
                marginBottom: '30px'
              }}>
                <p style={{ 
                  fontSize: '14px',
                  margin: 0,
                  color: '#ffffff'
                }}>Case Study</p>
              </div>
              <div className="tag-container" style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'flex-start'
              }}>
                <div style={{ 
                  backgroundColor: '#FBF3E4',
                  color: '#36291E',
                  borderRadius: '30px',
                  padding: '12px 24px'
                }}>
                  <p style={{ 
                    fontSize: '14px',
                    margin: 0
                  }}>Accessibility</p>
                </div>
                <div style={{ 
                  backgroundColor: '#FBF3E4',
                  color: '#36291E',
                  borderRadius: '30px',
                  padding: '12px 24px'
                }}>
                  <p style={{ 
                    fontSize: '14px',
                    margin: 0
                  }}>Error Prevention</p>
                </div>
                <div style={{ 
                  backgroundColor: '#FBF3E4',
                  color: '#36291E',
                  borderRadius: '30px',
                  padding: '12px 24px'
                }}>
                  <p style={{ 
                    fontSize: '14px',
                    margin: 0
                  }}>Freedom & Control</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div style={{
          width: '100%',
          maxWidth: '1400px',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 600,
            margin: 0
          }}>Let's get in touch.</h2>
          <div style={{
            width: '60px',
            height: '60px'
          }}>
            {/* Placeholder for signature/logo */}
          </div>
        </div>
      </main>
    </>
  )
}