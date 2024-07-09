import React from 'react';
import Card from '@mui/material/Card';
import './css/resume.css';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';
import MITLogo from './../images/logo/321px-MIT_logo.svg.png';
import AWSLogo from './../images/logo/Amazon-web-services-logo-PNG.png';
import ECPILogo from './../images/logo/ECPI-Seal.png';
import JHULogo from './../images/logo/whiting-small-vertical-blue-500px-aa1ad1c0ad.png';
import CompALogo from './../images/logo/CompA.png';
import CompNetLogo from './../images/logo/CompNet.png';
import CompCIOSLogo from './../images/logo/CompCIOS.png';
import GitHubLogo from './../images/logo/github.png';

class Resume extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showTask: false,
            expanded : false 
        }
    }


    render(){
        return ( 
            <div className="resume-body-wrapper" >
                <Card className={"resume"} style={{padding: 30, fontFamily: "serif"}}>
                    <h2>RAFAT KHANDAKER</h2>
                    <h3>SENIOR SOFTWARE ENGINEERING LEAD / Architect</h3>
                    <div style={{borderBottom: 'solid', display: 'inline-flex'}}>
                        <p><b>EMAIL:</b> RAFAT.KHANDAKER@GMAIL.COM</p>
                        <p style={{marginLeft : 50}}><b>CELL:</b>{" (646) 269-9212"}</p>
                        <p style={{marginLeft : 50}}><b>LOCATION:</b> HASTINGS, MICHIGAN 49058</p>
                    </div>
                    <h3 style={{marginTop: 30}}>CAREER OBJECTIVE</h3>
                    <div>
                        <p>8 years professional software development experience focused cyber security knowledge to better apply myself in continuous integration </p> 
                        <p>with high EOLP. Specialized in bringing secure architecture and best practice to IoT web/mobile based, and Cloud based applications.</p>
                        <p>Experienced in N-tier style design patterns, Tactical design patterns, MVC, MVVM and microservice architecture. Knowledge and experience</p> 
                        <p>in integrated IoT cloud services which includes mobile application development in android and IVR systems in Avaya. Release process, </p> 
                        <p>handling both manual and automated deployment. Experienced in modern development life cycle and project management. Modern technology</p> 
                        <p>stacks in Java, C# .NET, Core-Python, Javascript, Typescript, Angular, Vue Js, React Js. Query Language in T-SQL, PL-SQL. Scripting</p> 
                        <p>languages in Powershell and Unix-Shell. Possess AWS certified cloud practitioner and pursuing AWS cloud solutions architect. I also have </p> 
                        <p>knowledge in applied science and mathematics to integrate and model Machine Learning & Artificial Intelligence problems. Has lab experience,</p> 
                        <p>working with quantum computers and simulators using: Q#, IBM: QASM to optimize cyber security controls and algorithms in the new age of</p> 
                        <p>Quantum and AI computing.</p>
                    </div>
                    <h3 style={{marginTop: 30}}>TECHNICAL SKILLS</h3>
                    <table style={{maxWidth: 880}}>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Programming Languages:</b></td>
                            <td>C#, Java, JavaScript, CSS3, HTML5, Typescript, SQL, Python, Scala Q#, QASM</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Cloud Experience:</b></td>
                            <td>AWS, Oracle Cloud, Azure Cloud</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Cloud Technologies:</b></td>
                            <td>EC2, ECS, EKS, S3, Dockers, Kubernetes, Elastic Search, Cloud Watch, Elastic Logger</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>NET Framework:</b></td>
                            <td>ASP.NET, ADO.NET, WCF, WPF, Entity Framework, LINQ, SSIS, SSRS, .NET Core, .NET 5,6,7, Razor, Blazor, N-Unit, Dependency Injection</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Java Framework:</b></td>
                            <td>JBOSS, Spring MVC, Spring Data, Spring Boot, Flyway, Hibernate, H2, J-Unit, Log4J, Maven, JVM Security</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>JavaScript Framework:</b></td>
                            <td>jQuery, Knockout JS, Angular JS, Vanilla JS, Angular, Vue.JS, React.JS, Cypress, Karma, Node JS</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Server Technologies:</b></td>
                            <td>IIS 6,7,8, Apache Tomcat 8, 9, 10, JBOSS, Node, Microsoft Server, Linux CentOS, Debian, Red Hat Linux</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Text Format:</b></td>
                            <td>XML, XAML, WSDL, JSON, Groovy</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Continuous Integration:</b></td>
                            <td>Team City, Jenkins, Octopus Deploy, CI/CD Pipeline Automation</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Messaging Queue:</b></td>
                            <td>Rabbit MQ, Apache Kafka, Tibco EMS</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Database Technologies:</b></td>
                            <td>Oracle SQL PL/SQL, Microsoft SQL T-SQL, TOAD, DBMS, SSMS, Mongo DB, ORM, RDBMS</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Version Control:</b></td>
                            <td>Git, GitHub, Bitbucket, SVN, TFS</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Development Practices & Architecture:</b></td>
                            <td>Design Patterns, MVC, MVVM, Singleton, Factory Pattern, Builder Class, Observer/Subscriber, Worker Service, Concurrency Design, Object Oriented Analysis Design (OOAD), N-Tier, SOA (Service Oriented Architecture), Microservices</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Project Management:</b></td>
                            <td>Jira, Scrum, Kanban, Agile Methodologies, TDD, Team Leadership, Time Management, Deadline Planning, Performance Review, QA Feedback Testing, Change Management Process</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>IDE:</b></td>
                            <td>Eclipse, Intelli J, Visual Studio 12, 13, 14, 15, 16, 17, 18, 19, 20, Spring Suite STS, PyCharm, Visual Code, Android Studio</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Algorithms Knowledge:</b></td>
                            <td>Graph Theory, Cryptographic Algorithms (Shift Cipher, Vinegere Cipher, DHE, RSA, AES ECDSA ECC, HMAC, MD5, NTLM Hash) Linear/Differential Cryptographic Analysis, Monte Carlos Simulation, Stochastic Gradient Descent, Epidemiological Simulation, Elastic Search, Greedy Method, Philosopher’s Dilemma, Deadlock Mitigation Algorithm, Andrew Tanenbaum Operating Systems, Spanning Tree Algorithm, Dijkstra Algorithm, Quantum Fourier Series, Shor’s Algorithm, Pre order Traversal, In order Traversal.</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Data structures:</b></td>
                            <td>Linked Lists, Binary Trees (R&B, AVL, BST), Arrays, List, Nodes, HashMap, Hash Function, Maps, Dictionaries, Pointers, Reference, Heap, Stack, Memory, Queues, BFloat16, Float, Mantissa Bits</td>
                        </tr>
                        <tr>
                            <td width={200} style={{padding: 5}}><b>Regulatory Industry Compliance:</b></td>
                            <td>HIPAA, PCI DSS, GDRP, ADA, WCAG 2.0, 2.1, OWASP, Zero Trust Security Architecture</td>
                        </tr>
                    </table>
                    <h3 style={{marginTop: 30}}>EXPERIENCE</h3>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>LEAD SOFTWARE PRODUCT ENGINEER (FREELANCE)</b> Hydrablend Technologies LLC</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>New York City, NY</p><p style={{marginLeft: "auto"}}>February 2023 - Present</p>
                        </span>
                        <p>{`Project development with confidential clientele, utilizing my knowledge in project management development &
                            implementation of technological assets with my small personal budget. Developed project as freelancer using Java 8, 
                            11, 13 Java 15, Java 17 & Java 21 using Spring MVC restful web services, Oracle DB, Oracle SQL, MongoDB, .NET Core 
                            3.2 worker services and Angular applications using Angular 11, Angular 12, Angular 13. Architecting and Designing 
                            systems from custom built servers and executed deployment strategy with AWS cloud provider, CI/CD pipeline with 
                            Bitbucket Git Integration. Architected and designed internal and public facing virtual network security and routing. 
                            Implemented and strategized firewall rules and communication rules with Software Services for public facing SAAS 
                            cloud applications.`}</p>
                        <p><b style={{borderBottom: "solid"}}>Project Freelancer:</b>{` Developed product for freelance services. Integrated strategic and effective UI/UX design 
                            strategy to attract freelancers & seekers. Developed front-end project with Angular 9, 11, 12, 13. Using restful Java 
                            Spring Boot application, design effective patterns in development for flexibility and management of dependencies. 
                            Apply authentication/ authorization and auditing using Java services, incorporating SSO authentication and 
                            logging, restful templates. Incorporate meetings links and 3rd party API for processing payments and managing 
                            invites with Calendly`}</p>
                        <p><b style={{borderBottom: "solid"}}>Financial Market Analysis Project:</b>{` Developed daily trading strategies in financial markets. Advertise strategy and 
                            engage in meetings to attract investors. Obtained operational funds in daily trading investments, developed .NET
                            worker services to process stock market analysis using Alpaca API service with simulated brokerage account. 
                            Deliver and process reports into Oracle Database, design and execute stored procedures using PL/SQL, applying 
                            user security functions and user group association to data processing. Provide algorithmic effective strategies, 
                            develop reports to showcase simulated strategies of generating monthly revenue.`}</p>
                        <p><b style={{borderBottom: "solid"}}>External Recon Reports:</b>{`  Design reports using Angular, .NET services, Spring MVC, Mongo DB & Oracle SQL. 
                            Executing PL/SQL functions from oracle database to extract reports using Spring Restful API Service using Java
                            and Oracle SQL PL/SQL functions, applying user security. Cross applies data to user report security. Developed 
                            processing service to upload CSV files into SFTP service, designing organized folder-hierarchy convention for FTP 
                            storage. Organize data submissions using Mongo DB and .NET worker services to process queue, providing ETL 
                            functions into Oracle DB to extract CSV, process CSV files using Entity Framework, LinQ with Oracle SQL`}</p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Defined strategic plans and kept business on track to meet objectives.`}</td>
                                <td style={{ border: "none"}}>{`Managed the daily operations related to customer service, inventory management, and marketing.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10}}>{`Set and implemented strategic goals and initiatives to align the company with mission, values, and vision.`}</td>
                                <td style={{ border: "none", paddingTop: 10}}>{`Performed detailed financial analyses to identify and address areas of potential concern.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10}}>{`Drafted a business plan that outlined company goals and objectives.`}</td>
                                <td style={{ border: "none", paddingTop: 10}}>{`Developed print advertising, social media campaigns, and networking events to deliver messages to target audience.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10}}>{`Coordinated with web developers to create websites and product pages`}</td>
                                <td style={{ border: "none", paddingTop: 10}}>{`Kept operating expenses low with good business controls.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10}}>{`Established strong relationships with vendors to ensure quality products at competitive prices.`}</td>
                            </tr>
                        </table>
                    </div>

                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>SENIOR SOFTWARE ENGINEER, JAVASCRIPT DEVELOPER</b> Nexient NTT Data Co</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>Ann Arbor, MI</p><p style={{marginLeft: "auto"}}>May 2022 - February 2023</p>
                        </span>
                        <p><b style={{borderBottom: "solid"}}>NEXIENT Internal Project (1 Month):</b>{` Developed Reactive application in order to promote internal employees, 
                            automated email messaging system to promote confidence. Enhanced relations between internal employees and 
                            improved communication amongst team members to congratulate users for promotion. Used React.Js to create 
                            management hierarchy system in organizational tree chart for HR application.`}</p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Integrated page by page permission using React.js React-Admin authProvider`}</td>
                                <td style={{ border: "none"}}>{`Developed React Dom model binding with XMLHTTPRequest and React-Axiom to handle subscriber events.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10}}>{`Developed .NET 5 & .NET 6 API Endpoint with Entity framework and SQL Developed .NET 6 SMTP service to email internal users`}</td>
                                <td style={{ border: "none", paddingTop: 10}}>{`Developed Organizational UI/UX design Tree with vanilla javascript to map data and bind to dynamic HTML element nodes to display management hierarchy.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10}}>{`Utilized and leveraged JWT tokens for API security, integration with LDAP functions.`}</td>
                                <td style={{ border: "none", paddingTop: 10}}>{`Developed .NET 6 SMTP service to email internal users.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10}}>{` Delivery Front End Product to meet WCAG 2.0 ADA Compatibility standards`}</td>
                            </tr>
                        </table>
                        <p><b style={{borderBottom: "solid"}}>William Sonoma Inc Client Project (3 Months):</b>{`  Sr. Software Engineer in an Agile team for delivery management. 
                            Developed business application in Angular 10, using vanilla JS and reactive components/ routing / routing 
                            parameters, re-usable forms and templates with dynamic interoperability with back-end HTTP client functionality. 
                            Back-end API project integrated with Swagger documentation. Involved in client project developed in Vue JS / 
                            Spring MVC using Java 17 & Java 19 with 30/70 split between front-end to back-end development work on large 
                            scale front-end microservices applications.`}</p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingRight: 10}}>{`Integrated Docker and Kubernetes technology into 
                                                                front end microservices with ECS container service 
                                                                and EKS, automate deployment using CI/CD
                                                                pipelines into AWS Cloud`}
                                                                </td>
                                <td style={{ border: "none"}}>{`Developed Proxy routing on Front-End 
                                                                Microservices project in Vue JS, using Node JS and 
                                                                handling routing via proxy calls to localize and 
                                                                parameterize ecommerce platform for US and 
                                                                Canada regions while migrating resources into new 
                                                                microservices project`}
                                                                </td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingRight: 10}}>{`Developed projects using Agile and TDD in front end javascript projects, unit testing libraries etc.`}</td>
                                <td style={{ border: "none", paddingTop: 10}}>{`Developed on Back-End Spring MVC project to handle multiple content-blocks published by Adobe Illustrator as promotions for ecommerce banners and advertisements.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingRight: 10}}>{`Developed project in Spring MVC, Spring Data, Spring Hibernate using Java 8, 11 & 15 with both Integrated testing and Unit testing using Bedrock API testing, sonar cube code coverage and automated deployment with GitHub and Jenkins.`}</td>
                                <td style={{ border: "none", paddingTop: 10}}>{`Deploying RHEL/ CENTOS architecture containers using Open Shift with JBOSS Image Docker Containers `}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingRight: 10, paddingTop: 10}}>{`Delivery Front End Product to meet WCAG 2.0 ADA Compatibility standards, middle ware technology in OWASP standards`}</td>
                            </tr>
                        </table>
                        <p><b style={{borderBottom: "solid"}}>Dell Client Project (3 months): </b>{`  Sr. Software architectural analysis and design improvement for performance using 
                                                                                                    analysis tools and documentation as a part of Dell's SWAT extension team on large scale microservices .NET 
                                                                                                    architecture and design services. Angular 12 front-end microservices scalability analysis.`}</p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Developed strategy and documentation for performance enhancement in Front End UI, Angular 12, Angular 13 application.`}</td>
                                <td style={{ border: "none"}}>{`Documented analysis using chrome debugger tools for UI performance and justification documents forarchitectural changes.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Developed Strategies and solutions using documented references based on analysis and justifications.`}</td>
                                <td style={{ border: "none"}}>{`Test flow of application and documented analysis using step by step procedure and recommended changes for page-by-page enhancements.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Design Process in .NET 5 and .NET 6 using C# with high end microservice processing, using approximately 100 .NET microservices tracking data processing from multiple vendor database.`}</td>
                                <td style={{ border: "none"}}>{`Analyzed performance issues using Elastic Logger`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10}}>{`Tracked .NET integration communication with Rabbit MQ and SQL database.`}</td>
                            </tr>
                        </table>
                    </div>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>SENIOR SOFTWARE ENGINEER, TECHNICAL LEAD</b> YOH, Zimmermann Company, LPL Financial</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>Austin, TX</p><p style={{marginLeft: "auto"}}>January 2021 - May 2022</p>
                        </span>
                        <p>{`Tech Lead for large project within a financial firm. My goal is to provide clients with a stable platform and
                            continuous feature release while stabilizing technological assets in SQL and migration into new Angular, .Net
                            technologies. Project involves SQL Migration, API Migration, Angular Migration within Asset Tracking application 
                            with workflows involving back-office users.`}</p>
                        <p><b style={{borderBottom: "solid"}}>SQL Migration Project: </b></p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Documented decoupling stored Procedures strategy and decoupling SQL instance for scalability`}</td>
                                <td style={{ border: "none"}}>{`Decoupling nested stored procedural logic and architect design with Apache Kafka for SQL migration.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10 }}>{`Designed SSIS package strategy for managing data amongst SQL database instance and maintaining consistent data`}</td>
                                <td style={{ border: "none", paddingTop: 10 }}>{`Strategized & coordinated with Microsoft SQL experts to design query performance optimization & tuning process effectiveness.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10 }}>{`Managed and lead strategy team with offshore developers.`}</td>
                                <td style={{ border: "none", paddingTop: 10 }}>{`Lead SQL migration efforts to maintain GDRP regulatory standards, implementing (AAA) Accounting, Auditing and Authorization standards`}</td>
                            </tr>
                        
                        </table> 

                        <p><b style={{borderBottom: "solid"}}>Front End Project: </b></p>

                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Developed security authentication flow to unlock front end projects to key developers, admins and back-office users. Allowing application access to members of active directory grouping.`}</td>
                                <td style={{ border: "none"}}>{`Developed key tables for Op users, allowing CRUD operations effect with API endpoint technologies.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10 }}>{`Managed front end team of 4 developers to allow fluid transitions and UI designing.`}</td>
                                <td style={{ border: "none", paddingTop: 10 }}>{`Provided migration support for Angular 8, Angular 11 and Angular 13. And delivery to meet ADA Compatitibilty WCAG standards`}</td>
                            </tr>
                        </table> 

                        <p><b style={{borderBottom: "solid"}}>Middleware Project: </b></p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingRight: 10}}>{`Migrated 80% of Tibco EMS services into .Net Core microservices.`}</td>
                                <td style={{ border: "none"}}>{`Integrated .NET 5 and .NET core projects with DevOps scripts and CI/CD pipelines with Git-Hub, Team city and Octopus deploy`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingRight: 10, paddingTop: 10}}>{`Developed documentation between Tibco EMS service and .Net Core microservice to maintain parallelism of logic and deployment strategy.`}</td>
                                <td style={{ border: "none", paddingTop: 10}}>{`Integrated Unit Testing methodologies to secure logic consistency with .Net Core microservices with automated deployment testing scripts, incorporating C# best development practices.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", paddingTop: 10}}>{`Provide delivery of microservices to meet GDRP and PCI DSS Standards`}</td>
                            </tr>
                        </table> 
                    </div>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>SENIOR SOFTWARE ENGINEER</b> Insight Global, Bank of America</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>Exchange Plaza, NJ</p><p style={{marginLeft: "auto"}}>October 2019 - January 2021</p>
                        </span>
                        <p>{`Front End and Core Engineer for Financial Interface Gateway, internal hybrid cloud service. Developed worker 
                            services for pre-ETL and post-ETL batch processes to upload transactional records into Oracle Cloud provider data 
                            warehouse. Retrieved Analytics reports from Oracle Cloud to financial clients, managing financial transaction 
                            history and compliance regulations for transaction data retention policy. I was responsible for migrating legacy 
                            service into new Angular 8, Angular 12, Angular 13 and .NET core & .NET 5 applications with a maintained security 
                            baseline of support. I integrated development with Entity Framework using Oracle DB. I engaged in team building 
                            processes, Continuous development and integration of tasks into deployment environments. Stabilized team 
                            project as lead to encourage junior developers to maintain structural pattern and changes. Developed streamline 
                            and re-usable functionality and pattern to accelerate development of service. Engaged in support team to track 
                            internal audits and documentation and application failures in large service oriented structural services.
                            `}</p>
                        <p><b style={{borderBottom: "solid"}}>Service Oriented Project: </b></p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Self-management of project and tasks utilizing 
                                                                Confluence & Jira Board to organize and track 
                                                                activity, using Bit Bucket for check-in tasks.`}</td>
                                <td style={{ border: "none"}}>{`Developed a common use factory and classes in dotnet to handle connection to Oracle DB, support for 
                                                                .NET logger for auditing and tracking application 
                                                                failure in live environments.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Management of logging and audit controls to track 
                                                                requests and files being transferred and audited into 
                                                                Oracle Cloud Services.`}</td>
                                <td style={{ border: "none"}}>{`Integrated & migrated old WSDL Web Services into modern Web – API services.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Implemented strong practices of tactical and component style design pattern in development.`}</td>
                                <td style={{ border: "none"}}>{`Supported continuous deployment schedule of project tasks into live testing environments, supported migrating process from Waterfall to Scrum Agile methodologies.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Adhere to strong Security framework & policies with internal bank compliance in development and communication between cross platform teams for support.`}</td>
                                <td style={{ border: "none"}}>{`Supported development practices in Typescript, supporting Angular 8 application for Front end development.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Completed multiple Angular pages with dynamic UI challenges while implementing the best developmentstrategies between Front-End and backend communication of data.`}</td>
                                <td style={{ border: "none"}}>{`Strong UI understanding of re-usable component style, integrating security to UI, with strong debugging talent utilizing chrome.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Developed UI support for ADA compliance WCAG 2.0 in Front-End Angular 8 applications and legacy WCF applications`}</td>
                                <td style={{ border: "none"}}>{`Supported Legacy Web Forms application in C#, ASP.NET and VB.NET.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{` Provide delivery of microservices to meet GDRP and PCI DSS Standards`}</td>
                            </tr>
                        </table> 
                    </div>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>FULL STACKS .NET ENGINEER, MEDIA CONTENT</b> Insight Global, VIACOM and Paramount pictures</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>New York City , NY</p><p style={{marginLeft: "auto"}}>August 2018 - October 2019</p>
                        </span>
                        <p>{`Full stacks engineer, supporting a large integrated project as a media content developer (over 2.5 million
                            lines of code). Technology is used to deliver quality media streaming as a content provider to vast media
                            providers world-wide: including BET, MTV, MTV2, Nickelodeon, Comedy Central, CMT, Bellator &
                            Paramount Pictures.`}</p>
                        <p><b style={{borderBottom: "solid"}}>Micro services style component driven architecture:</b></p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Integrated environmental powershell scripts for automated deployment using Jenkins and CI/CD pipelines for Azure Cloud.`}</td>
                                <td style={{ border: "none"}}>{`Using concepts of MVVM modeling using Angular 6 & 7 with Typescript & Knockout JS`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Strong C# Core API development using MVC`}</td>
                                <td style={{ border: "none"}}>{`Integrating Basic Authentication tokens & for SSO authentication and API Security`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Sequel Workflow Development SQL: (Stored procedures, User Definition Functions, Triggers)`}</td>
                                <td style={{ border: "none"}}>{`Windows services development.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Deployment in Jenkins, integrated with cloud infrastructure: Microsoft Azure DevOp environment`}</td>
                                <td style={{ border: "none"}}>{`Source Control in Git Stash with Jira Project Management.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Tracked SQL Data Sync with Rabbit MQ to Solar Search to maintain synchronization with SQL database and performance improvements`}</td>
                                <td style={{ border: "none"}}>{`Tracked SQL performance issues, deadlock events and decoupled Stored Procedural logic`}</td>
                            </tr>
                        </table> 
                        <p><b style={{borderBottom: "solid"}}>Strong Security development practices including:</b></p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`SSO authentication & integration to AD-DS LDAP (IDAAS) service`}</td>
                                <td style={{ border: "none"}}>{`Dual Factor Authentication Service`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Robust Application Design`}</td>
                                <td style={{ border: "none"}}>{`Workflow failure auditing and tracking`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Application Error Logging`}</td>
                                <td style={{ border: "none"}}>{`Integrated Domain Group Policy Object in development`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Deployment in Jenkins, integrated with cloud infrastructure: Microsoft Azure DevOp environment`}</td>
                                <td style={{ border: "none"}}>{`Source Control in Git Stash with Jira Project Management.`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Layering muti-level authentication process and access into resources`}</td>
                                <td style={{ border: "none"}}>{`Permission based Workflow Escalation and parallel development with Core Business functionality`}</td>
                            </tr>
                        </table> 
                    </div>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>FULL STACKS .NET DEVELOPER</b> SUMMIT WORKS</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>South Plainfield, NJ</p><p style={{marginLeft: "auto"}}>March 2018 - August 2018</p>
                        </span>
                        <p>{`Completed 4 Projects, developing application for small business owners to sell products & keep inventory count. 
                            Developed application for internal business "sales management." Developed Application for. Internal business "Job 
                            Search & Placement.`}</p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Committed to completing 4 projects using versatile technologies in .NET, including legacy applications in.`}</td>
                                <td style={{ border: "none"}}>{`ASP.NET WCF, create designing database architecture, stored procedure queries, T-SQL, implemented coding in C#, VB, Designed Pagination, Grid-View control, Filtering, Sorting, Repeaters`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`MVC project using ADO.NET, Entity Framework, LINQ, Ajax calls between table queries, rebinding & appending tables with search bar`}</td>
                                <td style={{ border: "none"}}>{`Developing pages, binding models to view with HTML helper, Bundle`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Configuration between key Javascript files, using Render script tags in layout page for best Configuration of Unity 3 for dependency injection and project long term maintenance`}</td>
                                <td style={{ border: "none"}}>{`Built Front-End project using Html5 pages, Bootstrap, CSS3, AngularJS for callbacks between`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Libraries, factories, email service, login service, Business Flow tasks`}</td>
                                <td style={{ border: "none"}}>{`Built Front-End project using Html5 pages, Bootstrap, CSS3, AngularJS for callbacks between`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`pages, data-bind models (1 way & 2 way), Page routing with layout page and View tag directives`}</td>
                                <td style={{ border: "none"}}>{`Developed Application project using Angular 2, Node JS, Node express & MongoDB`}</td>
                            </tr>
                        </table>   
                    </div>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>APPLICATION (JAVA/.NET) DEVELOPER</b> COMCAST</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>Atlanta, GA</p><p style={{marginLeft: "auto"}}>May 2017 - March 2018</p>
                        </span>
                        <p>{`Developed applications for Business Intelligence using Sams remedy web service, developed Surveys & SSRS
                            reports. Developed IVR call flow system, connecting to back-end API service & SSRS reports for app
                            effectiveness. Developed Admin pages for existing applications connecting to LDAP services & Windows login. 
                            Maintenance tickets for normal application bug-fixes, SSIS package fixes, etc. Developed real-time application 
                            Telematics using .NET API for tracking Field Service Technician Delivery and improve service availability.`}</p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Developed Comcast NPS survey and NPS Survey
                                                                reports for supervisor/regional managers to track 
                                                                internal performance review of IT Support team, 
                                                                integrating SAMS-Remedy service and review for 
                                                                resolved tickets`}</td>
                                <td style={{ border: "none"}}>{`Maintain strong coding talent & implement best 
                                                                practices in security & tactical designing, logical 
                                                                architecture & modeling`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Keeping clean working canvas with source-control`}</td>
                                <td style={{ border: "none"}}>{`Daily Organization, Event Planning, participate in 
                                                                meetings & conference calls with various Comcast 
                                                                branches for developing projects`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Developed & supported applications for clients 
                                                                throughout Comcast Intra-Network to enhance 
                                                                business relations, productivity & consumer support`}</td>
                                <td style={{ border: "none"}}>{`Enhanced application user interface, using JavaScript 
                                                                libraries & enhanced efficiency of data process 
                                                                between client-server communication`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Developed Web Forms application in C#, ASP.NET and VB.NET with Razor support`}</td>
                                <td style={{ border: "none"}}>{`Support server-side applications for members of IT administration to enhance productivity within client side technology sector`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Microsoft Server Management 2003, 2008, 2012, 2014 & 2016`}</td>
                                <td style={{ border: "none"}}>{`Supporting server-side technologies, load-balancing, IIS server configuration, web-farms architecture & Developed Eclipse Avaya Orchestration project using Java 8`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Supported Java Web Applications using JSP Servlets, JSP, Spring Boot, MVC, Hibernate, Data Security, Mongo Thym-leaf), used builds in both Maven & Gradle with Groovy`}</td>
                                <td style={{ border: "none"}}>{`Resolved Dependencies with both Maven & Gradle`}</td>
                            </tr>                           
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Deployed & tested applications in Tomcat server 7.0/ 8.0 /8.5 & 9.0`}</td>
                                <td style={{ border: "none"}}>{`Supported Tomcat Servers with Mutual Authentication between Tomcat & IIS Servers using SSL certificates, extraction & tested with Chrome debugger & fiddler`}</td>
                            </tr>
                        </table>   
                    </div>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>ANDROID JAVA DEVELOPER</b> C4Q</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>Queens, NY</p><p style={{marginLeft: "auto"}}>August 2016 - May 2017</p>
                        </span>
                        <p>{`Received Mentorship from Professional Senior Software developers in Project management`}</p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Worked on Java & Android development projects using Trello-Board, Git, SDK & IntelliJ`}</td>
                                <td style={{ border: "none"}}>{`Developed Java & Android applications using Web Hooks; HTTP callbacks & API implementation;`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`View Model structure & interaction; recursive functions & developing creative, clean coding`}</td>
                                <td style={{ border: "none"}}>{`Competed in the program with Javascript & Core Java algorithmic challenges`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Entered competition Android development Hackathons, developed Android Applications in APImarshmallow (6.0) & Nougat (7.0) using UI navigation, Widgets, Layouts, API Callbacks, Fragments, Views`}</td>
                                <td style={{ border: "none"}}>{`Horizontal & Vertical Recycler Views, Menu bars, animation integration, SQLite, Android Lifecycle, Drawer layout, Async-Tasks, Multi-Thread Handling, Child-Thread Handling, Serialization, Notification Service`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Libraries: Cupboard, Butterknife, Retrofit`}</td>
                            </tr>
                        </table>   
                    </div>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>JAVA PROGRAMMER CONSULTANT</b> Albert Einstein College Of Medicine</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>Bronx, NY</p><p style={{marginLeft: "auto"}}>April 2016 - September 2016</p>
                        </span>
                        <p>{`Consultant developer, developed active directory profile migration validation tool using Java FX and Java 8, handling concurrency design and validation checks for step-by-step profile migrations with SCCM windows engineering professionals. Provided delivery to meet HIPAA requirement standards.`}</p>
                    </div>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>JAVA PROGRAMMER CONSULTANT</b> Verifone</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>Long Island City, NY</p><p style={{marginLeft: "auto"}}>May 2015 - April 2016</p>
                        </span>
                        <p>{`Consultant developer, programmer developed tool for production equipment, VeriFone payment systems to automate troubleshooting process and functionality of VeriFone equipment using Java Fx, Java 8, powershell and batch scripting process. As well as mobile application process for android equipment devices, android development SDK, UI/UX design. Provided delivery of product to meet the needs of PCI DSS regulatory standards.`}</p>
                    </div>
                    <h3 style={{marginTop: 30, marginBottom: 30}}>EDUCATION</h3>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>MASTER OF SCIENCE (M.S.) IN COMPUTATIONAL SCIENCE, CYBER SECURITY </b></p>
                        <span style={{display: "flex", width: ""}}>
                            <p>John Hopkins University, Baltimore, MD</p><p style={{marginLeft: "auto"}}>December 2023</p>
                        </span>
                        <p><b style={{borderBottom: "solid"}}>Relevant Coursework</b></p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Java programming`}</td>
                                <td style={{ border: "none"}}>{`Data structure Fundamentals`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Operating Systems (C Programming, OS programming, Minnix)`}</td>
                                <td style={{ border: "none"}}>{`Foundations of Information Assurance`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Foundation of Algorithms (computational theory, complexity analysis)`}</td>
                                <td style={{ border: "none"}}>{`Cryptology (cryptographic algorithms)`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Computer Organizations (MIPS Assembler, Compiler Language)`}</td>
                                <td style={{ border: "none"}}>{`Reverse Engineering & Vulnerability Analysis (reverse engineer Intel32 bit assembly code, python, exploit c programming)`}</td>
                            </tr>
                        </table>   
                    </div>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>BACHELOR OF SCIENCE (B.S.) IN CYBERNETWORK SECURITY & CLOUD COMPUTING </b></p>
                        <span style={{display: "flex", width: ""}}>
                            <p>ECPI University, Virginia Beach, VA, US </p><p style={{marginLeft: "auto"}}>May 2020</p>
                        </span>
                        <p><b style={{borderBottom: "solid"}}>Relevant Coursework</b></p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Computer Operating Systems (A+)`}</td>
                                <td style={{ border: "none"}}>{`Networking fundamentals (Network+)`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Security fundamentals (Security+) `}</td>
                                <td style={{ border: "none"}}>{`Linux Beginner to Advanced (Linux+)`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Windows Beginner to Advanced (MSCA, MSCE) `}</td>
                                <td style={{ border: "none"}}>{`Windows Active Directory Beginner to Advanced`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Advanced Networking (CCNA to CCNP)`}</td>
                                <td style={{ border: "none"}}>{`Network Security Architecture (CCIE Security)`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`C Programming`}</td>
                                <td style={{ border: "none"}}>{`Unix Shell Scripting`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Powershell Scripting`}</td>
                                <td style={{ border: "none"}}>{`Security Foundation (SCCP, CISSP)`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Customer Relations Service Desk Architecture (ITIL) `}</td>
                                <td style={{ border: "none"}}>{`Project Management (CAPM, CPPM)`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Ethical Hacking (CEH) `}</td>
                                <td style={{ border: "none"}}>{`Business Organization fundamentals`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Virtualization VMWare Enterprise`}</td>
                                <td style={{ border: "none"}}>{`Virtual Storage`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Virtual Networking`}</td>
                                <td style={{ border: "none"}}>{`Cloud Computing (Cloud+)`}</td>
                            </tr>
                        </table>   
                        <p><b style={{borderBottom: "solid"}}>Awards & Honors</b></p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`Graduated with Honors Cum Laude (4x Deans List)`}</td>
                            </tr>
                        </table>
                    </div>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>ASSOCIATE IN SCIENCE (A.S.) IN COMPUTER ELECTRONICS </b></p>
                        <span style={{display: "flex", width: ""}}>
                            <p>ECPI University, Virginia Beach, VA, US </p><p style={{marginLeft: "auto"}}>June 2014</p>
                        </span>
                        <p><b style={{borderBottom: "solid"}}>Awards & Honors</b></p>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none"}}>{`2X Dean's List`}</td>
                            </tr>
                        </table>
                    </div>
                    <h3 style={{marginTop: 30}}>CERTIFICATIONS</h3>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <table style={{maxWidth: 880, border: "none"}}>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", fontStyle: "italic"}}>{`AWS Cloud Practitioner Completed`}</td>
                                <td style={{ border: "none"}}>{`May 2023`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", fontStyle: "italic"}}>{`MIT Quantum Computing (MITx Pro) Completed`}</td>
                                <td style={{ border: "none"}}>{`Dec 2020`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", fontStyle: "italic"}}>{`MIT Artificial Intelligence (MITx Pro) Completed`}</td>
                                <td style={{ border: "none"}}>{`Dec 2020`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", fontStyle: "italic"}}>{`A+ CompTIA Certification Completed`}</td>
                                <td style={{ border: "none"}}>{`April 2015`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", fontStyle: "italic"}}>{`Network+ CompTIA Certification Completed`}</td>
                                <td style={{ border: "none"}}>{`April 2015`}</td>
                            </tr>
                            <tr style={{border: "none"}}>
                                <td style={{ border: "none", fontStyle: "italic"}}>{`CIOS – Operations CompTIA Completed`}</td>
                                <td style={{ border: "none"}}>{`April 2015`}</td>
                            </tr>
                        </table>
                    </div>
                    <h3 style={{marginTop: 30}}>VOLUNTEER EXPERIENCE</h3>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>DEP CO </b> United States Naval Recruitment Center</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>Brooklyn, NY </p><p style={{marginLeft: "auto"}}>August 2011 - February 2012</p>
                        </span>
                        <p>Tutored high-school students to prepare for ASVAB exams at MEPS.</p>
                    </div>
                    <AddBoxIcon style={{ zIndex: 10, marginLeft: -20, marginBottom: -40 }}/>
                    <div style={{ borderLeft: "solid", paddingLeft: 10}}>
                        <p><b>MATH & SCIENCE TUTOR </b> SUNY Polytech Institute</p>
                        <span style={{display: "flex", width: ""}}>
                            <p>Utica, NY </p><p style={{marginLeft: "auto"}}>August 2010 - May 2011</p>
                        </span>
                        <p>Tutored: Calculus (1,2,3), Differential Equations, Differential based Linear circuits.</p>
                    </div>
                </Card>
                <Card className={"resume-right-card"} style={{background: "darkslategrey", top: 220}}>
                   <p style={{color: "white"}}><b>CLICK TO VIEW</b></p>
                   <div style={{textAlign: "-webkit-center" }}>
                        <a href="https://1drv.ms/b/s!As1JST2NmNT6pnH6q7K3xh-2412N?e=0voAdZ">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25,  fontWeight: "bold"}}>Download Resume</Button>
                        </a> 
                        <a href="https://1drv.ms/b/s!As1JST2NmNT6pnD8uR0dl6gMPp1u?e=b5JYK3">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 80}} src={JHULogo}></img> (M.S.) Degree</Button>
                        </a> 
                        <a href="https://1drv.ms/i/s!As1JST2NmNT6pglHyyydGz7XCXCn?e=QmXlMh">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30, paddingRight: 5}} src={ECPILogo}></img> (B.S.) Degree</Button>
                        </a> 
                        <a href="https://1drv.ms/i/s!As1JST2NmNT6pgT1vlRLbG6PbYBO?e=5nbcLV">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30, paddingRight: 5}} src={ECPILogo}></img> (A.S.) Degree</Button>
                        </a> 
                        <a href="https://1drv.ms/i/s!As1JST2NmNT6pgd8MKsQuAY-HGOI?e=rFJSEW">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30, paddingRight: 5}} src={ECPILogo}></img> Deans List</Button>
                        </a> 
                        <a href="https://1drv.ms/b/s!As1JST2NmNT6pgar8gmmmDqNpQII?e=pCfV1Z">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 50}} src={AWSLogo}></img> AWS Cloud Practitioner</Button>
                        </a> 
                        <a href="https://xpro.mit.edu/certificate/program/a9f7fdfa-3a43-4029-9977-b05d2d0f6026/">
                               
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30}} src={MITLogo}></img> MIT: Post Grad Quantum Computing Fundamentals</Button>
                        </a> 
                        <a href="https://xpro.mit.edu/certificate/93f6d285-186b-4ce2-b46e-44ad71d85857/">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30}} src={MITLogo}></img> MIT: Post Grad Intro Quantum Computing</Button>
                        </a> 
                        <a href="https://xpro.mit.edu/certificate/8dd2f9ba-c2cc-4604-ad02-19fdf8623082/">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30}} src={MITLogo}></img> MIT: Post Grad Quantum Algorithms for Cybersecurity, Chemistry, and Optimization</Button>
                        </a> 
                        <a href="https://xpro.mit.edu/certificate/program/288d5d21-a886-4bbb-944d-1922d34aa6c9/">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30}} src={MITLogo}></img> MIT: Post Grad Machine Learning, Modeling, and Simulation: Engineering Problem-Solving in the Age of AI</Button>
                        </a> 
                        <a href="https://xpro.mit.edu/certificate/a8b027ae-d382-4688-a8ef-d622afa94447/">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30}} src={MITLogo}></img> MIT: Post Grad Machine Learning, Modeling, and Simulation Principles</Button>
                        </a> 
                        <a href="https://xpro.mit.edu/certificate/ba850a28-c5b7-4c51-972c-518f1ac7a3b2/">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30}} src={MITLogo}></img> MIT: Post Grad Applying Machine Learning to Engineering and Science</Button>
                        </a>
                        <a href="https://www.credly.com/badges/bdd7bd5d-6c0c-4982-983c-670ac41c6bcd/public_url">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30}} src={CompALogo}></img> CompTIA A+</Button>
                        </a> 
                        <a href="https://www.credly.com/badges/6aa19237-570d-4d8c-b9bf-c07eadefe4c7/public_url">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30}} src={CompNetLogo}></img> CompTIA Net+</Button>
                        </a> 
                        <a href="https://www.credly.com/badges/1de552d9-2654-4dd9-91bd-6c2555fb1157/public_url">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 30}} src={CompCIOSLogo}></img> CompTIA CIOS</Button>
                        </a>
                        <a href="https://github.com/RafatKhandaker/AWSCertificationTool">
                                <Button className="right-card-btn" style={{background: "whitesmoke", padding: 7, borderRadius: 25, marginTop: 10, fontWeight: "bold"}}><img  style={{width: 50}} src={GitHubLogo}></img> Project: AWS Certification tool</Button>
                        </a>  
                   </div>

                </Card>
            </div>
        )
    }
}

export default Resume;