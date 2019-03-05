import React, { useState, useEffect } from "react"
import "./App.css"
import marked from "marked"
import placeHolderText from "./placeHolderText"
import Draggable, { DraggableCore } from "react-draggable"

import Editor from "./components/Editor"
import Header from "./components/Header"

export default function App() {
  const [input, setInput] = useState(placeHolderText)
  const [output, setOutput] = useState("")

  function handleInputChange(e) {
    setInput(e.target.value)
  }

  function parseInput(input) {
    setOutput(marked(input))
  }

  useEffect(() => {
    parseInput(input)
  })

  return (
    <div className="App">
      <Header />

      <Editor
        className="editor"
        input={input}
        handleInputChange={handleInputChange}
      />
      <div
        className="output"
        id="preview"
        dangerouslySetInnerHTML={{ __html: output }}
      />
    </div>
  )
}
