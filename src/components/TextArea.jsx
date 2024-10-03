import {useEffect, useState} from "react";

const notAllowedWords = ["dog", "cat", "parrot", "fish"];

const TextArea = ({text, setText}) => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    console.log(text);
  }, [text]);

  //Handle and process the text changing in the textarea
  const handleTextChange = (event) => {
    const containsNotAllowedWords = notAllowedWords.some(word => event.target.value.includes(word));
    setShowWarning(containsNotAllowedWords);
    setText(event.target.value);

    // //Remove all not allowed words from the text
    // notAllowedWords.forEach(word => {
    //   //const regex = new RegExp(`\\b${word}\\b`, 'gi');  //Words only
    //   const regex = new RegExp(`${word}`, 'gi');
    //   filteredText = filteredText.replace(regex, '');
    // });
  }

  return (
    <div className="textarea">
      <textarea
        placeholder={"Start typing..."}
        spellCheck={false}
        value={text}
        onChange={handleTextChange}
      />
      {showWarning &&
        <Warning/>
      }
    </div>
  )
}

export default TextArea;

const Warning = () => {

  //Get a formatted list of not allowed words
  const words = notAllowedWords
    .map((notAllowedWord) => notAllowedWord)
    .join(", ");

  return (
    <p className="warning">
      The following words are not allowed : [{words}]
    </p>
  )
}