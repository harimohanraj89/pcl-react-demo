import { useState } from 'react';
import './App.css';

function Pokemon() {
  return (
    <>
      <h3>My favorite pokemon</h3>
      <ul>
        <li>Machamp</li>
        <li>Magmar</li>
        <li>Gengar</li>
      </ul>
    </>
  );
}

function ColorfulText(props) {
  return (
    <p style={{ color: props.color }}>
      <strong>Look at this colorful text!</strong>
    </p>
  );
}

function App() {
  const number = 17;

  const characters = [
    {
      name: 'Mario',
      image:
        'https://upload.wikimedia.org/wikipedia/en/5/5c/Mario_by_Shigehisa_Nakaue.png',
    },
    {
      name: 'Peach',
      image:
        'https://upload.wikimedia.org/wikipedia/en/1/16/Princess_Peach_Stock_Art.png',
    },
    {
      name: 'Bowser',
      image:
        'https://upload.wikimedia.org/wikipedia/en/d/d1/Bowser_by_Shigehisa_Nakaue.png',
    },
  ];

  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <h1>Welcome!</h1>

      {/* JSX and interpolation */}
      <h2>JSX and interpolation</h2>
      <p>My lucky number is {number}</p>
      <hr />

      {/* Component */}
      <h2>Using components</h2>
      <Pokemon />
      <hr />

      {/* State and conditionals */}
      <h2>Using state</h2>
      <input type="text" placeholder="Your name" onChange={handleChange} />
      <p>Your name backwards: {name.split('').reverse().join('')}</p>
      <hr />

      <p>
        {name.length < 10
          ? 'Your name is not too long.'
          : 'Whoa, your name is long!'}
      </p>

      {/* Props */}
      <ColorfulText color="blue" />

      {/* Lists */}
      {characters.map((character) => {
        return (
          <div>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </>
  );
}

export default App;
