import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	/* background-color: #fff9ea; */
	/* background-color: rgba(65, 62, 99, 0.74); */
	/* font-family: "Poppins", sans-serif; */
	font-family: "Sora", sans-serif;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*{
    box-sizing: border-box;
}

html {
	scroll-behavior: smooth;
}

.slide-in {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: #0f0f0f;
	transform-origin: top;
	z-index: 9999;
}

.slide-out {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: #0f0f0f;
	transform-origin: bottom;
	z-index: 9999;
}

h1, h2, h3 {
	color: rgb(230, 196, 133);
}

button {
	cursor: pointer;
	border-radius: 3px;
}

span {
	color: #672E17;
}
`

export default GlobalStyle;