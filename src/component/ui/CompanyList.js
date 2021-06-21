import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles(theme => ({


}))

export default function CompanyList(props) {
    const classes = useStyles();

    return (
        <div>
            {props.companyName && props.companyName.forEach(element => {
                <div>
                    <div>{element.name}</div>
           {console.log(element.name)}

                </div>
            })}
        </div>
    )
}