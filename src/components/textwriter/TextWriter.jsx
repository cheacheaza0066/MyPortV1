import { TypeAnimation } from 'react-type-animation';

function TextWriter() {
  return (
    <div>
        <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Coading.',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'UX | UI.',
      1000,
      'YOU',
      1000,

    
    ]}
    wrapper="span"
    speed={50}
    style={{ color:'white'}}
    repeat={Infinity}
  />
      
    </div>
  )
}

export default TextWriter
