import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --bg-primary: linear-gradient(to right top,#7e79a8,#736f9e,#686694,#5d5c8b,#525381,#544f7f,#574c7d,#5a487a,#6c487c,#7e487b,#8e4778,#9e4773);
        --bg-box: rgba(66, 63, 87, 0.25);
        --primary: #423F57;
        --red: #CA4242;
        --light-red: #dea3a3;
        --lumber: #FFDFD3;
        --light: #fcfcfc;
        --dark: #18191A;
        --shadow-light: 0 4px 8px 0 #ffffff4d ;
        --shadow-dark: 0 4px 8px 0 #00000040;;
    }

    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Noto Sans', sans-serif;
        color: white;
        background-image: var(--bg-primary);
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
            100% {
            opacity: 1;
         }
    }

    .fade-in {
        animation: fade-in 1s ease-in-out;
    }

`;
