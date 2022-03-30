import { useColorModeValue, useToken } from "@chakra-ui/react";

export function useColorModeToken(light: string, dark: string): string {
	return useToken("colors", useColorModeValue(light, dark));
}

export function useDimmedTextColor() {
	return useColorModeValue("gray.500", "whiteAlpha.600");
}

export function useErrorColor() {
	return useColorModeValue("red.600", "red.400");
}

const customColors = {
	gray: {
		50: "#fafafa",
		100: "#f5f5f5",
		200: "#e5e5e5",
		300: "#d4d4d4",
		400: "#a3a3a3",
		500: "#737373",
		600: "#525252",
		700: "#404040",
		800: "#262626", //	hsl(0, 0%, 15%)
		850: "#1f1f1f", //  hsl(0, 0%, 12%)
		900: "#171717", //	hsl(0, 0%, 9%)
		950: "#0f0f0f", //	hsl(0, 0%, 6%)
	},
	teal: {
		50: "#E7F2F1",
		100: "#D0E5E3",
		200: "#A0CAC8",
		300: "#71B0AC",
		400: "#419591",
		500: "#127B75",
		600: "#0E625E",
		700: "#0B4A46",
		800: "#07312F", // hsl(177, 75%, 11%)
		850: "#062321", // hsl(175, 73%, 8%)
		900: "#041917", // hsl(174, 72%, 6%)
	},
	orange: {
		50: "#FFF0ED",
		100: "#FFE2DA",
		200: "#FFC4B5",
		300: "#FFA790",
		400: "#FF896B",
		500: "#FF6C46",
		600: "#CC5638",
		700: "#99412A",
		800: "#662B1C",
		900: "#33160E",
	},
	peach: {
		50: "#FEF9F7",
		100: "#FDF3EF",
		200: "#FCE8DF",
		300: "#FADCD0",
		400: "#F9D1C0",
		500: "#F7C5B0",
		600: "#C69E8D",
		700: "#94766A",
		800: "#634F46",
		900: "#312723",
	},
	yellow: {
		50: "#FEF8E7",
		100: "#FDF0CF",
		200: "#FBE29E",
		300: "#FAD36E",
		400: "#F8C53D",
		500: "#F6B60D",
		600: "#C5920A",
		700: "#946D08",
		800: "#624905",
		900: "#312403",
	},
	lilac: {
		50: "#F9F7FC",
		100: "#F3EFF9",
		200: "#E7DEF3",
		300: "#DACEEE",
		400: "#CEBDE8",
		500: "#C2ADE2",
		600: "#9B8AB5",
		700: "#746888",
		800: "#4E455A",
		900: "#27232D",
	},
	sky: {
		50: "#F0F9FF",
		100: "#E0F2FE",
		200: "#BAE6FD",
		300: "#7DD3FC",
		400: "#38BDF8",
		500: "#0EA5E9",
		600: "#0284C7",
		700: "#0369A1",
		800: "#075985",
		900: "#0C4A6E",
	},
};

export default customColors;
