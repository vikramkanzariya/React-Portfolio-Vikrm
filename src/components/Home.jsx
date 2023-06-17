import { motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import me from '../assets/me.jpeg'

const Home = () => {

    // const clientCount = useRef(null);
    // const projectCount = useRef(null);

    // const animationClientsCount = () => {
    //     animate(0 , 100 , {
    //         duration:1,
    //         onUpdate:(v) => clientCount.current.textContent = v.toFixed()
    //     })
    // }


    // const animationProjectsCount = () => {
    //     animate(0 , 500 , {
    //         duration:1,
    //         onUpdate:(v) => projectCount.current.textContent = v.toFixed()
    //     })
    // }

    const animations = {

        h1:{
            initial:{
                x:"-100%",
                opacity: 0,
            },
            whileInView:{
                x:0 , 
                opacity:1,
            }
        } ,

        
        button:{
            initial:{
            y:"-100%",
            opacity: 0,
            },
            whileInView:{
                y:0 , 
                opacity:1,
            }
        }

    }

  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1} >
                    Hi, I am <br /> Vikram Kanzariya
                </motion.h1>

                <Typewriter options={{
                    strings:["A Web-Develeloper" , "A Student" , " 3rd Year in B.E-Information Technology"] ,
                    autoStart: true,
                    loop:true,
                    wrapperClassName:"typewriterpara",
                    cursor:"",
                }} />

                <div>
                    <a href="mailto:vikramdalvadi@gmail.com">Hire Me</a>
                    <a href="#work">Projects <BsArrowUpRight /> </a>
                </div>

                {/* <article>
                    <p>
                        <motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>+
                    </p>

                    <span>Clients Worldwide</span>
                </article> */}


                <aside>
                <article>
                    <p>
                        {/* <motion.span whileInView={animationProjectsCount} ref={projectCount} ></motion.span> */}
                       5+
                    </p>

                    <span>Projects Done</span>
                </article>

                <article data-special>
                    <p>Contact</p>
                    <span>vikramdalvadi@gmail.com</span>
                </article>

                </aside>

            </div>
        </section>

        <section>
            <img src={me} alt="Vikram" />
        </section>

        <BsChevronDown />
    </div>
  )
}

export default Home