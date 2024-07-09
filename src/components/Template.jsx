import * as React from 'react';
import './css/template.css';
import webTemplates from './json/webTemplates.json'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, blue, purple, green, grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, ButtonGroup } from '@mui/material';
import axios from 'axios';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

class Template extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayTemplates: [... webTemplates],
            templates : [... webTemplates]
        }
    }

    componentDidMount(){ 
        let request = new URLSearchParams(window.location.search).get("style");
        if(request) this.filter(request);
        // axios.get(`${process.env.REACT_APP_HYDRABLEND_NODE_API}/web-template`)
        //   .then(resp => {
        //     this.setState(()=>({ 
        //         displayTemplates: resp.data,
        //         templates : resp.data
        //     }));
        // })
    }

    color(type){
        switch(type){
            case "A": return red[500];
            case "R": return blue[500];
            case "W": return purple[500];
            case "T": return grey[500];
        }
    }
    filter(type){
        this.setState(()=>({
            displayTemplates: this.state.templates.filter(f=> (f.type == type || f.style == type) )
        }))
    }

    filters=["Angular", "React", "Webflow", "Brand", "Dashboard", "Fitness", "Real Estate", "Video", "Restaurant"]

    render(){
        return ( 
        <div class="template-body app-body-wrapper">
            <h1 style={{borderBottom: 'solid', width: 'fit-content'}}>UI/UX Template Designs</h1>
            <div class="scroll-filter" style={{display: "inline-block"}}>
                <ButtonGroup variant="text" aria-label="text button group">
                    { this.filters.map(f => (<Button style={{color: 'white', marginLeft: 10, width: 120}} onClick={this.filter.bind(this, f)}>{f}</Button>)) }
                </ButtonGroup>
            </div>
            <div className={"grid-container"} style={{placeItems: "center", marginBottom: 200}}>
                {
                    this.state.displayTemplates.map(
                        t => (
                            <Card sx={{ maxWidth: 345, marginTop: 10, maxHeight: '504px'}}>
                                <CardHeader
                                    avatar={
                                    <Avatar sx={{ bgcolor: this.color.bind(this, t.type.charAt(0)) }} aria-label="title">
                                        {t.type.charAt(0)}
                                    </Avatar>
                                    }
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                    }
                                    title={t.title}
                                    subheader={t.date}
                                />
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={t.template}
                                    alt="Paella dish"
                                />
                                <CardContent style={{ overflowY: 'auto', maxHeight: '90px' }}>
                                    <Typography variant="body2" color="text.secondary" >
                                    {t.description}
                                    </Typography>
                                </CardContent>
                                <Button href={t.url}  sx={{ bgcolor:  this.color.bind(this, t.type.charAt(0)) }} style={{ marginTop: '5px', left: 50, border: "solid",  borderRadius: 25, color: 'ghostwhite', fontWeight: 'bold', padding: 10, marginBottom: 40 }}>Click to View Live Preview</Button>
                            </Card>
                        )
                    )
                }
            </div>
        </div>)
    }
}

export default Template;