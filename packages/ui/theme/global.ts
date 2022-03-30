import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";

const globalStyles = {
	global: (props: GlobalStyleProps) => ({
		body: {
			fontFamily: "body",
			color: mode("gray.700", "gray.100")(props),
			bg: mode("white", "gray.900")(props),
			scrollBehavior: "smooth",
			webkitFontSmoothing: "antialiased",
			fontSmoothing: "always",
			fontFeatureSettings: "tnum",
		},
		"h1, h2, h3, h4, h5, h6": {
			fontFamily: "heading",
			color: mode("gray.900", "white")(props),
		},
		_selection: {
			color: "#0B4A46",
			background: "#E7F2F1",
		},
	}),
};

export default globalStyles;
