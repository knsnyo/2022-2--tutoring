import React from "react"
import "./account.css"

function Account () {
	return (
		<div className="account">
			<div className="accountWrapper">
				<form className="accountForm">
					<div className="accountFormPP">
						<img src="/profile.jpg" alt=""/>
						<label htmlFor="accountPP">
							<i className="fa-solid fa-image"></i>
						</label>
						<input type="file" id="accountPP" style={{display: "none"}}/>
					</div>
					<div className="accountFormGroup">
						<input type="text" placeholder="username"/>
						<input type="password" placeholder="password"/>
						<div className="accountFormButton">
							<button className="accountSubmit">Update</button>
							<button className="accountDelete">Delete</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Account