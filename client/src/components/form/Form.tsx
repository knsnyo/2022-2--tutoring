import React from "react"
import "./form.css"

function Form () {
	return (
		<div className="form">
			<div className="formPreview">
				test
			</div>
			<form className="formWrite">
				<div className="formWriteGroup">
					<label htmlFor="fileInput" className="formWriteGroupLabel">
						<i className="fa-solid fa-image"></i>
					</label>
					<input id="fileInput" type="file" multiple={true} style={{display: "none"}}/>
				</div>
				<div className="formWriteGroup">
					<textarea
						placeholder="Tell your story"
					/>
				</div>
				<div className="formWriteGroup">
					<button className="formWriteGroupSubmit" type="submit">
						Upload
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form