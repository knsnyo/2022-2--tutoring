import React from "react"
import "./modal.css"

function Modal (setModal: any) {
	return (
		<div className="modal">
			<button className="modalButton" onClick={() => setModal(false)}>
				<i className="fa-solid fa-x"></i>
			</button>
			<div className="modalBody">
			</div>
		</div>
	)
}

export default Modal

/**
 * https://joylee-developer.tistory.com/184
*/