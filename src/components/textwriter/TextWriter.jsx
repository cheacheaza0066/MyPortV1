import { TypeAnimation } from 'react-type-animation';

function TextWriter() {
  return (
    <div>
        <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Programming.',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'Reading.',
      1000,
      'Eating.',
      1000,

    
    ]}
    wrapper="span"
    speed={50}
    style={{ color:'white' }}
    repeat={Infinity}
  />
      
    </div>
  )
}

export default TextWriter
