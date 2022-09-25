import "./reply.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { IReply, IUser } from "../../interface"

interface IProps {
	re: IReply
}

function ReplyDetail ({re}: IProps) {
	const [user, setUser] = useState<IUser>({})
	useEffect(() => {
		const findUser = async () => {
			try {
				const res = await axios.get(`/api/user/${re.user_id}`)
				setUser(res.data)
			} catch (err: unknown) {
				console.log(err)
			}
		}
		findUser()
	}, [user, re.user_id])

	return (
		<div className="postDescription">
			<span><strong>{user.username}&nbsp;</strong>{re.description}</span>
		</div>
	)
}

export default ReplyDetail