import Nav from "./Nav";
import frenchToast from "../assets/frenchToast.jpg";
import "../styles/home.css";

function Home() {
  return (
    <main className="Home">
      <Nav />
      <header className="home-header">
        <h1 className="home-h1">Pain Perdu</h1>
        <img className="home-img" src={frenchToast} alt="French Toast" />
        <p className="home-p">
          An extraordinary creation: from our plate, to you.
        </p>
      </header>
    </main>
  );
}

export default Home;
