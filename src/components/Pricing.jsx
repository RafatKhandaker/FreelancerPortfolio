import React from 'react';

class Pricing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showTask: false,
            expanded : false 
        }
    }

    render(){
        return ( 
            <div className="app-body-wrapper" style={{ marginBottom: 200}}>
                <h1 style={{borderBottom: 'solid', width: 'fit-content'}}>Pricing Structure: How Much Do I Charge?</h1>
                <p style={{}}>{`My pricing structure varies depending on the type of labor agreement.`}</p>
                <div style={{ marginLeft: 30}}>
                    <p style={{}}>{`- For freelance labor, I cater to individuals or private clients seeking consultation for their personal business ventures.`}</p>
                    <p style={{}}>{`- Contract labor pertains to third-party recruiters aiming to fulfill 1099 to W2 contracts for both private and public enterprises.`}</p>
                    <p style={{}}>{`- Annual salaried arrangements involve direct employment by private or public companies.`}</p>
                </div>
                <p style={{}}>{`For newcomers to freelance work with startup concepts for websites or mobile applications, 
                I provide an overview of how my freelance rates align with their business requirements. I offer consultancy 
                services to guide clients through project delivery, streamlining the process with pre-planning project management, 
                time estimation, and meeting deadlines. By establishing clear timelines upfront, clients can negotiate rates confidently. 
                Once terms are agreed upon, I organize tasks, delivery schedules, and payment structures for ease of management. 
                My flexible approach includes a refund policy where dissatisfaction within the first iteration warrants a 50% refund, 
                although subsequent iterations are non-refundable. Clients have the option to terminate the service at any time, 
                and documentation ensures continuity for future collaboration with other freelancers if desired.`}</p>
                <div style={{ marginLeft: 30}}>
                    <p style={{}}>{`For a glimpse of the scope of projects and services offered, I recommend visiting the`} <a href="/"><b style={{color: 'aquamarine'}}>homepage</b></a> Additionally, a preview of the work achievable within the first hour of engagement is outlined below</p>
                    <p style={{}}>{`- A general visualization of the kind of work I can deliver within the`} <b style={{color: "chartreuse"}}>1st hour ($100.00) of delivery </b> entails. <b style={{color: 'gold'}}>Please scroll below...</b></p>
        
                </div>
                <table style={{color: "burlywood", fontWeight: "bold"}}>
                    <tr>
                        <td><p style={{padding: 10, color: "beige"}}><b>Freelance</b></p></td>
                        <td style={{ display: "inline-flex", width: "-webkit-fill-available"}}><p style={{padding: 10}}><b style={{color: "chartreuse"}}>$100.00</b><b style={{marginLeft: 10}}>hourly</b> + $15 Domain/SSL Costs (Fixed Annual Per Domain) + Cloud Administration Costs $10 (Monthly)</p></td>
                        <td style={{ display: "inline-flex", width: "-webkit-fill-available"}}><p style={{padding: 10}}><b>Development Time, Project Management, Architect & Design Solution, Administration.</b></p><br/><p>Please Note: (Above rate depict Tier 1 service standard pricing. N-Tier service may require additional cloud utility Costs)</p></td>
                    </tr>
                    <tr>
                        <td><p style={{padding: 10, color: "beige"}}><b>100% Remote Contract Labor (1099 or W2)</b></p></td>
                        <td style={{ display: "inline-flex", width: "-webkit-fill-available"}}><p style={{padding: 10}}><b style={{color: "chartreuse"}}>$70.00 - $75.00</b><b style={{marginLeft: 10}}>hourly</b></p></td>
                        <td style={{ display: "inline-flex", width: "-webkit-fill-available"}}><p style={{padding: 10}}><b>Development Time, Administration, Architect & Design Solution</b></p></td>
                    </tr>
                    <tr>
                        <td><p style={{padding: 10, color: "beige"}}><b>Hybrid (1-2 days) Contract Labor (1099 or W2)</b></p></td>
                        <td style={{ display: "inline-flex", width: "-webkit-fill-available"}}><p style={{padding: 10}}><b style={{color: "chartreuse"}}>$85.00</b><b style={{marginLeft: 10}}>hourly</b></p></td>
                        <td style={{ display: "inline-flex", width: "-webkit-fill-available"}}><p style={{padding: 10}}><b>Development Time, Administration, Architect & Design Solution</b></p></td>
                    </tr>
                    <tr>
                        <td><p style={{padding: 10, color: "beige"}}><b>Annual Salaried 100% Remote</b></p></td>
                        <td style={{ display: "inline-flex", width: "-webkit-fill-available"}}><p style={{padding: 10}}><b style={{color: "chartreuse"}}>$135k - $155k</b><b style={{marginLeft: 10}}>Annually</b></p></td>
                        <td style={{ display: "inline-flex", width: "-webkit-fill-available"}}><p style={{padding: 10}}><b>Development Time, Project Management, Architect & Design Solution, Administration, Growth</b></p></td>
                    </tr>
                    <tr>
                        <td><p style={{padding: 10, color: "beige"}}><b>Annual Salaried Hybrid/Onsite</b></p></td>
                        <td style={{ display: "inline-flex", width: "-webkit-fill-available"}}><p style={{padding: 10}}><b style={{color: "chartreuse"}}>$155k - $200k</b><b style={{marginLeft: 10}}>Annually depending on location or relocation</b></p></td>
                        <td style={{ display: "inline-flex", width: "-webkit-fill-available"}}><p style={{padding: 10}}><b>Development Time, Project Management, Architect & Design Solution, Administration, Growth</b></p></td>         
                    </tr>
                </table>
                <h4 style={{color: "gold", borderBottom: 'solid', width: 'fit-content'}}>First Time Startup Website (Cost Planning)</h4>
                <p style={{}}>{`Here's an overview of the type of results you can expect to receive from my services. The maturity of your project determines its desired objectives. If your project is in its early stages, my initial step is to develop a tailored business solution for you. First off, I will present a variety of design options for potential websites. You can select from these designs below or provide me with a sample URL of an existing website to work from. Additionally, you have the option for a more customized solution, although please be aware that my pricing is based on time spent, and some solutions may require more time than others.`}</p>
                <p style={{}}>{`Here is an idea of what you can get delivered within the 1st hour of my work`}</p>
                <div style={{ marginLeft: 30}}>
                    <p style={{}}>{`- Choose a UI/UX Template: `} <a href="/Template"><b style={{color: "aquamarine"}}> See Templates</b></a></p>
                    <p style={{}}>{`- Configuration & Administration of your Cloud Service provider`}</p>
                    <p style={{}}>{`- Replatforming of your Template into a suitable development application (Extracting URL content and replatforming into an Angular or React application)`}</p>
                    <p style={{}}>{`- Setting up Repositories and deploying into a live cloud environment`}</p>
                    <p style={{}}>{`- Any remaining time will be devoted to developing features or making adjustments to your application as needed.`}</p>
                </div>
                <p style={{}}>{`Upon completion, I provide a live application template in the cloud for a `} <b style={{color: "chartreuse"}}>Cost ($100)</b></p>

                <p style={{}}>{`Moving forward, let's consider another hour of work:`}</p>
                <div style={{ marginLeft: 30}}>
                    <p style={{}}>{`- Gathering requirements for customization`}</p>
                    <p style={{}}>{`- Client-provided assets such as pictures, text, and messages for the website.`}</p>
                    <p style={{}}>{`- Customization of pages, template designs, pictures, videos, rendering of page elements, color design, UI/UX customization`}</p>
                    <p style={{}}>{`- Feature development for paging`}</p>
                    <p style={{}}>{`- Integration of payment links to buttons and development of full functionality and specialized features`}</p>
                    <p style={{}}>{`- Approximately one page's worth of dedicated & detailed work.`}</p>
                </div>
                <p style={{}}>{`This would require approximately half an hour to an hour of work - `} <b style={{color: "chartreuse"}}>Totaling  ($150 - $200)</b></p>
                <p style={{}}>{`We can continue to develop features like these for a new website or mobile application. The total cost of the project may vary, but for a simple web application without a database solution, the minimum total cost would be `}<b style={{color: "chartreuse"}}>$150 - $600.</b></p>
                <p style={{}}>{`Adding a mobile application with website with total costs about -`}<b style={{color: "chartreuse"}}>$600 - $1200.</b></p>
                <p>(depending on functionality and level of service, please check <a href="/"><b style={{color: "chartreuse"}}>Home page</b></a> to get an idea for Tier service level)</p>

                <p style={{ color: "gold"}}>{`You might be wondering why website costs vary.`}</p>
                <p style={{}}>{`A simple website designed for advertising purposes represents an informative level of work. However, it still serves as an immensely beneficial business solution. Consider the integration and management of payment solutions. These websites can generate revenue while advertising simultaneously. For future business growth, you may want to incorporate scheduling services, order tracking management systems for different clients, authentication and personalized client profiles, and mobile applications for managing schedules, order tracking, or providing notification services via emails or texts.`}</p>
                <p style={{}}>{`There is potential for technology to serve as a business solution, facilitating the expansion of business and the automation of redundant processes. This enables faster revenue growth, allowing for the continual evolution of a business model.`}</p>
                <p style={{}}>{`As a freelancer, my goal is to provide business solutions that pave the way for growth. My clients are more than satisfied to explore future technological service expansions.`}</p>
                <p style={{ color: "gold"}}>{`There are no hidden costs.`}</p>
                <p style={{ color: "gold"}}>{`Feel free to schedule a video call; consultation is absolutely free.`}</p>
            </div>
        )
    }
}

export default Pricing;