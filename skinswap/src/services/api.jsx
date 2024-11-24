const API_URL = "http://localhost:8080/api";

export const setTradeLink = async (tradelink1) =>
{
    try 
    {
        const response = await fetch(API_URL+"/change-tradelink", {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({tradelink: tradelink1}),
        });
    }
    catch (error)
    {
        console.error('Ошибка при выполнении PATCH-запроса:', error);
        return error;
    }
}

export async function getLocalUser()
{
    let value = null;
    try 
    {
        const response = await fetch(API_URL+"/profile", 
        {
            method: 'GET',
            credentials: 'include', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: null,
        });
        if (!response.ok) {
            throw new Error('Failed to fetch profile');
        }
        value = response.json();
    }
    catch (error)
    {
        console.error('Ошибка при выполнении GET-запроса:', error);
        return error;
    }
    return value;
};

export const getUserById = async (id) =>
{
    
}