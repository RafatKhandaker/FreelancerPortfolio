import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Button from '@mui/material/Button';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Speech = (props) => {

  const { speak } = useSpeechSynthesis();
  const synth = window.speechSynthesis;

  function speakfunction(){
    let utterThis = new SpeechSynthesisUtterance(props.text);
    let voice = synth.getVoices()[2];
    utterThis.voice = voice;
    synth.speak(utterThis);
  }

	return (
      <div style={{ marginTop: 8, marginRight: 8}}>
          <Button id="speech" style={{width: "fit-content", background: "antiquewhite", color: "black", mixBlendMode: "screen",}} 
                onClick={ speakfunction }>
          <VolumeUpIcon /> Play Audio</Button>
      </div>
				
	);
};
export default Speech;
