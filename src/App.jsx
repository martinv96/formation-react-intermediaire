import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Home   />
        <h1>Home</h1>
        <p>contenu principal de la page...</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
