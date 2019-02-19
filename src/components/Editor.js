import React from "react"
import styled from "styled-components"

export default function Editor(props) {
  return (
    <form>
      <textarea
        rows="50"
        cols="50"
        id="editor"
        placeholder={props.input}
        onChange={props.handleInputChange}
      />
    </form>
  )
}
