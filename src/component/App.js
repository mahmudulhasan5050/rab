import React, {useState, useEffect} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Axios from 'axios';

import theme from './ui/Theme';
//import Header from '../component/ui/Header';
import CompanyList from '../component/ui/CompanyList';
//import ContactForm from '../component/ui/ContactForm';
//import Footer from '../component/ui/Footer';


function App() {

  useEffect(() => {
    Axios.get("http://arif88.pythonanywhere.com/api/company-list").then((response) => {
      setCompanyName(response.data);
    });
  }, []);

  const [companyName, setCompanyName] = useState("");

console.log("Company", companyName)
  return (
   <ThemeProvider theme={theme}>
     <CompanyList companyName = {companyName}/>

   </ThemeProvider>
  );
}

export default App;
