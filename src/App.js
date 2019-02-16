import React, { useState, useEffect } from "react"
import "./App.css"
import marked from "marked"

export default function App() {
  const [input, setInput] = useState("")
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
    <div>
      <div>
        <textarea
          id="editor"
          placeholder="put your text here"
          onChange={handleInputChange}
        />
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: output }} />
    </div>
  )
}
