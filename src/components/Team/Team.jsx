import { useLoaderData } from "react-router";

const Team = () =>{
    const users = useLoaderData();
    console.log(users);
    
    return (
        <div>
            this is team
        </div>
    )
}

export default Team;