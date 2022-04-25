import axios from "axios";

export const signIn = async(signingIn, setSigningIn, googleProfile) => {
    if(signingIn) return;
    
    try{
        setSigningIn(true);

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, {
            name: googleProfile.displayName,
            email: googleProfile.email,
            providerId: googleProfile.uid,
            image: googleProfile.photoURL
        });
        setSigningIn(false)

        return{
            success: response.data.success,
            data: {
                authToken: response.headers?.authtoken
            }
        };
    }
    catch(error){
        console.log(error.response.data.error);
        setSigningIn(false)

        return {
            success: false,
            error: (error?.response?.data?.error) ? error.response.data.error : "Internal Server Error!!"
        };
    }
};