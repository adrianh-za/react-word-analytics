import TextArea from "./TextArea.jsx";
import Stats from "./Stats.jsx";
import {useState} from "react";
import {FACEBOOK_MAX_CHARS, INSTAGRAM_MAX_CHARS} from "../lib/constants.js";

const Container = () => {
  const [text, setText] = useState("");

  //Calculate stats to be passed to the Stats component
  const stats = {
    numberOfChars : text.length,
    numberOfWords : text.split(" ").filter(word => word !== "").length,
    instagramCharsLeft : INSTAGRAM_MAX_CHARS - text.length,
    facebookCharsLeft : FACEBOOK_MAX_CHARS - text.length
  }

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats}/>
    </main>
  )
}

export default Container;
