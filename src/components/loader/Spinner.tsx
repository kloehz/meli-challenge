import SpinnerSvg from "../../assets/images/Spinner.svg";

export const Spinner = () => {
    return (
        <div className="spinner-container">
            <img src={SpinnerSvg} className="spinner-image" />
        </div>
    )
}
