import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Main extends Component {
  state = {
    characters: [],
    info: {},
    page: 1
  };

  componentDidMount() {
    this.loadCharacters();
  }

  async loadCharacters(page = 1) {
    const response = await api.get(`/character?page=${page}`);

    const { results, info } = response.data;

    this.setState({ characters: results, info, page });
  }

  prevPage = () => {
    const { page } = this.state;
    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadCharacters(pageNumber);
  };

  nextPage = () => {
    const { page, info } = this.state;
    if (page === info.pages) return;

    const pageNumber = page + 1;

    this.loadCharacters(pageNumber);
  };

  render() {
    const { characters, page, info } = this.state;
    return (
      <div className="character-list">
        {characters.map(character => (
          <article className="inline" key={character.id}>
            <div>
              <Link to={`/characters/${character.id}`}>
                <strong>
                  {character.name}{" "}
                  <i
                    className={
                      character.gender === "Male" ? "fa fa-mars" : "fa fa-venus"
                    }
                  ></i>
                </strong>
              </Link>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Origin: {character.origin.name}</p>
            </div>
            <Link to={`/characters/${character.id}`}>
              <img
                className="character-image"
                src={character.image}
                alt={character.name}
              ></img>
            </Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button disabled={page === info.pages} onClick={this.nextPage}>
            Próximo
          </button>
        </div>
      </div>
    );
  }
}
