import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import React, { useState, useRef, useEffect } from "react";

const HomeSideBarDX = () => {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(showMore ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [showMore]);

  return (
    <aside className="flex flex-col gap-2 me-2 text-sm mt-4">
      <div
        className="rounded-2 bg-white border"
        style={{ border: "#f3f2ef", padding: "12px 0px 16px" }}
      >
        <div className="space-y-1">
          {/* Header */}
          <div>
            <div
              className="d-flex justify-content-between"
              style={{ padding: "0px 8px 0px 20px" }}
            >
              <h2 className="font-semibold fs-4">LinkedIn Notizie</h2>
              <i
                className="bi bi-info-square-fill"
                style={{ fontSize: "15px", color: "black", cursor: "pointer" }}
              ></i>
            </div>
            <div style={{ padding: "0px 0px 0px 20px" }}>
              <h6 className="text-xs text-secondary pt-1 pb-1">
                Storie principali
              </h6>
            </div>
          </div>

          {/* Primo blocco sempre visibile */}
          <div>
            <a
              style={{
                cursor: "pointer",
                display: "block",
                backgroundColor: "white",
                textDecoration: "none",
                padding: "0px 0px 0px 20px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <h5
                style={{
                  fontSize: "14px",
                  color: "black",
                  margin: 0,
                  padding: "4px 16px 0px 0px",
                }}
              >
                Venezia 82: racconti dal Lido
              </h5>
              <span style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                16 ore fa · 2.230 lettori
              </span>
            </a>
          </div>
          <div>
            <a
              style={{
                cursor: "pointer",
                display: "block",
                backgroundColor: "white",
                textDecoration: "none",
                padding: "0px 0px 0px 20px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <h5
                style={{
                  fontSize: "14px",
                  color: "black",
                  margin: 0,
                  padding: "4px 16px 0px 0px",
                }}
              >
                Imprese strategiche: nasce Praexidia
              </h5>
              <span style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                17 ore fa · 171 lettori
              </span>
            </a>
          </div>
          <div>
            <a
              style={{
                cursor: "pointer",
                display: "block",
                backgroundColor: "white",
                textDecoration: "none",
                padding: "0px 0px 0px 20px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <h5
                style={{
                  fontSize: "14px",
                  color: "black",
                  margin: 0,
                  padding: "4px 16px 0px 0px",
                }}
              >
                Illy punta sulle macchine da caffè
              </h5>
              <span style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                25 minuti fa
              </span>
            </a>
          </div>
          <div>
            <a
              style={{
                cursor: "pointer",
                display: "block",
                backgroundColor: "white",
                textDecoration: "none",
                padding: "0px 0px 0px 20px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <h5
                style={{
                  fontSize: "14px",
                  color: "black",
                  margin: 0,
                  padding: "4px 16px 0px 0px",
                }}
              >
                Licenziato il ceo di Nestlè
              </h5>
              <span style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                21 ore fa · 781 lettori
              </span>
            </a>
          </div>
          <div>
            <a
              style={{
                cursor: "pointer",
                display: "block",
                backgroundColor: "white",
                textDecoration: "none",
                padding: "0px 0px 0px 20px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <h5
                style={{
                  fontSize: "14px",
                  color: "black",
                  margin: 0,
                  padding: "4px 16px 0px 0px",
                }}
              >
                Leonardo Maria Del Vecchio rileva Bo...
              </h5>
              <span style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                1 giorno fa · 740 lettori
              </span>
            </a>
          </div>

          {/* Contenuto extra animato */}
          <div
            ref={contentRef}
            style={{
              height: height,
              overflow: "hidden",
              transition: "height 0.35s ease, opacity 0.35s ease",
              opacity: showMore ? 1 : 0,
            }}
          >
            <div>
              <a
                style={{
                  cursor: "pointer",
                  display: "block",
                  backgroundColor: "white",
                  textDecoration: "none",
                  padding: "0px 0px 0px 20px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <h5
                  style={{
                    fontSize: "14px",
                    color: "black",
                    margin: 0,
                    padding: "4px 16px 0px 0px",
                  }}
                >
                  Mancano operai specializzati
                </h5>
                <span style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                  1 giorno fa · 463 lettori
                </span>
              </a>
            </div>

            <div>
              <a
                style={{
                  cursor: "pointer",
                  display: "block",
                  backgroundColor: "white",
                  textDecoration: "none",
                  padding: "0px 0px 0px 20px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <h5
                  style={{
                    fontSize: "14px",
                    color: "black",
                    margin: 0,
                    padding: "4px 16px 0px 0px",
                  }}
                >
                  Mediaset conquista la tedesca Prosie...
                </h5>
                <span style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                  2 giorno fa · 404 lettori
                </span>
              </a>
            </div>
            <div>
              <a
                style={{
                  cursor: "pointer",
                  display: "block",
                  backgroundColor: "white",
                  textDecoration: "none",
                  padding: "0px 0px 0px 20px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <h5
                  style={{
                    fontSize: "14px",
                    color: "black",
                    margin: 0,
                    padding: "4px 16px 0px 0px",
                  }}
                >
                  Si (ri)parla di caro scuola
                </h5>
                <span style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                  1 giorno fa · 266 lettori
                </span>
              </a>
            </div>
            <div>
              <a
                style={{
                  cursor: "pointer",
                  display: "block",
                  backgroundColor: "white",
                  textDecoration: "none",
                  padding: "0px 0px 0px 20px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <h5
                  style={{
                    fontSize: "14px",
                    color: "black",
                    margin: 0,
                    padding: "4px 16px 0px 0px",
                  }}
                >
                  Il rilancio Mps su Mediobanca
                </h5>
                <span style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                  23 ore fa · 238 lettori
                </span>
              </a>
            </div>
            <div>
              <a
                style={{
                  cursor: "pointer",
                  display: "block",
                  backgroundColor: "white",
                  textDecoration: "none",
                  padding: "0px 0px 0px 20px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <h5
                  style={{
                    fontSize: "14px",
                    color: "black",
                    margin: 0,
                    padding: "4px 16px 0px 0px",
                  }}
                >
                  Greenpeace Italia cambia guida
                </h5>
                <span style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                  1 giorno fa · 184 lettori
                </span>
              </a>
            </div>
          </div>

          {/* Bottone toggle */}
          <button
            onClick={() => setShowMore(!showMore)}
            style={{
              fontSize: "14px",
              margin: "0px 0px 12px 12px",
              padding: "2px 8px",
              border: "0px solid #ddd",
              borderRadius: "6px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f0f0f0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
          >
            {showMore ? "Meno dettagli ▲" : "Mostra altro ▼"}
          </button>
        </div>
      </div>
      <div>
        <a>
          <img
            src="https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png"
            alt="Sponsor"
            className="img-fluid"
            style={{
              margin: "8px 0px 0px 0px",
              width: "300px",
              height: "250px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          />
        </a>
      </div>

      <footer style={{ margin: "16px 0px 0px" }}>
        <ul
          className="d-flex footer-links"
          style={{
            padding: "0px",
            listStyleType: "none",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <li style={{ fontSize: "12px", margin: "4px 8px", color: "gray" }}>
            <a href="#">Informazioni</a>
          </li>
          <li style={{ fontSize: "12px", margin: "4px 8px", color: "gray" }}>
            <a href="#">Accessibilità</a>
          </li>
          <li style={{ fontSize: "12px", margin: "4px 8px", color: "gray" }}>
            <a href="#">Centro assistenza</a>
          </li>
          <li style={{ fontSize: "12px", margin: "4px 8px", color: "gray" }}>
            <a href="#">Privacy e condizioni</a>
          </li>
          <li style={{ fontSize: "12px", margin: "4px 8px", color: "gray" }}>
            <a href="#">Opzioni per gli annunci pubblicitari</a>
          </li>
          <li style={{ fontSize: "12px", margin: "4px 8px", color: "gray" }}>
            <a href="#">Pubblicità</a>
          </li>
          <li style={{ fontSize: "12px", margin: "4px 8px", color: "gray" }}>
            <a href="#">Servizi alle aziende</a>
          </li>
          <li style={{ fontSize: "12px", margin: "4px 8px", color: "gray" }}>
            <a href="#">Scarica l'app LinkedIn</a>
          </li>
          <li style={{ fontSize: "12px", margin: "4px 8px", color: "gray" }}>
            <a href="#">Altro</a>
          </li>
        </ul>
        <div className="d-flex" style={{ margin: "16px 24px" }}>
          <img src="./Logo.png" alt="logo" />
          <h6 className="ps-1" style={{ fontSize: "12px", color: "black" }}>
            LinkedIn Corporation © 2025
          </h6>
        </div>
      </footer>
    </aside>
  );
};

export default HomeSideBarDX;
