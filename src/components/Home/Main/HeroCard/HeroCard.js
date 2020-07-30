import React from "react";
import "./HeroCard.scss";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import { AddToMyTeam } from "./AddToMyTeam";

const HeroCard = ({ name, avatar, id, addToMyTeam }) => {
  return (
    <div
      className="HeroCard__container col-lg-3 col-md-6 col-sm-6 col-12"
      onClick={() => addToMyTeam(id)}  data-id={id}
    >
      <h4>{name}</h4>
      <img className="HeroCard__img" src={avatar} alt="hero" />
      
       <Link to={`/info/${id}`}><button className="col-12 HeroCard__buttonWrapper">Info</button></Link> 
       <AddToMyTeam />
      
    </div>
  );
};
export { HeroCard };

HeroCard.propTypes ={
  name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
  addToMyTeam: PropTypes.func.isRequired
}