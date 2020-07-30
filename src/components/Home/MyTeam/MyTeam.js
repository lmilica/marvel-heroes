import React from "react";
import { MyTeamHeroCard } from "./MyTeamHeroCard/MyTeamHeroCard";
import PropTypes from "prop-types";

class MyTeam extends React.Component {
  render() {
    return (
      <div>
        {this.props.myTeam.map((hero) => (
          <MyTeamHeroCard
            key={hero.id}
            name={hero.name}
            avatar={hero.avatar}
            id={hero.id}
            remove={this.props.removeFunction}
          />
        ))}
      </div>
    );
  }
}

export { MyTeam };

MyTeam.propTypes = {
  myTeam: PropTypes.array,
  removeFunction: PropTypes.func.isRequired,
};
