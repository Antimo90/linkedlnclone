import "bootstrap/dist/css/bootstrap.min.css";

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
    <aside className=" flex flex-col gap-2 me-2 text-sm mt-4">
      {/* Lingua e URL */}
      <div
        className="rounded-2 p-2 bg-white border "
        style={{ border: "#f3f2ef" }}
      >
        <div className="space-y-1">
          <div>
            <h2 className="font-semibold fs-6">Lingua del profilo</h2>
            <p className="text-xs text-gray-600">Italiano</p>
          </div>
          <div>
            <h2 className="font-semibold fs-6">Profilo pubblico e URL</h2>
            <p
              className="text-xs text-blue-600"
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
        className="rounded-2 p-2 mb-2 mt-2 bg-white border"
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
        className="rounded-2 mb-2 mt-2 bg-white border"
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
              <div key={index} className="flex items-center justify-between">
                <div className="d-flex">
                  <img
                    src="./src/foto.jpg"
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    className="rounded-5 ms-3 me-2 mt-2"
                  />
                  <div className="text-start mt-2">
                    <p className="text-xs mb-0">
                      <strong>{person.name}</strong>
                    </p>
                    <p className="text-[9px] text-gray-600 mb-0">
                      {person.role}
                    </p>
                  </div>
                </div>
                <button className="px-2 py-1 text-xs rounded-5 bg-white text-black hover:bg-blue-700">
                  <i
                    className="bi bi-person-plus-fill"
                    style={{ fontSize: "15px" }}
                  ></i>{" "}
                  {person.button}
                </button>
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
    </aside>
  );
};

export default SideBarDX;
