import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="parent">
        <Card
          user="Anshu kumari"
          age="21"
          img="https://th.bing.com/th/id/OIP.h_iproz_QsxWCdIACXGHzgHaEo?w=297&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />
        <Card
          user="Palak"
          age="19"
          img="https://th.bing.com/th/id/OIP.ssVk6ue5ptF4WGDOQAfNCwHaJQ?w=152&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />
        <Card
          user="Mithi"
          age="14"
          img="https://th.bing.com/th/id/OIP.hfU19b3M3hH1I3I_EN8C_gHaNK?w=187&h=333&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />
        <Card
          user="Ritika"
          age="12"
          img="https://th.bing.com/th/id/OIP.Cae35YfBtXkeDKvKi8f2egHaNN?w=208&h=326&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />
        <Card
          user="Aarav"
          age="3"
          img="https://th.bing.com/th/id/OIP.JvNQ5lXQfn-N7XHWQd8gBAHaHh?w=208&h=212&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />
      </div>
    </>
  );
}
export default App;
