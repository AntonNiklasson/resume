import Markdown from "react-markdown"
import { formatExperienceTime, andify } from "../utils"

const Container = styled.div`
  margin: 0 0 2em 0;
  page-break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }
`

export default function ExperienceItem({
  title,
  organization,
  time,
  logo,
  description,
  tech
}) {
  return (
    <Container>
      <header>
        <h2>{title}</h2>
        <div
          css={`
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            padding-top: 0.5em;
          `}
        >
          <time
            css={`
              font-size: 0.95em;
              color: ${p => p.theme.textSecondary};
              font-weight: bold;
              margin-right: 2em;
            `}
          >
            {formatExperienceTime(time)}
          </time>
          <h3>{organization}</h3>
          {logo && (
            <img
              css={`
                margin-left: 1em;
                max-width: 1.5em;
              `}
              src={require(`../logos/${logo}`)}
            />
          )}
        </div>
      </header>
      <div
        css={`
          margin: 0.5em 0;
          font-size: 0.875rem;

          p {
            margin: 0 0 1em 0;

            &:last-child {
              margin-bottom: 0;
            }
          }
        `}
      >
        <Markdown source={description} />
      </div>
      {tech && (
        <div
          css={`
            background: #ddd;
            margin: 0.5em 0;
            padding: 0.5em;
            border-left: 3px solid #aaa;
          `}
        >
          <h4>Tech: </h4>
          <ul
            css={`
              margin: 0;
              font-size: 0.9em;
            `}
          >
            {andify(tech)}
          </ul>
        </div>
      )}
    </Container>
  )
}
