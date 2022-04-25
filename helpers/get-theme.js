export const getTheme = () => {
    const currentTheme = localStorage.getItem("theme");

    if(!currentTheme){
        localStorage.setItem("theme", "dark");
        return "dark"
    }

    return currentTheme;
}