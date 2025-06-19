function MarioCharacter(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default MarioCharacter;
