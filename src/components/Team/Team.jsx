import { useLoaderData } from "react-router";
import TeamMember from "./TeamMember";
import './Team.css'


const Team = () =>{
    const users = useLoaderData();
    // console.log(users);

    return (
        <div className="team-cards-container">
            {
                users.map(user => <TeamMember key={user.id} user={user}></TeamMember>)
            }
        </div>
    )
}

export default Team;