const componentStyles = {
	Heading: {
		baseStyle: {
			fontFamily: "heading",
			fontWeight: 800,
		},
		sizes: {
			h1: {
				fontSize: ["6xl", null, "7xl"],
				lineHeight: 1,
			},
			h2: {
				fontSize: ["5xl", null, "6xl"],
				lineHeight: 1,
			},
			h3: {
				fontSize: ["4xl", null, "5xl"],
				lineHeight: [1.2, null, 1],
			},
			h4: {
				fontSize: ["3xl", null, "4xl"],
				lineHeight: [1.33, null, 1.2],
			},
			h5: {
				fontSize: ["2xl", null, "3xl"],
				lineHeight: [1.33, null, 1.2],
			},
			h6: { fontSize: "xl", lineHeight: 1.2 },
			sm: { fontSize: "md", lineHeight: 1.2 },
			xs: { fontSize: "sm", lineHeight: 1.2 },
		},
	},
};

export default componentStyles;
