
import React, { useContext, useState } from 'react'

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


const ThemeContext = React.createContext({
  theme: themes.light,
  toggle: () => {

  }
});  // 传参？

export default function ContextHookTwo() {
  const [theme, setTheme] = useState(themes.light)
  return <ThemeContext.Provider value={{
    theme,
    toggle: () => {
      setTheme(theme => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
      })
    }
  }}>
    <Toobar></Toobar>
  </ThemeContext.Provider>
}

const Toobar = () => {
  return <ThemeButton></ThemeButton>
}
function ThemeButton() {
  const context = useContext(ThemeContext);

  return (
    <button style={{ background: context.theme.background, color: context.theme.foreground }} onClick={() =>
      context.toggle()
    }>I am styled by theme context!</button>
  )
}
