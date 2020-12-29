
import React, { useContext } from 'react'

const themes = {
  light: {
    foreground: "yellow",
    background: "red"
  },
  dark: {
    foreground: "green",
    background: "pink"
  }
};


const ThemeContext = React.createContext();  // 传参？
const ThemeTwo = React.createContext();
function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toobar></Toobar>
    </ThemeContext.Provider>
  )
}

function Toobar() {
  return (
    <div>
      <ThemeTwo.Provider value={themes.dark}>
        <ThemeButton></ThemeButton>
      </ThemeTwo.Provider>
    </div>
  )
}
function ThemeButton() {
  const theme = useContext(ThemeContext);
  const theme22 = useContext(ThemeTwo);
  console.log(theme, theme22, "theme")

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>
  )
}

export default App;