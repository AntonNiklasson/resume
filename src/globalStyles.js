import { createGlobalStyle } from "styled-components"

const Styles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		padding: 1em 0;
		background: ${p => p.theme.background};
		font: 16px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	h1,h2,h3,h4,h5,h6 {
		line-height: 1.2;
		font-weight: 500;
	}

	ul {
		margin: 1em 0 1em 1em;
		list-style: square outside;

		&.no-style {
			margin: 1em 0;
			list-style-type: none;
		}
	}
`

export default Styles
