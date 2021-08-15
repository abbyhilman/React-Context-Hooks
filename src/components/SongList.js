import React, { useState, useEffect, useContext } from "react";
import { v1 as uuidv1 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv1() }]);
  };
  useEffect(() => {
    console.log(songs);
  }, [songs]);
  const { isLigthTheme, light, dark } = useContext(ThemeContext);
  const theme = isLigthTheme ? light : dark;
  return (
    <div
      className="song-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul style={{ background: theme.ui }}>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>add 1 age {age}</button>
    </div>
  );
};

export default SongList;
