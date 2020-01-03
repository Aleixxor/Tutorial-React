import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class Character extends Component {
  state = {
    character: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/character/${id}`);
    this.setState({ character: response.data });
  }
  render() {
    const { character } = this.state;
    return (
      <div className="character-info">
        <div className="center">
          <img
            className="elipse-image"
            src={character.image}
            alt={character.name}
          ></img>
          <h1>{character.name}</h1>
        </div>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>
          Gender: {character.gender}{" "}
          <i
            className={
              character.gender === "Male" ? "fa fa-mars" : "fa fa-venus"
            }
          ></i>
        </p>
        <p className={character.type === "" ? "hide" : ""}>
          Type: {character.type}
        </p>
        <p>Origin: {character.origin ? character.origin.name : ""}</p>
        <p>Location: {character.location ? character.location.name : ""}</p>
        <p>Episodes: </p>
        <ul className="episode-box">
          {!character.episode
            ? ""
            : character.episode.map((episode, index) => (
                <li key={index}>
                  <code>
                    {index + 1}: {episode}
                  </code>
                </li>
              ))}
        </ul>
      </div>
    );
  }
}
