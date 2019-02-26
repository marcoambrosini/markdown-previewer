import React from "react"
import styled from "styled-components"

import StyledEditor from "./styled/StyledEditor"

export default function Editor(props) {
  return (
    <StyledEditor className="editor">
      <form>
        <textarea
          rows="20"
          cols="50"
          id="editor"
          placeholder={props.input}
          onChange={props.handleInputChange}
        />
      </form>
    </StyledEditor>
  )
}
