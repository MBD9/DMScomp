
function Loader() {
    return (
        <>
            <style>
                {`
                .loader-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    width: 100vw;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background-color: rgba(255, 255, 255, 0.8); /* Optional: background overlay */
                }

                .loader {
                    width: 48px;
                    height: 48px;
                    border: 5px solid #FFF;
                    border-bottom-color: #FF3D00;
                    border-radius: 50%;
                    box-sizing: border-box;
                    animation: rotation 1s linear infinite;
                }

                @keyframes rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                `}
            </style>
            <div className="loader-container">
                <span className="loader"></span>
            </div>
        </>
    );
}

export default Loader;

