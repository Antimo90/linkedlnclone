import "bootstrap/dist/css/bootstrap.min.css";
import "../components/SideBarDX.css";

const SideBarDX = () => {
  const people = [
    {
      name: "Riccardo Pasetti",
      role: "Network Engineer presso Fastweb",
      button: "Collegati",
    },
    {
      name: "Adriano Tescione",
      role: "Service Control Room",
      button: "Collegati",
    },
    { name: "Alessia Turato", role: "Helpdesk", button: "Collegati" },
    {
      name: "Alberto Cangani",
      role: "Software Developer",
      button: "Collegati",
    },
  ];

  return (
    <aside className=" flex flex-col gap-2 me-2 text-sm w-100">
      {/* Lingua e URL */}
      <div
        className="sideBarDXBorderShadow rounded-2 p-3 bg-white shadow-sm"
        style={{ border: "#f3f2ef" }}
      >
        <div className="space-y-1">
          <div>
            <h2 className="d-flex justify-content-between font-semibold fs-6">
              Lingua del profilo
              <a href="">
                <i className="bi bi-pen-fill" style={{ fontSize: "18px" }}></i>
              </a>
            </h2>
            <p className="text-xs text-gray-600">Italiano</p>
          </div>
          <div>
            <h2 className="d-flex justify-content-between font-semibold fs-6">
              Profilo pubblico e URL
              <a href="">
                <i className="bi bi-pen-fill" style={{ fontSize: "18px" }}></i>
              </a>
            </h2>
            <p
              className="truncate text-xs text-blue-600"
              href="https://www.linkedin.com/in/placeholder"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/placeholder
            </p>
          </div>
        </div>
      </div>

      {/* Annuncio sponsorizzato */}
      <div
        className="sideBarDXBorderShadow rounded-2 p-3 mb-2 mt-2 bg-white border shadow-sm"
        style={{ border: "#f3f2ef" }}
      >
        <h2 className="font-semibold fs-6 mb-1">Promosso</h2>
        <div className="flex flex-col items-start">
          <img
            src="./src/foto.jpg"
            alt="Edison Next"
            className="rounded-md mb-1"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <p className="text-xs">
            <strong>Edison Next</strong>
          </p>
          <p className=" text-gray-600">
            Valerio, immagina il futuro con Edison Next
          </p>
          <p className=" text-gray-600">
            Siamo il tuo partner per la transizione energetica
          </p>
          <button className="w-100 mt-1 px-2 py-1 text-xs rounded-5 bg-white text-primary border-primary">
            Segui
          </button>
        </div>
      </div>

      {/* Persone che potresti conoscere */}
      <div
        className="sideBarDXBorderShadow rounded-2 mb-2 mt-2 bg-white border shadow-sm"
        style={{ border: "#f3f2ef" }}
      >
        <div className="space-y-2">
          <div className="p-2 pb-0">
            <h2 className="font-semibold fs-6 ms-2 mb-0">
              Persone che potresti conoscere
            </h2>
            <p className="text-center mb-1">Dal tuo settore</p>
          </div>
          <div className="space-y-1 text-center">
            {people.map((person, index) => (
              <div key={index} className="person-container">
                <div className="person-info">
                  <img
                    src="./src/foto.jpg"
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    className="rounded-5 me-3"
                  />
                  <div className="text-start">
                    <p className="text-xs mb-0">
                      <strong>{person.name}</strong>
                    </p>
                    <p className="text-[9px] text-gray-600 mb-0">
                      {person.role}
                    </p>
                  </div>
                </div>
                <div className="button-container">
                  <button 
                  className="px-3 py-2 text-sm rounded-pill bg-white text-black border border-1 connect-btn"
                  style={{
                    borderColor: "#0a66c2",
                    color: "#0a66c2",
                    fontWeight: "600",
                    fontSize: "14px",
                    transition: "all 0.2s ease",
                    minWidth: "90px",
                    height: "32px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(10, 102, 194, 0.08)";
                    e.target.style.borderColor = "#004182";
                    e.target.style.color = "#004182";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.borderColor = "#0a66c2";
                    e.target.style.color = "#0a66c2";
                  }}
                >
                     <i
                       className="bi bi-person-plus-fill me-1"
                       style={{ fontSize: "12px" }}
                     ></i>
                     {person.button}
                   </button>
                 </div>
                 <hr className="ms-3 me-3 mb-0" />
              </div>
            ))}
          </div>
          <button
            className="w-100  font-medium border  rounded-bottom-2 p-1 bg-white"
            style={{ border: "#f3f2ef" }}
          >
            Mostra tutto
          </button>
        </div>
      </div>
      <div>
        <a>
          <img
            src="https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png"
            alt="Sponsor"
            className="img-fluid w-100 shadow-sm border-1"
            style={{
              width: "300px",
              height: "250px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          />
        </a>
      </div>
    </aside>
  );
};

export default SideBarDX;
