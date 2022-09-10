import {Box, Heading, Image, Input, VStack} from 'native-base';

import Colors from '../constanst/colors';

const LoginScreen = () => {
	return (
		<Box flex={1} bg={Colors.black}>
			<Image
				flex={1}
				alt="Logo"
				resizeMode="cover"
				size="lg"
				w="full"
				source={require('../../assets/fondo.jpg')}
			/>
			<Box
				w="full"
				h="full"
				position="absolute"
				top="0"
				justifyContent="center"
			>
				<Heading>LOGIN</Heading>
				<VStack space={5} pt="6">
					<Input
						variant="underline"
						placeholder="Usuario@gmail.com"
						w="70%"
						colors={Colors.main}
						borderBottomColor={Colors.underLine}
					/>
				</VStack>
			</Box>
		</Box>
	);
};
export default LoginScreen;
