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
        --light-silver: #D3DEDC;
        --shadow-light: 0 4px 8px 0 #ffffff4d ;
        --shadow-dark: 0 4px 8px 0 #00000040;
        --fa-edit: #434774;
        --fa-delete: #ff5757;
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
        font-size: 16px;
        height: inherit;
    
    }

    h1, h3, p {
        margin-bottom: 0;
    }

    ::-webkit-scrollbar-track {
        background: var(--primary);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--light-red);
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
            100% {
            opacity: 1;
         }
    }

    @keyframes spin {
        from {
             transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
            }
    }

    @keyframes dash {
        0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        }
      
        50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
        }
      
        100% {
        stroke-dashoffset: -125px;
        }
    }

    
    @keyframes zoom {
        0% {
            opacity: 0;
            transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0px, 0px);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
      
        60% {
            opacity: 1;
            transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0px, 0px);
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        }
    }

    @keyframes bounce {
        0%, 60%, 75%, 90%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
  
        0% {
            opacity: 0;
            transform: translate3d(0px, 3000px, 0px);
            }

        60% {
            opacity: 1;
            transform: translate3d(0px, -25px, 0px);
            }

        75% {
            transform: translate3d(0px, 10px, 0px);
            }

        90% {
            transform: translate3d(0px, -5px, 0px);
        }

        100% {
            transform: none;
        }
  }

    .fade-in {
        animation: fade-in 1s ease-in-out 0s both;
    }

    .zoom {
        animation: zoom 1s ease-in-out 0s both;
    }

    .bounce {
    animation: bounce 1s ease-in-out 0.5s both;
    }

`;
