import { Center, Title, Text } from '@mantine/core';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';

export const NoMatchPage = () => {
    return (
        <PageLayout>
            <Center py="lg">
                <div>
                    <Title align="center" mb="lg">Page not found</Title>
                    <Text align="center">The page you're looking for was not found</Text>
                </div>
            </Center>
        </PageLayout>
    );
};
