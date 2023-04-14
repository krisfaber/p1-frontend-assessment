import { createStyles, MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import './App.css';
import { colors } from './app/constants/colors';
import AppRouter from './app/router';
import { store } from './app/store/store';

const useStyles = createStyles((theme) => ({
    bodyBackground: {
        backgroundColor: colors.lightBackground,
        minHeight: '100vh',
    },
}));

function App() {
    const { classes } = useStyles();

    return (
        <Provider store={store}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <div className={classes.bodyBackground}>
                    <AppRouter />
                </div>
            </MantineProvider>
        </Provider>
    );
}

export default App;
