import React from 'react';
import './css/home.css'
import websiteImage from "../images/360_F_246628725_HO5rjCq9v1ETJ7xty0IZ8J95nuRIOltW.jpg";
import mobileImage from "../images/mobile-website-development-technology.png";
import cloudDatabaseImage from "../images/shutterstock_1988260253-1024x576.png";
import cloudIntegrationImage from "../images/webb.png";
import microserviceImage from "../images/istockphoto-1307193323-612x612.jpg";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showTask: false,
            expanded : false 
        }
    }
    title = "8 Years Engineering Cloud Technologies";
    texts= [
        "Web, Mobile, IoT, Cyber Security and Artificial Intelligence",
        "Partner With Me To Unlock Your Business Potential! ",
        " Tier 1 Cloud ",
        `Tier 1 cloud consists of a single cloud application, a single web page that exists on the internet. 
        This solution is an introduction to services usually designed to encourage clients to want to learn more about a product or business.`,
        `This is a good business fit model for a starting business that wants to start advertising to a community in a local region or engage users to connect with the vendor product.`,
        `Total Cost Estimate: $150 to $600`,
       
        `Tier 2 Cloud `,
        `Tier 2 cloud applications introduces a middleware technology, allowing communication of information to other applications such as mobile devices.
        It is a scalability feature to communicate data flow and transitions, which is the first initial step to communicating information between multiple cloud services`,
        `Middleware services allow features like sending emails, pushing notificaitons, communication with 3rd party cloud providers and provides ability to communicate data between multiple UX devices`,
        `Total Cost Estimate: $1,000 to $2,500`,
       
        `N-Tier Cloud`,
        `N-Tier Cloud integrates, at a minimum, a web application with a middleware service and database. Any application that is more than 2 layers deep is considered N-tier architecture design.
         This cloud design typically involves an application layer, business layer and database layer.`,
        `N-Tier integration allows information persistance, manages user account history, involves data operations and consistant storage of information across multiple applications.`,
        `Total Cost Estimate: $1,200 to $5,000`,

        `Service Oriented Cloud`,
        `Service oriented cloud design is the beginning of decoupled architecture, where a cloud application has become large enough to start decoupling into self contained services.
         These self contained services becomes separate applications for example, sending emails, persisting user login, developing back end worker services for automation and preprocessing of data`,
        `Creating supplemental applications for operations, like account management team, workflow escalation tool, inventory count. As the data grows in operation, so do the services. This level of work
        is defined by the maturity of the business model where a cloud service is capable of generating 10s of thousands of dollars, or more per month. Capable of handling many users within a region or few.`,
        `Total Cost Estimate: $5,000 to $50,000`,

        `Micro Service Cloud`,
        `Microservice cloud is a scalability solution to decouple service oriented cloud into multiple instances, called micro services.
         It is a solution that seeks to decouple a single database instance within a region into multiple database instances within a single region, for each region across the globe. The same strategy is applied to 
         other services including email services, message queue systems, distributed caching systems, file storage services, sms texting service instance.. etc`,
        `Microservices are typically managed by large teams in the cloud environment, where cloud design architecture becomes critical in managing user activity across the globe.
        Meta is a company that hires 10s of thousands of engineers to manage billions of user data across the entire globe to generate billions of dollars in revenue.`,
        `Cost: $50,000+ or millions or more`,


    ]

    pictures = [websiteImage, mobileImage, cloudDatabaseImage, cloudIntegrationImage ]

    render(){
        return ( 
            <div className="app-body-wrapper" style={{width: "100%", maxWidth: 1000, marginBottom: 200, overFlowY: "auto"}}>
                <h1 style={{borderBottom: "solid", textAlign: "center"}}>{this.title}</h1>
                <h2 style={{}}>{this.texts[0]}</h2>
                <h2 style={{float: "right"}}>{this.texts[1]}</h2>
                <div className="info-container" style={{marginTop: 0}}>
                    <div className="info-img" style={{textAlign: "center"}}>
                        <p style={{ color: "aquamarine", fontStyle: "italic"}}>Impact | Local Community</p>
                        <img  className="pop-shadow" src={websiteImage}></img>
                    </div>
                    <div className="info-text" style={{ display: "inline-grid", height: 0, marginTop: "2.5%"}}>
                        <h1 className="info-title" style={{ marginLeft: 20, borderBottom: "solid", height: "fit-content", marginBottom: 0}}>{this.texts[2]}</h1>
                        <p style={{marginLeft: 20}}>{this.texts[3]}</p>
                        <p style={{marginLeft: 20}}>{this.texts[4]}</p>
                        <p className={"cost"} style={{marginLeft: 20}}>{this.texts[5]}</p>
                    </div>
                    <div className="info-img-mobile" style={{textAlign: "center", marginTop: 250}}>
                        <p style={{color: "aquamarine", fontStyle: "italic", marginTop: 120}}>Impact | Local Community</p>
                        <img className="pop-shadow" style={{ width: "100%"}}src={websiteImage}></img>
                    </div>
                </div>
                <div className="info-container">                    
                    <div style={{ display: "inline-grid", height: 0, marginTop: "-2.5%"}}>
                        <h1 className="info-title" style={{ textAlign: "end", marginRight: 20, borderBottom: "solid", height: "fit-content", marginBottom: 0}}>{this.texts[6]}</h1>
                        <p style={{marginRight: 20}}>{this.texts[7]}</p>
                        <p style={{marginRight: 20}}>{this.texts[8]}</p>
                        <p className={"cost"} style={{marginRight: 20}}>{this.texts[9]}</p>
                    </div>
                    <div className="info-img" style={{ textAlign: "center"}}>
                        <p style={{color: "aquamarine", fontStyle: "italic"}}>Impact | Community to limited Region</p>
                        <img className="pop-shadow" style={{maxWidth: 620, marginTop: "0%"}} src={mobileImage}></img>
                    </div>
                    <div className="info-img-mobile" style={{textAlign: "center", marginTop: 420}}>
                        <p style={{color: "aquamarine", fontStyle: "italic"}}>Impact | Community to limited Region</p>
                        <img className="pop-shadow" style={{width: "100%", marginTop: "0%"}} src={mobileImage}></img>
                    </div>
                </div>
                <div className="info-container" style={{marginTop: 80}}>
                    <div className="info-img" style={{ textAlign: "center"}}>
                        <p style={{color: "aquamarine", fontStyle: "italic"}}>Impact | Community to Region</p>
                        <img className="pop-shadow" style={{maxWidth: 620}}  src={cloudDatabaseImage}></img>
                    </div>
                    <div style={{ display: "inline-grid", height: 0, marginTop: "0%"}}>
                        <h1 className="info-title" style={{ marginLeft: 20, borderBottom: "solid", height: "fit-content", marginBottom: 0}}>{this.texts[10]}</h1>
                        <p style={{marginLeft: 20}}>{this.texts[11]}</p>
                        <p style={{marginLeft: 20}}>{this.texts[12]}</p>
                        <p className={"cost"} style={{marginLeft: 20}}>{this.texts[13]}</p>
                    </div>
                    <div className="info-img-mobile" style={{ textAlign: "center", marginTop: 380}}>
                        <p style={{color: "aquamarine", fontStyle: "italic"}}>Impact | Community to Region</p>
                        <img className="pop-shadow" style={{ width: "100%"}}  src={cloudDatabaseImage}></img>
                    </div>
                </div>
                <div className="info-container" >                    
                    <div style={{ display: "inline-grid", height: 0, marginTop: "-2.5%"}}>
                        <h1 className="info-title" style={{ textAlign: "end", marginRight: 20, borderBottom: "solid", height: "fit-content", marginBottom: 0}}>{this.texts[14]}</h1>
                        <p style={{marginRight: 20}}>{this.texts[15]}</p>
                        <p style={{marginRight: 20}}>{this.texts[16]}</p>
                        <p className={"cost"} style={{marginRight: 20}}>{this.texts[17]}</p>
                    </div>
                    <div className="info-img" style={{ textAlign: "center"}}>
                        <p style={{color: "aquamarine", fontStyle: "italic"}}>Impact | Regional Solution</p>
                        <img className="pop-shadow" style={{maxWidth: 620, marginTop: "0%"}} src={cloudIntegrationImage}></img>
                    </div>
                    <div className="info-img-mobile" style={{ textAlign: "center", marginTop: 600}}>
                        <p style={{color: "aquamarine", fontStyle: "italic"}}>Impact | Regional Solution</p>
                        <img className="pop-shadow" style={{width: "100%"}} src={cloudIntegrationImage}></img>
                    </div>
                </div>
                <div className="info-container" style={{ marginTop: 180}}>
                    <div className="info-img" style={{textAlign: "center"}}>
                        <p style={{color: "aquamarine", fontStyle: "italic"}}>Impact | Multi-Regional to Global Solution</p>
                        <img className="pop-shadow" style={{maxWidth: 620}}  src={microserviceImage}></img>
                    </div>
                    <div style={{ display: "inline-grid", height: 0, marginTop: "-5%"}}>
                        <h1 className="info-title" style={{ marginLeft: 20, borderBottom: "solid", height: "fit-content", marginBottom: 0}}>{this.texts[18]}</h1>
                        <p style={{marginLeft: 20}}>{this.texts[19]}</p>
                        <p style={{marginLeft: 20}}>{this.texts[20]}</p>
                        <p className={"cost"} style={{marginLeft: 20}}>{this.texts[21]}</p>
                    </div>
                    <div className="info-img-mobile" style={{textAlign: "center", marginTop: 560}}>
                        <p style={{color: "aquamarine", fontStyle: "italic"}}>Impact | Multi-Regional to Global Solution</p>
                        <img className="pop-shadow" style={{width: "100%"}}  src={microserviceImage}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;