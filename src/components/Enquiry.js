import axios from "axios";
import { useState } from "react";
import emailjs from '@emailjs/browser'; 

const Enquiry = () => {

    let ename= sessionStorage.getItem('custName') ? sessionStorage.getItem('custName') : '';
    let email = sessionStorage.getItem('custEmail') ? sessionStorage.getItem('custEmail') : ''; 

    let [enquiryObj, setEnquiryObj] = useState({'ename': ename, 'email': email, 'remarks': ''});
    let [successMsg, setSuccessMsg] = useState('');

    let changeHandler = (e) => {
        setEnquiryObj({...enquiryObj, [e.target.name]: e.target.value});
    }

    let clickHandler = async (e) => {
        e.preventDefault();
        console.log(enquiryObj); 

        try{

            let resp = await axios.post('http://localhost:3002/register', {...enquiryObj});
            let data = await resp.data;
            console.log(data);
            setSuccessMsg('Thanks for reaching out! We will get back to you soon!')

        }catch(error){
            console.log(error); 
        }

        //code to send email
        const templateParams = {
          name: enquiryObj.ename,
          notes: enquiryObj.remarks
      };

      //console.log(templateParams.name); 
     
      emailjs.send('service_4rpls1k','template_0yys9v3', templateParams, 'YVmuISrxuDM_z5fOI')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });   
    }

    if( !(successMsg==='')){
    return (      
        <div>
        <h6 className="text-primary"> {successMsg} </h6>
        </div>
        )
      }
    else{
        return (<>
    
            <h3>Contact Us</h3>
           
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" onChange={changeHandler} name="ename" value={sessionStorage.getItem('custName')} id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                        
                </div>
        
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" onChange={changeHandler} name="email" value={sessionStorage.getItem('custEmail')} id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                </div>
        
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Remarks</label>
                    <input type="text" onChange={changeHandler} name="remarks" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                </div>
        
                <p className="form-text text-muted">Cannot submit unless all the fields are filled in</p>
         <input name="" id="" onClick = {clickHandler} className="btn btn-primary" type="button" value="Submit" disabled = {!(enquiryObj.ename) || !(enquiryObj.email) || !(enquiryObj.remarks)}/> 
        </>);
    }
    
}

 
export default Enquiry;

