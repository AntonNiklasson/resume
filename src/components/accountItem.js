import React from "react"
import { Icon } from "."

export default function AccountItem({ url, icon, title }) {
  return (
    <li key={url}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon ? <Icon name={icon} /> : null}
        {title}
      </a>
    </li>
  )
}
