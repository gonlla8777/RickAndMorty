import Card from "./Card";
import "./Cards.css";
export default function Cards(props) {
  const characters = props.characters;
  let todoItems = characters.map((character) => (
    // Only do this if items have no stable IDs

    <Card
      key={character.id}
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin.name}
      image={character.image}
      onClose={() => window.alert("Emulamos que se cierra la card")}
    />
  ));
  return <div className="cards">{todoItems}</div>;
}
