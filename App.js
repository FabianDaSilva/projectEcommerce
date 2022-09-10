import { Box, NativeBaseProvider } from 'native-base';

import LoginScreen from './src/Screens/LoginScreen';

export default function App() {
	return (
		<NativeBaseProvider>
			<Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
				<LoginScreen />
			</Box>
		</NativeBaseProvider>
	);
}
