// import "bootstrap/dist/css/bootstrap.min.css";

// const SideBarDX = () => {
//   const people = [
//     {
//       name: "Riccardo Pasetti",
//       role: "Network Engineer presso Fastweb",
//       button: "Collegati",
//     },
//     {
//       name: "Adriano Tescione",
//       role: "Service Control Room",
//       button: "Collegati",
//     },
//     { name: "Alessia Turato", role: "Helpdesk", button: "Collegati" },
//     {
//       name: "Alberto Cangani",
//       role: "Software Developer",
//       button: "Collegati",
//     },
//   ];

//   return (
//     <aside className="w-80 flex flex-col gap-4 me-3">
//       {/* Lingua e URL */}
//       <div className="rounded-2 p-3 bg-white rounded-2">
//         <div className="space-y-3">
//           <div>
//             <h2 className="font-semibold fs-5">Lingua del profilo</h2>
//             <p className="text-sm text-gray-600">Italiano</p>
//           </div>
//           <div>
//             <div>
//               <h2 className="font-semibold fs-5">Profilo pubblico e URL</h2>
//               <i class="bi bi-pencil"></i>
//             </div>
//             <p
//               href="https://www.linkedin.com/in/mattia-pastorini-96294b331"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sm"
//             >
//               www.linkedin.com/in/mattia-pastorini-96294b331
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Annuncio sponsorizzato */}
//       <div className="rounded-2  p-3 mb-2 mt-2 bg-white rounded-2">
//         <div className="space-y-2">
//           <h2 className="font-semibold fs-5">Promosso</h2>
//           <div className="flex flex-col items-start">
//             <img
//               src="./src/foto.jpg"
//               alt="Edison Next"
//               className="rounded-md mb-2"
//               style={{ width: "80px", height: "80px", objectFit: "cover" }}
//             />
//             <p className="text-sm">
//               <strong>Edison Next</strong>
//             </p>
//             <p className="text-xs text-gray-600">
//               Mattia, immagina il futuro con Edison Next
//             </p>
//             <p>Siamo il tuo partner per la transizione energetica</p>
//             <button className=" w-100 px-3 py-1 text-sm rounded-5 bg-white text-primary border-primary">
//               Segui
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Persone che potresti conoscere */}
//       <div className="rounded-2 mb-2 mt-2 bg-white">
//         <div className="space-y-3">
//           <div className="p-3 pb-0">
//             <h2 className="font-semibold fs-5 mb-0">
//               Persone che potresti conoscere
//             </h2>
//             <p>Dal tuo settore</p>
//           </div>
//           <div className="space-y-3 text-center">
//             {people.map((person, index) => (
//               <div key={index} className="flex items-center justify-between">
//                 <div className="d-flex">
//                   <img
//                     src="./src/foto.jpg"
//                     alt=""
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       objectFit: "cover",
//                     }}
//                     className=" rounded-5 ms-4 me-2 mt-3"
//                   />
//                   <div className="text-start mt-3">
//                     <p className="text-sm">
//                       <strong>{person.name}</strong>
//                     </p>
//                     <p className="text-xs text-gray-600">{person.role}</p>
//                   </div>
//                 </div>
//                 <button className="px-3 py-1 text-sm rounded-5 bg-white text-black hover:bg-blue-700">
//                   <i class="bi bi-person-plus-fill"></i>
//                   {person.button}
//                 </button>
//                 <hr className=" ms-4 me-4 mb-0" />
//               </div>
//             ))}
//           </div>
//           <button className=" w-100 text-xs font-medium border-2 border-secondary rounded-bottom-2 p-1 bg-white">
//             Mostra tutto
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// };
// export default SideBarDX;
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
    <aside className=" flex flex-col gap-2 me-2 text-sm">
      {/* Lingua e URL */}
      <div className="rounded-2 p-2 bg-white">
        <div className="space-y-1">
          <div>
            <h2 className="font-semibold fs-6">Lingua del profilo</h2>
            <p className="text-xs text-gray-600">Italiano</p>
          </div>
          <div>
            <h2 className="font-semibold fs-6">Profilo pubblico e URL</h2>
            <p
              className="text-xs text-blue-600"
              href="https://www.linkedin.com/in/mattia-pastorini-96294b331"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/mattia-pastorini-96294b331
            </p>
          </div>
        </div>
      </div>

      {/* Annuncio sponsorizzato */}
      <div className="rounded-2 p-2 mb-2 mt-2 bg-white">
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
            Mattia, immagina il futuro con Edison Next
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
      <div className="rounded-2 mb-2 mt-2 bg-white">
        <div className="space-y-2">
          <div className="p-2 pb-0">
            <h2 className="font-semibold fs-6 ms-2 mb-0">
              Persone che potresti conoscere
            </h2>
            <p className=" mb-1">Dal tuo settore</p>
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
                  <i className="bi bi-person-plus-fill"></i> {person.button}
                </button>
                <hr className="ms-3 me-3 mb-0" />
              </div>
            ))}
          </div>
          <button className="w-100  font-medium border border-secondary rounded-bottom-2 p-1 bg-white">
            Mostra tutto
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBarDX;
