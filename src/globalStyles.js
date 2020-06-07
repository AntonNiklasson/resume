import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: ${p => p.theme.background};
                font: 18px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	h1,h2,h3,h4,h5,h6 {
		line-height: 1.2;
                font-weight: normal;
                font-family: 'DM Serif Text', serif;
	}

	ul {
		margin: 1em 0 1em 1em;
		list-style: square outside;

		&.no-style {
			margin: 1em 0;
			list-style-type: none;
		}

		li {
			margin: .3em 0;
		}
	}

        img {
                max-width: 100%;
                border-radius: 3px;
        }

	@page {
		size: auto;
		margin: 0cm;
	}
`
