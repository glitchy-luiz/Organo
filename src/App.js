import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const times = [
    {
      nome: 'Futebol',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Volei',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Basquete',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Futsal',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Baseball',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Queimada',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Futebol americano',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    // debugger
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>
      
      {times.map(time=> <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}  colaboradores={jogadores.filter(colaborador => colaborador.time === time.nome)} />)}

      <Rodape/>
    </div>
  );
}

export default App;
