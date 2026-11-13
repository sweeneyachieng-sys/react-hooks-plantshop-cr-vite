import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import {useState, useEffect} from "react";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then((plantsData) => setPlants(plantsData))
  }, [])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
