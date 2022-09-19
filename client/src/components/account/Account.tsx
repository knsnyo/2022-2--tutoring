import React from "react"
import "./account.css"

function Account () {
	return (
		<div className="account">
			<div className="accountWrapper">
				<form className="accountForm">
					<div className="accountFormPP">
						<label htmlFor="accountPP">
							<img src="/profile.jpg" alt=""/>
						</label>
						<input type="file" id="accountPP" style={{display: "none"}}/>
					</div>
					<div className="accountFormGroup">
						<input type="text" placeholder="username"/>
						<input type="text" placeholder="name"/>
						<textarea placeholder="introduce" style={{width: "80%"}}></textarea>
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