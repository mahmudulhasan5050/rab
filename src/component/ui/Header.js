import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';




function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    searchContainer: {
        width: "30%",
        
        marginLeft: 'auto',
        paddingRight: '5em',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        [theme.breakpoints.down('xs')]: {
            paddingRight: '0em',
            width: "50%"
        },
        [theme.breakpoints.down('md')]: {
            paddingRight: '0em',
            width: "50%"
        }
    },
    searchIcon: {
        alignSelf: "flex-end",
        marginTop: "0.7em"
    },

    inputText: {
        width: "20em",
        margin: "0.2em"
    }
}))


export default function Header(props) {
    const classes = useStyles();


const handleChange = (e) =>{
    props.setCompanyName(e.target.value);
}

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Typography variant="h3">MAINOS</Typography>
                        <div className={classes.searchContainer}>
                            <SearchIcon className={classes.searchIcon} />
                            <TextField className={classes.inputText}
                                label="Search Company"                              
                                onChange={handleChange} />
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}