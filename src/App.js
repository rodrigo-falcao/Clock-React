import Task from './Task';

function App() {

  const tasks = [
    'Lavar o carro',
    'Ir no mercado',
    'buscar o cachorro no petshop'
  ];
  return <>
    <h1>TODO List</h1>
    {tasks.map((value) => {
      return <p><Task text={value} /></p>;
    })}
  </>
}

export default App;
