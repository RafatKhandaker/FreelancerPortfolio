import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Speech from './Speech';

import freelancerImage from "../../images/freelancer-engineer.jpg";
import compareSoftwareEngineer from "../../images/software-engingeer-vs-programmer-comparison-chart.png";
import projectManagementImg from "../../images/p_management.png";
import { teal } from '@mui/material/colors';

const pictures = [freelancerImage, compareSoftwareEngineer, projectManagementImg];

const steps = [
  {
    label: 'Difference between programmers and engineers?',
    description: `A programmer use skills to build applications from the bottom up.
                An engineer is an experienced architect who has knowledge to design,
                scale and modernize solutions to the extent of human history from the top, down.
                In short, engineers solve problems while programmers seek solutions.`,
  },
  {
    label: 'Should you hire a programmer or engineer?',
    description:
    `As a business owner, when choosing a right fit for your company. You may wonder if you should
     hire a software engineer or programmer. Typically, large companies prefer to hire engineers over programmers
     because they seek to solve challenges that are unique and competitive to the market. As small business may choose to hire
     programmers that can get a job done quickly for a low and effective cost solution. Engineers and programmers share similar skills 
     but their methodology, approach and mindset are vastly different in comparison. A typical rule of thumb is to hire programmers if you know
     what you want for your business but hire engineers when you are seeking solutions to enhance your business needs. When contemplating whether
     you should you build a website for your business or perhaps, you are seeking to enhance communication with your clients, how this process can be achieved through a website;
     a question to ask oneself whether to hire a programmer or engineer for the job.`,
  },
  {
    label: 'Helping Hand and Advice',
    description: `You should always consult with an engineering architect to develop a business solution.
                  If you consider yourself the architect and project manager for your business needs then 
                  it is appropriate to hire programmers and assign or manage tasks to. Either way, you may be able 
                  to get results from either engineer or programmer since all engineers are programmers.
                  However, the burden of hassle and business expectations will fall on the hands of the business owner
                  if they decide to hire a programmer who lack expertise in the field of engineering and architecting solutions.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (index) => {
    index === steps.length - 1 ? setActiveStep(0) : setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel optional={  index === 2 ? ( <Typography variant="caption">Last step</Typography>  ) : null }>
            <p style={{ fontSize: "larger", color: "aliceblue", fontWeight: "bold", width: "max-content"}}>{step.label}</p>
            </StepLabel>
            <StepContent>
            <div style={{display: "inline-block"}}>
                <Typography style={{fontWeight: "bold"}}>{step.description}</Typography>
                <img src={pictures[index]} style={{boxShadow:"0 0 20px black", zIndex: 100, position: 'relative', marginTop: 15, maxWidth: 600, minHeight: 225}}></img>
            </div>
              <Box sx={{ mb: 2 }}>
                <div style={{ display: "inline-flex" }}>
                  <Button
                    style={{width: "fit-content"}}
                    variant="contained"
                    onClick={handleNext.bind(this, index)}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Speech style={{ padding: 0, float: "", marginTop: 0, marginRight: 0, width: "120px", mixBlendMode: "screen"}} text={step.description} />
                  <Button
                    style={{width: "fit-content", paddingLeft: 8}}
                    disabled={index === 0}
                    onClick={handleBack.bind(this, index)}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}