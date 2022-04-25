import axios from "axios";

export const getUser = async (isUserLoading, setIsUserLoading, authToken) => {
    if(isUserLoading) return;

    try{
        setIsUserLoading(true);

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user`, {
            headers: {
                "auth-token": authToken
            }
        });

        setIsUserLoading(false);

        return{
            success: response.data.success,
            data: {
                user: response.data.data.user
            }
        };
    }
    catch(error){
        console.log(error.response.data.error);
        setIsUserLoading(false);

        return {
            success: false,
            error: (error?.response?.data?.error) ? error.response.data.error : "Internal Server Error!!"
        };
    }
}