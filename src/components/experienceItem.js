import Markdown from "react-markdown"
import { formatExperienceTime, andify } from "../utils"

const Container = styled.div`
  margin: 0 0 1.5em 0;
  page-break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }
`
const Tech = styled.div`
  margin: 1em;
  padding: 0.5em;
  font-size: 0.9em;
  border-left: 3px solid ${p => p.theme.border};

  h3 {
    display: inline;
    font-size: 0.8em;
    font-weight: bold;
    text-transform: uppercase;
    color: ${p => p.theme.textLight};
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
      <header
        css={`
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;

          time {
            font-weight: bold;
            font-size: 0.8em;
            color: ${p => p.theme.textSecondary};
          }

          img {
            margin: 0 0 0 0.5em;
            height: 1em;
            border-radius: 0.2em;
          }
        `}
      >
        <h4>{title}</h4>
        <time>{formatExperienceTime(time)}</time>
        <div
          css={`
            display: flex;
            align-items: center;
          `}
        >
          <h4>{organization}</h4>
          {logo && <img src={require(`../logos/${logo}`)} />}
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
        <Tech>
          <h3>Tech: </h3>
          {andify(tech)}
        </Tech>
      )}
    </Container>
  )
}
