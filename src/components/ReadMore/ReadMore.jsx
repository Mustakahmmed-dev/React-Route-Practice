import { useLoaderData, useNavigate } from "react-router";

const ReadMore = () => {
    const users = useLoaderData();
    console.log(users)
    const { id, name, email, phone, website, company, address } = users;

    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Name: {name} </h3>
            <p>Contact: {email}, {phone} </p>
            <address>
                Address:
                {company.name}
                {address.city} {address.sreet}
            </address> <br />
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    )
}

export default ReadMore;