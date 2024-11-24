import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SteamCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const claimedId = queryParams.get("openid.claimed_id");
        
        if (claimedId && claimedId.startsWith("https://steamcommunity.com/openid/id/")) 
        {
            const steamId = claimedId.split("/").pop(); // Извлекаем SteamID            
            fetch("http://localhost:8080/api/auth/steam/callback", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ steamId }),
                credentials: 'include',
            })
                .then((data) =>
                {
                    navigate("/profile");
                })
                .catch((error) => console.error("Verification failed", error));
        } else {
            console.error("Invalid Steam callback data");
            navigate("/login");
        }
    }, [navigate]);

    return <div>Processing Steam login...</div>;
}

export default SteamCallback;