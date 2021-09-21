import Nav from "./Nav";
import frenchToast from "../imgs/frenchToast.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div>
      <Nav />
      <h1>Pain Perdu</h1>
      <img className="home-image" src={frenchToast} alt="Not Found" />
      <p>An extraordinary creation: from our plate, to you.</p>
    </div>
  );
}

export default Home;
