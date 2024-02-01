import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import {appTheme} from "./assets/theme/theCube.theme.ts";
import {Router} from "./router.tsx";

function App() {
	return (
		<MantineProvider theme={appTheme}>
			<Router/>
		</MantineProvider>
	)
}

export default App
