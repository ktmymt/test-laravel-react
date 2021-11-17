import React from "react"

interface Props {
  text: string
}

export const Button: React.VFC<Props> = (props) => {
  return <button>{props.text}</button>
}
