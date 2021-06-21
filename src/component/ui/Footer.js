import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import footerlogo from '../../assets/footer_logo.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        position: "absolute"
    },
    footerLogoFix: {
        width: "20em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]:{
            width: "13em"
        },
        [theme.breakpoints.down("xs")]:{
            width: "8em"
        }
    }
}))
export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <img alt="footerlogo_pic"
                src={footerlogo}
                className={classes.footerLogoFix} />
        </footer>
    )
}