import React from "react"
import { ApplyForm } from "../organisms/Form"
import { Button } from "../atoms/Button"

export const App: React.VFC = () => {
  return (
    <div>
      App
      <ApplyForm />
      <Button text="button" />
    </div>
  )
}
