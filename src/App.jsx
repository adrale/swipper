import { useEffect, useState } from "react";
import './App.css'
import SwipperCard from './components/SwipperCard'

function App() {
  const [lover, setLover] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLover();
  }, []);

  const fetchLover = () => {
    fetch("https://randomuser.me/api?nat=en")
      .then((res) => res.json())
      .then((data) => {
        setLover(data.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du Lover :", error);
        setLoading(false);
      });
  };

  return (
    <>
      <SwipperCard lover={lover} loading={loading}/>
    </>
  )
}

export default App
