import {Outlet} from "react-router-dom";

function Profile(){
    return(
        <div>
            <h1>Profile Page!!</h1>
            <p>Something else...</p>
            <Outlet />
        </div>
    );
}

export default Profile;