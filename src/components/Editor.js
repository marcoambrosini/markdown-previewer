import React from "react"
import styled from "styled-components"

export default function Editor(props) {
  return (
    <form className="editor">
      <textarea
        id="editor"
        placeholder={props.input}
        onChange={props.handleInputChange}
      />
    </form>
  )
}
