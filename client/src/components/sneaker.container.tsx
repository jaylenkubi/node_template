import {Button, Container, Flex, Title} from "@mantine/core";

interface SneakerContainerProps {
	children?: React.ReactNode
}

export function SneakerContainer({children}: SneakerContainerProps) {
	return (
		<Container size="responsive">
			{children}
		</Container>
	)
}