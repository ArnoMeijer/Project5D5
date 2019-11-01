import React, { Component } from "react";
import "./App.module.css";
// import PlayList from './components/PlayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSong: {
        song: "",
        artist: "",
        genre: "",
        rating: ""
      },
      songs: [
        {
          song: "Skyward",
          artist: "Davina Michelle",
          genre: "Pop",
          rating: 5
        },
        {
          song: "Kleine Jongen",
          artist: "Marco Borsato",
          genre: "Nederlands",
          rating: 3
        }
      ]
    };
  }

  addSongHandler = () => {
    const newSong = { ...this.state.newSong };
    const newSongs = [...this.state.songs];
    newSongs.push(newSong);
    this.setState({
      songs: newSongs,
      newSong: {
        song: "",
        artist: "",
        genre: "",
        rating: ""
      }
    });
  };

  songTitleHandler = event => {
    const songTitle = event.target.value;
    const newSong = { ...this.state.newSong };
    newSong.song = songTitle;
    this.setState({ newSong: newSong });

  };

    songArtistHandler = event => {
      const songArtist = event.target.value;
      const newSong = { ...this.state.newSong };
      newSong.artist = songArtist;
      this.setState({ newSong: newSong });

    };

      songGenreHandler = event => {
        const songGenre = event.target.value;
        const newSong = { ...this.state.newSong };
        newSong.genre = songGenre;
        this.setState({ newSong: newSong });

      };

      songRatingHandler = event => {
        const songRating = event.target.value;
        const newSong = { ...this.state.newSong };
        newSong.rating = songRating;
        this.setState({ newSong: newSong });

      };
  

  render() {
    return (
      <React.Fragment>
      <div>
        <div className="App">
          <h1>Arno's Play List</h1>

          <input
            type="text"
            placeholder="Song"
            onChange={this.songTitleHandler}
            value={this.state.newSong.song}
          ></input>
          <input 
            type="text" 
            placeholder="Artist"
            onChange={this.songArtistHandler}
            value={this.state.newSong.artist}></input>
          <input 
          type="text" 
          placeholder="Genre"
          onChange={this.songGenreHandler}
            value={this.state.newSong.genre}></input>
          <input 
          type="text" 
          placeholder="Rating"
          onChange={this.songRatingHandler}
            value={this.state.newSong.rating}></input>
          <button type="button" onClick={this.addSongHandler}>
            ADD
          </button>
        </div>
        <ul className="PlayList">
          {this.state.songs.map((item, index) => {
          return <li song={item.song} key={index}>{item.song}</li>})}
          {this.state.songs.map((item, index) => {
          return <li artist={item.artist} key={index}>{item.artist}</li>})}
          {this.state.songs.map((item, index) => {
          return <li genre={item.genre} key={index}>{item.genre}</li>})}
          {this.state.songs.map((item, index) => {
          return <li rating={item.rating} key={index}>{item.rating}</li>})}
        </ul>
      </div>
      </React.Fragment>
    );
  }
}
export default App;
