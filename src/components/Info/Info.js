import React from "react";
import "./Info.scss";
import Modal from "react-modal";
import Comics from "./Comics.js";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Link } from "react-router-dom";


class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      aboutHero: null,
      comics: [],
      modalIsOpen: false,
      areComicsShown: false,
    };
  }
  componentDidMount() {
    fetch(
      `https://gateway.marvel.com/v1/public/characters/${this.props.match.params.id}?apikey=0dfccc7db9074a09fe2e824015d07e04`
    )
      .then((response) => response.json())
      .then((hero) => this.setState({ aboutHero: hero.data.results[0] }));

    fetch(
      `https://gateway.marvel.com/v1/public/characters/${this.props.match.params.id}/comics?apikey=0dfccc7db9074a09fe2e824015d07e04`
    )
      .then((response) => response.json())
      .then((comics) => this.setState({ comics: comics.data.results }));
  }

  renderHero = () => (
    <div className="Info__wrapper container">
      <div className="row">
        <h1 className="col-lg-12 col-md-12 col-sm-12 col-12">
          {this.state.aboutHero.name}
        </h1>
        <div className="Info__main-wrapper row">
          <img
            onClick={() => this.setState({ modalIsOpen: true })}
            src={`${this.state.aboutHero.thumbnail.path}/portrait_uncanny.${this.state.aboutHero.thumbnail.extension}`}
            className="col-lg-4"
            alt="Marvel Hero"
          />
          <Modal
            className="Info__modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={() => this.setState({ modalIsOpen: false })}
          >
            <img
              src={`${this.state.aboutHero.thumbnail.path}/portrait_uncanny.${this.state.aboutHero.thumbnail.extension}`}
              alt="Marvel Hero"
            />
          </Modal>
          <div className="Info__hero-description col-lg-8 col-md-6 col-sm-6 col-6">
            <p className="col-lg-12 col-md-12 col-sm-12 col-12">
              {this.state.aboutHero.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  showComics = (e) => {
    this.setState({ areComicsShown: !this.state.areComicsShown });
  };

  render() {
    return (
      <div className="Info__hero-appearance container">
        <Link className='Home' to="/">Back to Homepage</Link>
        <div>
          {this.state.aboutHero && this.renderHero()}

          <BootstrapSwitchButton
            id="show-hide-comics-btn"
            onlabel="Hide comics"
            offlabel="Show comics"
            onChange={this.showComics}
            onstyle="dark"
          />
          <div className="Info__comics-wrapper col-lg-12">
            <div className="row">
              {this.state.comics.map((comic) => (
                <Comics
                  key={comic.id}
                  display={this.state.areComicsShown}
                  title={comic.title}
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Info };

