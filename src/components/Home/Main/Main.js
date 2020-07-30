import React from "react";
import { HeroCard } from "./HeroCard/HeroCard";
import { MyTeam } from "../MyTeam/MyTeam";
import PropTypes from "prop-types";
import './Main.scss'

import { StorageService } from "../../../services/storageService";

const myTeamStorage = new StorageService();

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTeam: myTeamStorage.get("myTeam") || [],
    };
  }

  addToMyTeam = (id) => {
   
    const heroInTeam = this.state.myTeam.find((hero) => hero.id === id);
    if (heroInTeam) {
      return;
    }

    const hero = this.props.filteredHeroes.find((item) => item.id === id);
    const myTeam = [...this.state.myTeam, hero];
    this.setState({ myTeam });
    myTeamStorage.set("myTeam", myTeam);
  };

  removeHeroFromMyTeam = (id) => {
    const newArray = this.state.myTeam.filter((item) => item.id !== id);

    this.setState({ myTeam: newArray });
  };
  render() {
    return (
      <div className="Main__container container">
        <div className="row">
          <div className="col-lg-9 col-xl-9 col-md-6 col-xs-6">
            <div className="row">
              {this.props.filteredHeroes.map((hero) => (
                <HeroCard
                  key={hero.id}
                  addToMyTeam={this.addToMyTeam}
                  name={hero.name}
                  avatar={hero.avatar}
                  id={hero.id}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-6 col-xs-6">
            <div className="row">
              <h3>My Team</h3>
              <MyTeam
                myTeam={this.state.myTeam}
                removeFunction={this.removeHeroFromMyTeam}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { Main };

Main.propTypes = {
  filteredHeroes: PropTypes.array,
};
