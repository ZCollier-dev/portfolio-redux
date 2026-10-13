import "../../styles/components/buttons/DarkModeButton.css"

import { useContext } from "preact/hooks";

// LEARNING NOTE: To use a non-default export, it must be placed within brackets.
import { ThemeContext } from "../../utils/ThemeContext";

export function DarkModeButton() {
  const theme = useContext(ThemeContext)

  return <>
    { theme ? <button className="dark-mode-button" onClick={() => theme.toggle()}>theme</button> : <></>}
  </>
}
