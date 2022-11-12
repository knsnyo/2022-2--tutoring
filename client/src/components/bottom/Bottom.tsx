import { useContext } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext"
import { PF } from "../../settings"
import Profile from "../profile/Profile"
import "./bottom.css"

function Bottom () {
	const { state, dispatch } = useContext(LoginContext)
	const handleLogout = () => {
		dispatch({ type: "LOGOUT"})
	}
	return (
		<div className="bottomRight">
				<ul className="bottomList">
					<Link to="/" className="link">
						<li className="bottomListItem">
							<i className="fa-sharp fa-solid fa-house"></i>
						</li>
					</Link>
					<li className="bottomListItem">
						<i className="fa-regular fa-paper-plane"></i>
					</li>
					<Link to="/write" className="link">
						<li className="bottomListItem">
							<i className="fa-regular fa-square-plus"></i>
						</li>
					</Link>
					<Link to="/explore" className="link">
						<li className="bottomListItem">
							<i className="fa-regular fa-compass"></i>
						</li>
					</Link>
					<li className="bottomListItem">
						<i className="fa-regular fa-heart"></i>
					</li>
					<Link to="/setting" className="link">
						<li className="bottomListItem">
							<i className="fa-solid fa-gear"></i>
						</li>
					</Link>
					<li className="bottomListItem" onClick={handleLogout}>
						<i className="fa-solid fa-power-off"></i>
					</li>
					<Link to={`/${state.user._id}`} className="link">
						<li className="bottomListItem">
							<div className="bottomListItemProfile">
								<Profile name={state.user.profilePic ? PF + state.user.profilePic : "/no.jpg"}/>
							</div>
						</li>
					</Link>
				</ul>
			</div>
	)
}

export default Bottom