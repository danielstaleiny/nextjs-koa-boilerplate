import css from 'styled-jsx/css'

// global styles applied for every page

// html setup
const fontSize = '20px'
const lineHeight = 1.4
const baseFontWeight = 300
//breaking flex to mobile layout (units in px)
const breakFlex = 800

export default css`
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
    html {
        font-size: ${fontSize};
    }

    body {
        font-family: Lato, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
        font-size: ${fontSize};
        line-height: ${lineHeight};
        text-rendering: optimizeLegibility;
        -moz-font-feature-settings: 'liga' on;
        font-weight: ${baseFontWeight};
        font-style: normal;
        color: #000;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    * {
        margin: 0;
        padding: 0;
        min-height: 0;
        min-width: 0;
    }
    li {
        list-style: none;
    }
    a {
        cursor: pointer;
        caret-color: transparent;
        text-decoration: none;
        outline: none;
    }
    a:active {
        outline: none;
    }
    a:hover,
    a:focus {
        outline: none;
    }

    .main-wrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    .container {
        flex: 1;
        max-width: 1200px;
        margin: 0 auto;
    }
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .center {
        justify-content: center;
        text-align: center;
    }
    .right {
        justify-content: flex-end;
        text-align: right;
    }

    @media screen and (max-width: ${breakFlex}px) {
        .m-center {
            justify-content: center;
            text-align: center;
        }
    }
    .vertical-center {
        align-items: center;
    }
    .column {
        flex-basis: 100%;
    }
    @media screen and (min-width: ${breakFlex}px) {
        .column {
            flex: 1;
        }
    }

    .normal,
    .regular {
        font-weight: 400;
    }

    .bold,
    .heavy {
        font-weight: bold;
    }

    .block {
        display: block;
    }
    .inline-block {
        display: inline-block;
    }
    .no-outline,
    .no-outline:active,
    .no-outline:focus,
    .no-outline:hover {
        outline: none;
    }
    .relative {
        position: relative;
    }
    .transparent {
        background-color: transparent;
    }
    .over-hidden {
        overflow: hidden;
    }
    .caps {
        text-transform: uppercase;
    }
    .mg-auto {
        margin-right: auto;
        margin-left: auto;
    }
    .mg-auto-left {
        margin-left: auto;
    }
    .mg-auto-right {
        margin-left: auto;
    }
    .wrap {
        flex-wrap: wrap;
    }
    .wrap-reverse {
        flex-wrap: wrap;
    }
    .no-wrap {
        flex-wrap: no-wrap;
    }
    .flex-column {
        flex-direction: column;
    }
    .flex-row {
        flex-direction: row;
    }
    .space-around {
        justify-content: space-around;
    }
    .space-between {
        justify-content: space-between;
    }
    .flex1 {
        flex: 1;
    }
    .flex0 {
        flex: 0 0 auto;
    }
    .flex01 {
        flex: 0 1 auto;
    }
    .justify-end {
        justify-content: flex-end;
    }
    .self-center {
        align-self: center;
    }
`
