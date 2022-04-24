import SpinnerGif from "./Assets/spinner.gif";
function Spinner() {
    return (
        <img
            style={{
                margin: "auto",
                display: "block",
            }}
            src={SpinnerGif}
            alt="loading"
        />
    );
}

export default Spinner;
