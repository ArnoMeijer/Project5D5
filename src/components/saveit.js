import React, { Component } from "react";
import "./App.module.css";
// import PlayList from './components/PlayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSong: {
        song: "",
        id: ""
      },
      songs: [
        {
          song: "Skyward",
          id: 1
        },
        {
          song: "Kleine Jongen",
          id: 2
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
        id: ""
      }
    });
  };

  songTitleHandler = event => {
    const songTitle = event.target.value;
    const newSong = { ...this.state.newSong };
    newSong.song = songTitle;
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
          <input type="text" placeholder="Artist"></input>
          <input type="text" placeholder="Genre"></input>
          <input type="text" placeholder="Rating"></input>
          <button type="button" onClick={this.addSongHandler}>
            ADD
          </button>
        </div>
        <ul className="PlayList">
          {this.state.songs.map((item, index) => {
          return <li song={item.song} key={index}>{item.song}</li>})}
        </ul>
      </div>
      </React.Fragment>
    );
  }
}
export default App;
