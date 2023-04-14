import { Center, Title, Text } from '@mantine/core';

export const NoMatchPage = () => {
    return (
        <Center py="lg">
            <div>
                <Title align="center" mb="lg">
                    Page not found
                </Title>
                <Text align="center">The page you're looking for was not found</Text>
            </div>
        </Center>
    );
};
