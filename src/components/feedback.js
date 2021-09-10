import { Button } from "./button";
import { useState } from "react";

export const Feedback = (props) => {
  return(
    <div>
      <Button onClick={props.handleGood} text="good"/>
      <Button onClick={props.handleNeutral} text="neutral"/>
      <Button onClick={props.handleBad} text="bad"/>
    </div>
  )
}