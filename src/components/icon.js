import Github from "../icons/github.svg";
import Linkedin from "../icons/linkedin.svg";
import Twitter from "../icons/twitter.svg";
import Javascript from "../icons/javascript.svg";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  stackoverflow: Javascript
};

const Container = styled.span`
  display: inline-flex;
  vertical-align: middle;
  margin: 0.2em;
  font-size: 1.5em;

  svg {
    width: 1em;
    height: 1em;
    margin: auto;
    fill: CurrentColor;
  }
`;

export default function Icon({ name }) {
  return (
    <Container>
      {iconMap[name] ? React.createElement(iconMap[name]) : null}
    </Container>
  );
}
