import { sendFriendRequest } from "../services/api";


const Relationships = () => {  
    function buttonHandler()
    {
        sendFriendRequest("76561198892181827")
    }

    return(
        <div>
            <button class="invite-button" onClick={buttonHandler}>Hello world!</button>
        </div>
    )
}

export default Relationships;