import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className = "card">
        <div className = "img-container">
            <img alt = {props.name} src={props.images} />
        </div>
        <div className = "content">
            <ul>
                <li>
                    <stong>Name:</stong>{props.name}
                </li>
            </ul>
        </div>
        <span onclick={() => props.removeImage(props.id)} className = "remove">
            x
        </span>
    </div>
);

export default ImageCard;