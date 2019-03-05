import React from "react"
import styled from "styled-components"

import TextArea from "./styled/TextArea"
import StyledEditor from "./styled/StyledEditor"

export default function Editor(props) {
  return (
    <StyledEditor>
      <h6>Write your markdown here</h6>
      <TextArea
        autoFocus
        cols="50"
        id="editor"
        className="editor"
        placeholder={props.input}
        onChange={props.handleInputChange}
      />
    </StyledEditor>
  )
}
