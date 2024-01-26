import {MantineProvider} from "@mantine/core";
import {theme} from "./assets/theme/theCube.theme.ts";
import '@mantine/core/styles.css'
function App() {

  return (
	  <MantineProvider theme={theme}>

	  </MantineProvider>
  )
}

export default App
