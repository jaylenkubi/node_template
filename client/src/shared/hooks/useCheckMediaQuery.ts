import {useMediaQuery} from "@mantine/hooks";


export function useCheckMediaQuery() {
	const isSmallScreen = useMediaQuery('(max-width: 480px)');
	const isMediumScreen = useMediaQuery('(max-width: 768px)');
	const isLargeScreen = useMediaQuery('(min-width: 1020px)');
	return {isSmallScreen, isMediumScreen, isLargeScreen}
}