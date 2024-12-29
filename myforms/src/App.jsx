
import react from 'react';
 export default function App() {

  function handlesubmit(event) {
    event.preventDefault();
   const formEl =event.currentTarget;
   const formData= new FormData(formEl);
   const gmail = formData.get('email');
   console.log(gmail);
   formEl.reset();
  }
  return(
    <section>
      <h3>Signup Form</h3>
 
  <form onSubmit={handlesubmit}method='post'>   
  
    <label>Email: </label>
    <input name='email' placeholder="abcd@gmail.com"/>
    <br/>
    <br />
    <label>Password:</label>
    <input name='password' placeholder='password'/>
    <br/>
    <br/>

    <button>submit</button>
      </form>
  </section>
  )
}









 
