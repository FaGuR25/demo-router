import {useParams} from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Mario from "./Mario";
import Luigi from "./Luigi";

function Profile(){
    const {name} = useParams();
    return(
        <div>
            <h1>Profile Page!!</h1>
            <p>Something else...</p>
            {
            name === "mario"? (
            <Mario />
            ):name === "luigi"?(
            <Luigi />):(
                <DefaultProfile />
            )}
        </div>
    );
}

export default Profile;