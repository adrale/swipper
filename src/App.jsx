import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SwipperLogic from "./components/SwipperLogic";
import'./App.css'

function App() {
  const [lovers, setLovers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLover();
  }, []);

  const fetchLover = () => {
    fetch("https://randomuser.me/api?nat=en&results=5") // Fetching 5 lovers
      .then((res) => res.json())
      .then((data) => {
        setLovers(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des amoureux :", error);
        setLoading(false);
      });
  };

  return (
    <>
      <Header />
      <Footer />
      <SwipperLogic lovers={lovers} loading={loading} />
    </>
  );
}

export default App;
