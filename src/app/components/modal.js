import styles from "./modal.css";

const SuccessModal = (formData) => {
    let successMessage = `You have successfully registered your watch for use on your ${formData.data.handUsed} hand.`
    
    return (
        <div className="successModal">
            <h1>Success</h1>
            <p>{successMessage}</p>
            <p>{`Watch ID: ${formData.data.watchID}`}</p>
        </div>
    )
}

export default SuccessModal;