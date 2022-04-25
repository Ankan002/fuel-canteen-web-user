export const changeTheme = (currentTheme, setCurrentTheme) => {
    if(currentTheme === "dark"){
        localStorage.setItem("theme", "light");
        setCurrentTheme("light");
    }
    else{
        localStorage.setItem("theme", "dark");
        setCurrentTheme("dark");
    }
}