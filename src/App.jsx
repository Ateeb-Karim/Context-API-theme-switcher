import React from 'react'
import './App.css'
import ThemeContext from './Context/ThemeContext'
import CardUI from './Components/CardUI'

function App() {
  const [themeMode, setThemeMode] = React.useState("light");

  function darkTheme() {
    setThemeMode("dark");
  }
  function lightTheme() {
    setThemeMode("light");
  }

  React.useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.toggle(themeMode);
  }, [themeMode])

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-gray-600">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
            <CardUI />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
