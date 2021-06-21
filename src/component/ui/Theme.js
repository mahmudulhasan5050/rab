import { createMuiTheme } from '@material-ui/core/styles';


const myBlue = "#0B72B9";
const myOrange = "#FFBA60"
export default createMuiTheme({
    palette:{
        common:{
            blue: `${myBlue}`,
            orange: `${myOrange}`
        },
        primary: {
            main: `${myBlue}`
        },
        secondary: {
            main: `${myOrange}`
        }
    },
    typography:{
        h3:{
            fontWeight: 300
        }
    }
})