import React from "react"

export default function AccountItem({ url, title }) {
  return (
    <li key={url}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </li>
  )
}
