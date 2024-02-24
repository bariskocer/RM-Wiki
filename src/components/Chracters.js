import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import "../card.css"
import Header from './Header';


function Chracters() {
    const [chracters, setChracters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);

    const fetchData = () => {
        const url = `https://rickandmortyapi.com/api/character?page=${page}`;
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => setChracters(data.results))
            .catch((error) => console.error("Error in fetch", error));
    }

    useEffect(() => {
        fetchData()
    }, [page])


    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
    }

    const filteredData = chracters.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const goToNext = () => {
        setPage(page + 1)
    }
    const goToPrev = () => {
        setPage(page - 1)
    }

    return (
        
        <div>
            <Header/>
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
            <div className="buttonsDiv">
                <button onClick={goToPrev}>Prev</button>
                <button onClick={goToNext}>Next</button>
            </div>
            <div className="character-container">
                {filteredData.map((character) => (
                    <div key={character.id} className="character-card">
                        <h1>{character.name}</h1>
                        <img src={character.image} alt={character.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chracters
