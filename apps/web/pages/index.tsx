import { Box } from "@chakra-ui/react";
import { Authentication } from "ui/organisms/authentication";

export default function Web() {
	return (
		<Box h='100vh' w='100%' backgroundColor='gray.100'>
			<Authentication />
		</Box>
	);
}
