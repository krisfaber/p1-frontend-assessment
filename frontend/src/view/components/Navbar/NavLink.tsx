import { createStyles } from '@mantine/core';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BaseComponent } from '../../../app/interfaces/BaseComponent';
import { useGenericStyles } from '../../../app/styles/useGenericStyles';

interface NavLinkProps extends BaseComponent {
    href: string;
}

const useStyles = createStyles((theme) => ({
    link: {
        display: 'block',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: 'white',
    },
}));

export const NavLink = ({ children, href }: NavLinkProps) => {
    const { classes } = useStyles();
    const { classes: genericClasses } = useGenericStyles();

    return (
        <Link to={href} className={classNames(classes.link, genericClasses.hoverable)}>
            {children}
        </Link>
    );
};
