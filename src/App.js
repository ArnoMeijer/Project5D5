import React, { Component } from "react";
import axios from './axios-songs';
import  "./App.css";

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
          artist: "Andre Hazes",
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

      playListBackendHandler = () => {
        const songsBackend = {
          songs: this.state.songs
        }
        axios.post('/playlist.json', songsBackend)
        .then(response => console.log(response))
        .catch(error => console.log(error));
      };

      

  render() {
    return (
      <React.Fragment>
      <div className="Background">
        <div className="App">
          <h2>Voeg hier je favoriete liedjes toe:</h2>

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
          <button type="button" onClick={() => {
            this.addSongHandler();
            this.playListBackendHandler();}}>
            Voeg Toe
          </button>
        </div>
        <div className="PlayList">
          <h2>Arno's Play List</h2>
        <div>
        <ul className="List"><u>Lied</u>
          {this.state.songs.map((item, index) => {
          return <li song={item.song} key={index}>{item.song}</li>})} 
        </ul>
        <ul className="List"><u>Artiest</u>
          {this.state.songs.map((item, index) => {
          return <li artist={item.artist} key={index}>{item.artist}</li>})}
        </ul>
        <ul className="List"><u>Genre</u>
          {this.state.songs.map((item, index) => {
          return <li genre={item.genre} key={index}>{item.genre}</li>})}
        </ul>
        <ul className="List"><u>Rating</u>
        {this.state.songs.map((item, index) => {
          return <li rating={item.rating} key={index}>{item.rating}</li>})}
        </ul>
        </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}
export default App;
