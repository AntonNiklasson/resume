import Markdown from "react-markdown"
import { formatExperienceTime } from "../utils"

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
            justify-content: space-between;
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
          <div
            css={`
              display: flex;
              align-items: center;
            `}
          >
            <h3>{organization}</h3>
            {logo && (
              <img
                css={`
                  margin-left: 0.5em;
                  max-width: 1.5em;
                `}
                src={require(`../logos/${logo}`)}
              />
            )}
          </div>
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
            background: #eee;
            padding: 1em;
            font-size: 0.9em;
            border: 1px solid #ccc;
            border-radius: 3px;
            box-shadow: 0 15px 20px -10px #00000022;
            margin: 1em 0;
          `}
        >
          <h3>Highlights:</h3>
          <ul
            css={`
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              font-size: 0.85em;
              padding: 0 1em;
              list-style: square;
            `}
          >
            {tech.map(t => (
              <li
                key={t}
                css={`
                  padding: 0;
                  margin: 0.2em;
                  white-space: nowrap;
                `}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  )
}
