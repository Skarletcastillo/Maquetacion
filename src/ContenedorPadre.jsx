import ContenedorHijo from "./ContenedorHijo";

const ContenedorPadre = () => {
  const section1Items = ["Bloque 1", "Bloque 2", "Bloque 3", "Bloque 4", "Bloque 5", "Bloque 6"];
  const section2Items = ["Bloque 7", "Bloque 8", "Bloque 9", "Bloque 10", "Bloque 11", "Bloque 12"];

  return (
    <div className="container">
      <ContenedorHijo items={section1Items} /> {}
      <ContenedorHijo items={section2Items} /> {}
    </div>
  );
};

export default ContenedorPadre;
