//IMAGES GO HERE VIA IMPORT
import './App.css'
import { useState } from 'react';

function App() {
  const [dataForCards, setDataForCards] = useState(null)
  // let newArr = [];
  // function doThis() {
  // 	getPhotoData();

  // }
  const getPhotoData = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?count=4&api_key=23ueCaeQlOOYU5pDWVMMMs0P7jvzij2lHlelwidZ"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // createCards(data);
        setDataForCards(data)
      })
      .catch((error) => console.error("Error:", error));
  };
  // function createCards(dataVar) {
  //   for (let item of dataVar) {
  //     let cardContainer = document.createElement("div");
  //     cardContainer.className = "cardwrapper";
  //     cardContainer.innerHTML = `<div className="card" id="card"> <h4 className="project-title">${item.title}</h4> <img className="card-image" src=${item.url} alt="${item.image}"> <p className="card-desc">${item.explanation} </p> <p className="card-date">"Date: ${item.date}"</p> <p className="card-credits">"Photographer: ${item.copyright}" </p>`;
  //     container.appendChild(cardContainer);
  //   }
  // }
  const resetPage = () => {
    window.location.reload(true);
  };

  return (
    <>
      <div className="container">
        <header>
          <div className="maincont">

            <h1>NASA Photo of the Day</h1>
            <button id="submit" onClick={getPhotoData} className="get-photos">Click Here To See The Photos!</button>
          </div>
        </header>
      </div>
      <section className="hero-section">
      <div className="hergridcont" id="cards">
        {dataForCards ? (
          dataForCards.map((item, key) => {
            return (
              <div className="card" id="card" key={key}>
                <h4 className="project-title">{item.title}</h4>
                <img className="card-image" src={item.url} alt={item.image} />
                <p className="card-desc">{item.explanation}</p>
                <p className="card-date">Date: {item.date}</p>
                <p className="card-credits">Photographer: {item.copyright}</p>
              </div>
            );
          })
        ) : null}
        </div>
      </section>
      <div className="reset"> <button className="resetBttn" id="reset" onClick={resetPage}>Reset</button> </div>
    </>
  )
}

export default App
