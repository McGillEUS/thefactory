import { ArrowLeftRight, CalendarRange, CircuitBoard, Clock, FolderOpen, HandHelping, Microchip, Presentation, School, UsersRound, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";
import {Divider} from "@mui/material";


function Home() {
    return (  
        <>
        <div className="h-[770px] bg-factory-green flex items-center justify-center ">
            <img src="/FactoryBoxWithText.png" alt="" />
        </div>

        <div className="h-[1100px] bg-factory-black text-white font-medium px-40 pt-20 flex flex-col items-center " >
            <h2 className="text-4xl text-center">What is the Factory?</h2>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: 'white',
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '0.8rem',
                marginBottom: '1rem',
            }}/>
            <p className="mt-3 text-lg mb-8 text-center">The Factory is a hardware design lab run by students, for students in the department of Electrical, Computer, and Software Engineering at McGill University. The Factory is a dedicated space in room 0080 of the Trottier building for developing personal projects, gaining experience with the latest hardware, or just brainstorming ideas with fellow students. The Factory aims to foster an environment of innovation and collaboration where the resources are provided to make your ideas become a reality.</p>
            <h2 className="text-4xl text-center mb-4">Where is the Factory?</h2>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: 'white',
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '0.3rem',
                marginBottom: '1rem',
            }}/>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.1323685966454!2d-73.58157548804465!3d45.50741393043357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a3829eadafd%3A0x304925aa0c44027d!2sTrottier%20Bldg%2C%203630%20Rue%20University%2C%20Montreal%2C%20QC%20H3A%200C6%2C%20Canada!5e0!3m2!1sen!2suk!4v1723555839549!5m2!1sen!2suk" width="1000" height="300" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe>
            <div className="flex gap-4 justify-center mt-14">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/H-EEBm-rxqw?si=X_x06NfcIzyQxJbe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="flex flex-col items-center gap-4">
                <h3 className="text-center text-2xl">FAQ</h3>
                <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: 'white',
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '0rem',
                marginBottom: '0.5rem',
            }}/>
                <p>"I'm not in ECSE, can I still be a member of the Factory?</p>
                <p>"Do I have to be a member to use the Factory? Even for just a once-off use?"</p>
                <p>"I need to use the Factory for a class project, is that okay?"</p>
            </div>
            </div>

        </div>

        <div className="h-[630px] bg-white px-36 pt-20 flex flex-col items-center" >
            <h2 className="text-center text-4xl font-medium">MEMBERSHIP</h2>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: 'black',
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}/>
            <p className="text-lg mt-6 text-center">Becoming a member of the factory is free and gives you access to a space dedicated to creativity. Whether you want to use the space to work on personal projects, gain experience with hardware, or brainstorm ideas with fellow students, the Factory is the place for you!</p>
            <h3 className="text-center font-semibold text-2xl mt-6">Membership Benefits</h3>

            <div className="flex mt-10 gap-32"> 
                <ul className="flex-1 flex flex-col gap-y-4">
                    <li className="flex gap-3 ">
                    <Clock />
                    <p>Access to the lab during opening hours</p>
                        
                        </li>
                    <li className="flex gap-3 ">
                    <CircuitBoard />
                    <p>Use of advanced equipment available in the lab</p></li>
                    <li className="flex gap-3">
                    
                    <Microchip />
                    <p>Access to components for personal projects</p>
                    
                        
                        
                        </li>
                    <li className="flex gap-3"> 
                    <ArrowLeftRight />
                    <p>Rental of equipment for personal projects</p></li>

                </ul>
                <ul className="flex-1 gap-y-4 flex flex-col ">
                    <li className="flex gap-3 ">
                    <UsersRound />
                    <p>Collaboration with other members</p></li>

                    <li className="flex gap-3 ">
                    <HandHelping />
                        <p>Support from experienced managers</p>
                        
                        </li>
                    <li className="flex gap-3 ">
                    <School />
                    <p>Available training on lab safety and equipment use</p>
                    </li>
                    <li className="flex gap-3"><Presentation />
                    <p>Participation in workshops</p>
                        </li>
                
                </ul>
            </div>

            <button className="bg-factory-green p-3 rounded-lg mt-14 text-white font-semibold" >
                BECOME A MEMBER
            </button>


        </div>

        <div className="h-[500px] bg-factory-black text-white font-medium px-40 pt-20 flex flex-col items-center " >
            <h2 className="text-4xl text-center">Learn more</h2>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: 'white',
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}/>
            <div className="flex px-28 mt-10 gap-64"> 
                <ul className="lex-1 flex flex-col gap-y-20">
                   
                    <Link to="/office-hours" className="flex flex-col items-center gap-2"><CalendarRange size={44}/>
                    <p className="text-4xl">Offifce Hours</p></Link>
                
                    <Link to='/' className="flex flex-col items-center gap-2">
                    <FolderOpen size={44}/>
                    <p className="text-4xl">Resources</p>
                    </Link>
                    

                </ul>
                <ul className=" flex-1 gap-y-20 flex flex-col ">
                    <li className="flex flex-col items-center gap-2">
                    <Presentation size={44}/>
                    <p className="text-4xl">Workshops</p>
                    </li>
                    <li className="flex flex-col items-center gap-2">
                        <Warehouse size={44}/>
                        <p className="text-4xl">Inventory</p>
                    </li>
                </ul>
            </div>
            
        </div>
        </>
    );
}

export default Home;