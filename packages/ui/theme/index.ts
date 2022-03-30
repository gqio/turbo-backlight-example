import { extendTheme } from "@chakra-ui/react";
import customColors from "./colors";
import componentStyles from "./components";
import typographyStyles from "./typography";
import globalStyles from "./global";
import customSpace from "./space";

export const theme = extendTheme({
	config: {
		useSystemColorMode: false,
	},
	colors: {
		...customColors,
	},
	components: {
		...componentStyles,
	},
	...typographyStyles,
	styles: {
		...globalStyles,
	},
	shadows: {
		outline: "0 0 0 3px rgba(113, 176, 172, 0.6)",
	},
	...customSpace,
});
