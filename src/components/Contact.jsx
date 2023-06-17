import React, { useState } from 'react'
import vg from '../assets/vg.jpg';
import toast from "react-hot-toast";
import { motion } from 'framer-motion';
import { addDoc , collection} from "firebase/firestore";
import{ db } from "../firebase";

const Contact = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");
  const[disableBtn , setDisableBtn] = useState(false);

  const SubmitHandler = async(e) => {
    // ---> is Used to Prevent Data Or Display Data in Console
    e.preventDefault();
    setDisableBtn(true);

    try {
      await addDoc(collection(db , "contacts") , {
      name,
      email,
      message,
    });

    setName("");
    setEmail("");
    setMessage("");

    toast.success("Message Sent.");
    setDisableBtn(false);
      
    } catch (error) {
      toast.error("Some Error");
      console.log(error);
      setDisableBtn(false);
    }
  
  };

  const animations = {
    form:{
      initial:{
        x:"-100%",
        opacity:0
      },

      whileInView:{
        x:0,
        opacity:1
      },
    },


    button:{
      initial:{
        y:"-100%",
        opacity:0
      },

      whileInView:{
        y:0,
        opacity:1
      },
      transition:{
        delay:0.5,
      }
    }
  }

  return (
    <div id='contact'>
      <section>
        <motion.form action="" onSubmit={SubmitHandler} {...animations.form} >
          <h2>Contact Me</h2>

          <input
           type="text" 
           placeholder='Enter Your Name...' 
           value={name}
           onChange={(e) => setName(e.target.value)}
           required 
           />

          <input
          type="email"  
          placeholder='Enter Your Email...' 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          />

          <input 
          type="text"
          placeholder='Enter Your Message...' 
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          required   
          />

          <motion.button  
            className={disableBtn ? "disableBtn" : ""}
            disabled={disableBtn}
            {...animations.button} 
            type="submit">
            Send
          </motion.button>

        </motion.form>
      </section>

      <aside>
        <img src={vg} alt="Graphics" />
      </aside>

    </div>
  )
}

export default Contact