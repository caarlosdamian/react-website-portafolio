import React from "react";
import CardItem from "./CardItem";
import "../styles/Cards.css";
import Imagen from '../images/todoList.JPG'
import Imagen2 from '../images/humanresource.JPG'
import Imagen3 from '../images/Laura.JPG'
import Imagen4 from '../images/Drone.JPG'
import Imagen5 from '../images/login.JPG'

function Cards() {
  return (
    <div className="cards">
      <h1>Some of my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
              <CardItem src={Imagen}
              text="Shopping list making shopping more fun and simple"
              label="TodoList"
              path="/portafolio"
              />
                    <CardItem src={Imagen2}
              text="Shopping list making shopping more fun and simple"
              label="Human Resources System"
              path="/portafolio"
              />
   
          </ul>
          <ul className="cards__items">
          <CardItem src={Imagen3}
              text="Gym administrative system"
              label="Gyms system"
              path="/portafolio"
              />
                      <CardItem src={Imagen4}
              text="Drone shooting on Villa de alvarez,Colima"
              label="Drone Footage"
              path="/portafolio"
              />
                    <CardItem src={Imagen5}
              text="Enterprise Administraion system"
              label="Register"
              path="/portafolio"
              />
               

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
