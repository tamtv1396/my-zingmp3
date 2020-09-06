import React from "react";

export default function MenuTop(props){

  return (
    <a className="t-item-menu" href={props.menupath}>{props.menuname}</a>
  )
  
}