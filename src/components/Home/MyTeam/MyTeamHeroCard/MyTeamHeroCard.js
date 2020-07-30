import React from "react";
import "./MyTeamHeroCard.scss";
import { RemoveHero } from "./RemoveHero";
import PropTypes from "prop-types";

class MyTeamHeroCard extends React.Component {

  render() {
    return (
      <div className="row">
        <div
          className="MyTeamHeroCard__container col-12"
          onClick={() => this.props.remove(this.props.id)}
        >
          <img className="col-lg-3 xl-3 col-md-6 col-xs-4" src={this.props.avatar} alt="bla bla" />
          <p className="col-lg-9 col-xl-3 col-md-6 col-xs-4">{this.props.name}</p>
          <span className="delete">
            <RemoveHero />
          </span>
        </div>
      </div>
    );
  }
}
export { MyTeamHeroCard };

MyTeamHeroCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  remove: PropTypes.func.isRequired,
  id: PropTypes.number,
};
