import { Link } from 'react-router';
import './TeamMemberCard.css';

const TeamMember = ({user}) => {
    // console.log(user)
    
    const {id, name, email, phone, website} = user;

    return(
        <div className="team-member-card">
            <h3>Name: {name} </h3>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
            <p>Website: {website} </p>
            <Link to={`/team/${id}`}>Read More</Link>
        </div>
    )
}

export default TeamMember;