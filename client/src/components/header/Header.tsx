import { useState, useContext } from "react"
import Profile from "../profile/Profile"
import "./header.css"
import { Link } from "react-router-dom"
import Dropdown from "../dropdown/Dropdown"
import { LoginContext } from "../../context/LoginContext"
import { PF } from "../../settings"

function Header () {
	const { state, dispatch } = useContext(LoginContext)
	const [dropdown, setDropdown] = useState<Boolean>(false)

	const handleLogout = () => {
		dispatch({ type: "LOGOUT"})
		window.location.replace("/")
	}

	return(
		<div className="header">
			<div className="headerLeft">
				<Link to="/" className="link">
					MoSiKaengE
				</Link>
			</div>
			<div className="headerCenter">
				<i className="fa-solid fa-magnifying-glass"></i>
				<input type="text" className="search" placeholder="Search"/>
			</div>
			<div className="headerRight">
				<ul className="headerList">
					<Link to="/" className="link">
						<li className="headerListItem">
							<i className="fa-sharp fa-solid fa-house"></i>
						</li>
					</Link>
					<li className="headerListItem">
						<i className="fa-regular fa-paper-plane"></i>
					</li>
					<Link to="/write" className="link">
						<li className="headerListItem">
							<i className="fa-regular fa-square-plus"></i>
						</li>
					</Link>
					<Link to="/explore" className="link">
						<li className="headerListItem">
							<i className="fa-regular fa-compass"></i>
						</li>
					</Link>
					<li className="headerListItem">
						<i className="fa-regular fa-heart"></i>
					</li>
					<li className="headerListItem">
						<div className="headerListItemProfile">
							<span onClick={() => setDropdown(!dropdown)}>
								<Profile name={state.user.profilePic ? PF + state.user.profilePic : "/no.jpg"}/>
							</span>
							<Dropdown visible={dropdown}>
								<ul>
									<Link to={`/${state.user._id}`} className="link">
										<li>
											<i className="fa-solid fa-user"></i>
											Profile
											</li>
									</Link>
									<Link to="/setting" className="link">
										<li>
											<i className="fa-solid fa-gear"></i>
											Setting
										</li>
									</Link>
									<hr />
									<li onClick={handleLogout}>
										Logout
									</li>
								</ul>
							</Dropdown>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header