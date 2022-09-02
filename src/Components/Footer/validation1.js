function Validation1(values) {
    let errors1={};
    if(!values.email){
        errors1.email="Please enter your Email"
        
        }
        else if(!/\S+@\S+\.\S+/.test(values.email)){
          errors1.email="Email is invalid"
        }
if(!values.mess){
        errors1.mess="Please enter your Message"
       
      }
      return (
        errors1
       )
     }
     
     export default Validation1