import Markdown from "react-markdown"
import { formatExperienceTime } from "../utils"

const ExperienceItemContainer = styled.div`
  margin: 0;
  page-break-inside: avoid;
  border-left: 2px solid ${p => p.theme.border};
  padding: 1em 1em 1em 2em;
  position: relative;

  &:first-child {
    border-image: linear-gradient(transparent, ${p => p.theme.border} 3em) 1;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 2.5em;
    left: -0.4em;
    width: .8em
    height: .8em
    border-radius: 50%;
    background: ${p => p.theme.border};
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
    <ExperienceItemContainer>
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
        {tech && (
          <p>
            Noteworthy technologies included in this project: {tech.join(", ")}.
          </p>
        )}
      </div>
    </ExperienceItemContainer>
  )
}
