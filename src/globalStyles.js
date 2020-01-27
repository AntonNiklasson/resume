import { createGlobalStyle } from "styled-components"

const Styles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		margin: 1em;
		padding: 0;
		background: ${p => p.theme.background};
		font: 18px 'Helvetica Neue', Helvetica, Arial, sans-serif;

		@media print {
			margin: 2cm;
		}
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

	@page {
		size: auto;
		margin: 0cm;
	}
`

export default Styles
