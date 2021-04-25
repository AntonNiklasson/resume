import React from "react"
import Markdown from "react-markdown"
import { formatExperienceTime } from "../utils"

export default function ExperienceItem({
  title,
  organization,
  time,
  logo,
  description,
  tech
}) {
  return (
    <div className="flex flex-col py-5 my-5 border-b">
      <header className="flex justify-between mb-2 relative">
        <div>
          <h2 className="font-bold text-lg">{title}</h2>
          <h3 className="font-bold text-gray-500">{organization}</h3>
          <time className="text-sm text-gray-500">
            {formatExperienceTime(time)}
          </time>
        </div>
        {logo && (
          <div>
            <img
              className="w-16 h-16 rounded shadow"
              src={require(`../logos/${logo}`)}
            />
          </div>
        )}
      </header>
      <div className="text-sm">
        <Markdown source={description} />
      </div>
      {tech && (
        <div className="mt-4 text-sm">
          <strong>Tech:</strong> {tech.join(", ")}
        </div>
      )}
    </div>
  )
}
