import Item from "./Item";

const ContenedorHijo = ({ items }) => {
  return (
    <div className="section">
      {items.map((item, index) => (
        <Item key={index} content={item} /> 
      ))}
    </div>
  );
};

export default ContenedorHijo;
