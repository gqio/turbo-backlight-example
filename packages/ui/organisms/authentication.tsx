import {
	Button,
	Container,
	Divider,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";
import { Logo } from "../atoms/logo";
import { GoogleIcon, GitHubIcon, TwitterIcon } from "../atoms/icons";

export const Authentication = () => (
	<Container maxW='md' py={{ base: "12", md: "24" }}>
		<Stack spacing='8'>
			<Stack spacing='6'>
				<Logo height='12' width='auto' />
				<Stack spacing={{ base: "2", md: "3" }} textAlign='center'>
					<Heading>Log in to your account</Heading>
					<HStack spacing='1' justify='center'>
						<Text color='muted'>Don't have an account?</Text>
						<Button variant='link' colorScheme='blue'>
							Sign up
						</Button>
					</HStack>
				</Stack>
			</Stack>
			<Stack spacing='6'>
				<Stack spacing='4' pt='4'>
					<FormControl>
						<FormLabel htmlFor='email' fontWeight='medium'>
							Email
						</FormLabel>
						<Input id='email' type='email' placeholder=' ' />
					</FormControl>
					<Button variant='solid' colorScheme='teal'>
						Continue with email
					</Button>
				</Stack>
				<HStack>
					<Divider />
					<Text fontSize='sm' color='muted'>
						OR
					</Text>
					<Divider />
				</HStack>
				<Stack spacing='3'>
					<Button
						variant='outline'
						colorScheme='twitter'
						leftIcon={<TwitterIcon boxSize='5' />}
						iconSpacing='3'
					>
						Continue with Twitter
					</Button>
					<Button
						variant='outline'
						leftIcon={<GoogleIcon boxSize='5' />}
						iconSpacing='3'
					>
						Continue with Google
					</Button>
					<Button
						leftIcon={<GitHubIcon boxSize='5' />}
						iconSpacing='3'
						variant='outline'
					>
						Continue with GitHub
					</Button>
				</Stack>
			</Stack>
		</Stack>
	</Container>
);
