import React , { useState} from 'react'
import './TinderCards.css'
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from '@material-ui/core';

function TinderCards() {
    const [people, setPeople] = useState([
        
       
        {
            name: "Taylor Swift",
            url:"https://www.fillgap.news/wp-content/uploads/2020/02/Top-10-most-beautiful-women-in-world-2020-Taylor-Swift-fillgapnews.jpg"
        },
        {
            name: 'Emma Watson',
            url:"https://www.fillgap.news/wp-content/uploads/2020/02/Top-10-most-beautiful-women-in-world-2020-Emma-Watson-fillgapnews-696x392.jpg"
        },
        {
            name: "Fahriye Evcen",
            url:"https://www.fillgap.news/wp-content/uploads/2020/02/Top-10-most-beautiful-women-in-world-2020-Fahriye-Evcen-fillgapnews0-672x420.jpeg"
        },
        {
            name: 'Kristen Stewart',
            url:"https://www.fillgap.news/wp-content/uploads/2020/02/Top-10-most-beautiful-women-in-world-2020-Kristen-Stewart-fillgapnews-672x420.jpg"
        },
        {
            name: "Selena Gomez",
            url:"https://www.fillgap.news/wp-content/uploads/2020/02/Top-10-most-beautiful-women-in-world-2020-Selena-Gomez-fillgapnews.jpg"
        },        
        {
            name: 'Priyanka Chopra',
            url:"https://www.fillgap.news/wp-content/uploads/2020/02/Top-10-most-beautiful-women-in-world-2020-Priyanka-Chopra-fillgapnews0-660x420.jpg"
        },
        {
            name: "Deepika Padukone",
            url:"https://www.fillgap.news/wp-content/uploads/2020/02/Top-10-most-beautiful-women-in-world-2020-Deepika-Padukone-fillgapnews-696x522.jpg"
        },
        
        {
            name: 'Nana Im Jin-ah',
            url:"https://www.fillgap.news/wp-content/uploads/2020/02/Top-10-most-beautiful-women-in-world-2020-Nana-Im-Jin-ah-fillgapnews.jpg"
        },
        {
            name: "Liza Soberano",
            url:"https://www.fillgap.news/wp-content/uploads/2020/02/Top-10-most-beautiful-women-in-world-2020-Liza-Soberano-696x464.jpg"
        },
        {
            name: 'Hande Ercel',
            url:"https://www.fillgap.news/wp-content/uploads/2020/02/Top-10-most-beautiful-women-in-world-2020-Hande-Ercel-fillgapnews-1.jpg"
        }

    ]);

    const swiped = ( direction, nameToDelete) => {
        console.log("removing " + nameToDelete)
    };

    const outOfFrame = ( name) => {
        console.log(name + " left the screen");
    }


    return (


        <div className="tinderCards">

            <div className="tinderCards__cardContainer">
            {people.map( (person) => (
                <TinderCard 
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div 
                    className="card"
                    style={{ backgroundImage: `url(${person.url})`}}                       
                    >
                        <h3> {person.name}</h3>
                    </div>

                </TinderCard>
            ))}
            </div>    
        </div>
    )
}

export default TinderCards
