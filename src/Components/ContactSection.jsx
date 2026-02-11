import { useState } from "react";
import { MdAddCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import contactImage from '../assets/contact.jpg'
const ContactSection = () => {
   const [inputData, setInputData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // form submit status state, true when user submut form or false
  const [formSubmited, setFormSubmited] = useState("")
  // form Confirmation message state, set message based on response
  const [formConfirmMsg, setFormConfirmMsg] = useState("demo")
  
  // Set inout value to state
  const setInputValue = (e) =>{
    const { name, value } = e.target;
    setInputData({...inputData, [name]: value})
  }
  
  // form submission 
  const formSubmit = async (e) =>{
    e.preventDefault();
    const {name, email, message} = inputData;
    
    // Create a from for sending contact details into server
    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);
  }

  return (
    <section id="contact_us" className="w-full py-16 px-5 md:px-10 lg:px-15 bg-white text-offblack/70 dark:bg-offblack dark:text-secondary/70">
      
      <div className='max-w-7xl mx-auto flex justify-center items-center flex-col md:flex-row md:gap-6'>
      <div className="flex-2 mb-4  text-center flex  justify-center bg-white md:rounded-xl max-w-md">
        <img loading="lazy" src={contactImage} alt="Conatct Us imgae" className="w-full  mx-auto md:rounded-xl rounded-xl mix-blend-multiply dark:brightness-90 object-fit" height="100%" width="100%" />
      </div>
      <form  onSubmit={formSubmit} className="flex-3 w-full  grid gap-2  relative bg-transparent">
      {
        // Confirmation Message 
      }
      <div id="confirmation" className={`${formSubmited === '' && 'hidden'} ${formSubmited ? 'text-green-600' : 'text-red-600'} font-medium mb-6`}>{formConfirmMsg}</div>
        <h3 className="text-3xl sm:text-3xl md:text-4xl text-center font-bold text-offblack dark:text-secondary pb-4 md:mb-1">Connect With Us</h3>
        <div className="absolute inset-0 z-[-1] blur-[100px] rounded-xl bg-[radial-gradient(circle_at_center,rgba(255,120,110,0.4),rgba(110,120,255,0.4))]"></div>
        <input name='name' onChange={setInputValue} value={inputData.name} type="text" placeholder="Enter Name" required className="w-full p-3 rounded-md dark:bg-white/90 bg-secondary/20 text-offblack dark:text-offblack text-base shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" autoComplete="true"/>
        <input name='email' onChange={setInputValue} value={inputData.email} type="email" placeholder="Enter Email ID" required className="w-full p-3 rounded-md dark:bg-white/90 bg-secondary/20 text-offblack dark:text-offblack text-base shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" autoComplete="true"/>
        <textarea name='message' onChange={setInputValue} value={inputData.message} placeholder="Message Here..." required className="w-full h-32 p-3 rounded-md dark:bg-white/90 bg-secondary/20 text-offblack dark:text-offblack text-base shadow border border-transparent resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"></textarea>
        <button type="submit" className="mr-auto my-2" >
          <a className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-800 ml-0 mr-auto">
            Get Connected
          </a>
        </button>
      </form>
      </div>
    </section>
  )
}
export default ContactSection