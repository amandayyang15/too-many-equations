import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import './variables.css';

const GlobalStyle = createGlobalStyle`
    ${fonts};

    * {
        background-color: var(--dark-bg);
        color: white;
    }

    html {
        height: 100%;
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
        background-color: var(--dark-bg);
    }

    h1 {
        font-family: 'Figtree', sans-serif;
        font-weight: 700;
        color: white;
        line-height: 1rem;
        text-transform: uppercase;
        padding-top: 40px;
    }

    h2 {
        font-family: 'Figtree', sans-serif;
        font-weight: 600;
        font-size: var(--fz-lg);
        color: white;
        line-height: 0rem;
        text-transform: uppercase;
    }

    p {
        font-family: 'Figtree', sans-serif;
        font-weight: 400;
        color: white;
        font-size: var(--fz-sm);
        line-height: 0rem;
    }

    .input-error {
        font-weight: 400;
        font-style: italic;
        color: var(--turqoise)
    }

    div {
        width: 100%;
    }

    .subheading {
        font-family: 'Figtree', sans-serif;
        font-weight: 400;
        color: var(--light-grey);
        font-size: var(--fz-sm);
        line-height: 0.8rem;
    }

    main {
        padding-top: 50px;
        margin: 0px auto;
        width: 100%;
        max-width: 1000px;
        padding: 0 45px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .page-section {
        margin: 0px auto;
        width: 100%;
    }

    textarea {
        width: 100%;
        background: var(--light-grey-lvl1);
        resize: none;
        overflow: auto;
        border: none;
        color: white;
        outline: 0px none transparent;
        spellcheck: false;
        autocomplete: off;
        autocorrect: off;
        autocapitalize: off;
    }

    .input-section {
     margin: 0px auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .equations-section {
        width: 100%;
    }

    .variables-section {
        width: 50%;
    }

    .buttons-section {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 200px;
    }

`;

export default GlobalStyle;
