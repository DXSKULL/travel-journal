import React from "react"
import data from "../data"
export default function Card(props) {
    let text
    if (data.length == props.id) {
        text = "lol"
    } else {
        text = "kek"
    }
    return (
        <div className="card-container">
            <div className="card">
                <img src={`/images/${props.image.img}`} className="card--img" alt={props.image.alt} />
                <div className="card--info">
                    <div className="card--location-info">
                        <img src="/images/location.png" alt="location pin icon" />
                        <p className="card--location-text">{props.location}</p>
                        <a href="https://www.google.com/maps" className="card--location-link">View on Google Maps</a>
                    </div>
                    <h2 className="card--header">{props.title}</h2>
                    <p className="card--date">{props.date}</p>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>
            {text == "kek" && <hr />}
        </div>


    )
}