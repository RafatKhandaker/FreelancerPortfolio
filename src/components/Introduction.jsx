import React from 'react';
import './css/Introduction.css';
import Speech from './javascript/Speech';
import VerticalLinearStepper from './javascript/VerticalLinearStepper';

class Introduction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                showTask: false,
                expanded : false,
                title : "LOOKING TO HIRE A SOFTWARE ENGINEER?",
                style : {}
            }
    }
    
    informative = [
        "What is the difference between a programmer and engineer.....",
        "....a programmer uses skills to build applications from the bottom up",
        "an Engineer is an experienced architect who has knowledge to design...",
        "... solve problems that has been resolved "

    ]

    paragraphs = [
        "Embark on a journey through the evolution of the internet with Rafat Khandaker, a visionary born during the Dot Com Era in 1991. At the tender age of 9, Rafat's father gifted him a Windows 98 gateway machine, a relic that ignited his passion for the online realm. From the days of dial-up connections to the lightning speed of FIOS & Satellite, Rafat witnessed the internet's transformative journey.",
        "From Myspace to the inception of Facebook, Rafat Khandaker has been a silent witness to the ever-changing landscape of social media. Today, with 8 years of professional programming experience, Rafat specializes in breathing new life into antiquated web applications, seamlessly transitioning them into robust, modern cloud-based structures. His expertise spans from mobile to web development, encompassing middleware security, worker services, data operations, and database migrations.",
        "Rafat's odyssey extends beyond coding – he has actively contributed to the design and architecture of expansive cloud applications and played a pivotal role in shaping the landscape of the Internet of Things (IoT). Armed with a Bachelor's degree in Cyber Network Security & Cloud Computing from ECPI University and currently pursuing a Master's degree in Cyber Security at Johns Hopkins University, Rafat is dedicated to staying at the forefront of technological advancements.",
        "The pursuit of knowledge doesn't end there – Rafat holds postgraduate certificates in Quantum Computing and Artificial Intelligence from MIT, showcasing his commitment to mastering cutting-edge technologies. Additionally, he has earned the prestigious AWS Cloud Practitioner Certification, solidifying his position as a trailblazer in cloud design.",
        "Throughout his illustrious career, Rafat Khandaker has been a catalyst for transformation in multiple Fortune 500 companies. From revolutionizing Telecommunications and Financial sectors to leaving an indelible mark on Media and E-commerce platforms, Rafat's expertise has played a pivotal role in shaping the digital landscapes of industry giants such as Comcast, Viacom, and Bank of America. His impact extends far beyond coding – it's a legacy of innovation that has reshaped the very fabric of diverse industries. Engage with Rafat, and witness the convergence of experience, passion, and transformative vision for your next groundbreaking project.",       
        "As you engage with Rafat Khandaker, you're not just getting a programmer – you're gaining access to a seasoned professional whose journey through the annals of the internet has uniquely positioned him as a leader in web/mobile development and cloud design. Join hands with Rafat to bring your digital aspirations to life, backed by the expertise of someone who has not only witnessed but actively shaped the evolution of the online world."
    ]

    render(){
        return ( 
            <div className={"container intro-body-wrapper"}style={{ color: "burlywood", fontWeight: "bold"}}>
                 <h1 className={"title"} styles={{float: "left"}}>{this.state.title}</h1>
                 <div style={{overflowY: "auto", height: 700 }}>
                    <div className={"information"} style={{width: "fit-content"}}>

                        <VerticalLinearStepper />
                    </div>
                    <div className={"paragraphs"}>     
                        <Speech style={{ textAlignLast: "end", marginLeft: "37%"}} text={this.paragraphs.join()} />
                        { this.paragraphs.map(p => <p>{p}</p> ) }              
                    </div>
                 </div>
            </div>
        )
    }
}

export default Introduction;