import { FormControl } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


export default function ContactForm() {
    return(
       <div>
<FormControl>
<InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
   
</FormControl>
<Button type = "submit">Send</Button>
        </div>
    )
}