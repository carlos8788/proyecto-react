import Typewriter from 'typewriter-effect';

const TypewriterExample = () => {
  return (
      <Typewriter
        options={{
          strings: ['Hola', 'Hola Mundo!', 'Bienvenidos a React!'],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
      />
  );
};

export default TypewriterExample;
