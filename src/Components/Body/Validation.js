function Validation(values) {
    let errors={};
    if(!values.name){
        errors.name="Please enter your  name"
        
        }
        
    
    if(!values.email){
    errors.email="Please enter your Email"
    
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
      errors.email="Email is invalid"
    }
    if(!values.number){
      errors.number="Please enter your Number"
     
    }
    else if(!/(\+91[\-\s]?)?[0]?(91)?[789]\d{9}/.test(values.number)){
        errors.number="Number is invalid"
      }
      if(!values.pan){
        errors.pan="Please enter your Pan Number"
       
      }
      else if(!/([A-Z]){5}([0-9]){4}([A-Z]){1}$/.test(values.pan.toUpperCase())){
        errors.pan="Pan Number is invalid"
      }
    
    
      return (
       errors
      )
    }
    
    export default Validation