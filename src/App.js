import { FiSearch} from 'react-icons/fi'
import './styles.css';


function App() {
  return (
    <div className="container">
      <h1 className='title'>Buscador de CEP</h1>

    <div className='containerInput'>
        <input type='text'
        placeholder='Digite seu CEP...'
         />

    <button className='buttonSearch'>
      <FiSearch size={25} color='#FFF' />
    </button>
    </div>

    <main className='main'>
      <h2>CEP: 39338000</h2>

      <span>Rua Teste algum</span>
      <span>Complemento: Algum complemento</span>
      <span>Vila Rosa</span>
      <span>Minas Gerais</span>
    </main>

    </div>
  );
}

export default App;
