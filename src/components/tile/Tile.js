import React from 'react';
import './Tile.css';
function Tile(props){
    return(
        <div class="col-lg-3 col-md-4 col-sm-6  column">
            <div class="image_container">
                <img src={props.imgUrl} alt={props.name}/>
            </div>
            <div class="skill_name">
                 {props.name}
            </div>
            <div class="skill_writeup">
                 {props.description}
            </div>
        </div>
    )
}

export default Tile;