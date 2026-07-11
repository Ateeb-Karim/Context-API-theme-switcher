import React from "react";

export const themeContext = React.createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})