'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <section className='h-screen flex flex-col-reverse sm:flex-row items-center w-full'>
        <section className='w-full sm:w-1/3 flex justify-center items-center bg-fondo h-full'>
          <Image
            className='rounded-lg flex justify-center'
            src="/me1.gif"
            alt="Logo"
            width={300}
            height={300}
          />
        </section>

        <section className='flex flex-col items-center justify-center bg-black h-full w-full sm:w-2/3'>

          <nav className={`text-white bg-mobil flex flex-col justify-end w-full sm:bg-black sm:flex-row sm:mt-5 sm:justify-end sm:pr-8 mb-10 sm:mb-0 sticky top-0 left-0 z-50 sm:relative transition-all duration-800 ease-in-out`}>
            <div className="sm:hidden py-1" style={{ borderBottom: '1px solid purple' }}>
              <button onClick={toggleMenu}>
                {isOpen ? (
                  <Image
                    className='rounded-lg flex justify-center ml-3'
                    src="/x.png"
                    alt="Close Icon"
                    width={30}
                    height={30}
                  />
                ) : (
                  <Image
                    className='rounded-lg flex justify-center ml-3'
                    src="/menu.png"
                    alt="Menu Icon"
                    width={30}
                    height={30}
                  />
                )}
              </button>
            </div>

            <div className={`sm:flex flex flex-col py-5 gap-4 sm:py-0 sm:ml-0 sm:flex-row justify-start sm:justify-end sm:gap-10 w-full sm:pr-8 ${isOpen ? 'block' : 'hidden'}`}>
              <a href='#about' className='text-center py-2 sm:py-0  sm:bg-black   hover:text-purple-300 hover:cursor-pointer sm:hover:transition-transform sm:hover:transform sm:hover:scale-110'>About me</a>
              <a href='#proyect' className='text-center py-2 sm:py-0  sm:bg-black   hover:text-purple-300 hover:cursor-pointer sm:hover:transition-transform sm:hover:transform sm:hover:scale-110'>Projects</a>
              <a href='#about' className='text-center py-2 sm:py-0  sm:bg-black   hover:text-purple-300 hover:cursor-pointer sm:hover:transition-transform sm:hover:transform sm:hover:scale-110 '>Technologies</a>
              <a href='#contact' className='text-center py-2 sm:py-0  sm:bg-black   hover:text-purple-300 hover:cursor-pointer sm:hover:transition-transform sm:hover:transform sm:hover:scale-110'>Contact me</a>
            </div>
          </nav>

          <h1 className={`text-3xl my-8 pb-8 mx-auto text-start sm:text-end w-2/3 text-white bebas-neue tracking-wider sm:my-auto transition-all duration-500 ease-in-out ${isOpen ? 'mt-52 sm:mt-0' : ''}`}>
            Hi! My name is Lucas Delgado, and I'm a <span className='text-purple-300 font-bold'>fullstack developer</span> dedicated to create innovative web solutions.
          </h1>
        </section>
      </section>

      {/* ----------- SECCION DE SOBRE MI ----------- */}

      <section className='flex flex-col bg-purple-300 sm:h-screen'>
        <section id='about' className='flex flex-col sm:flex-row sm-full gap-10 items-center '>
          <section className='w-3/4 flex flex-col justify-center items-center'>
            <h2 className='text-3xl mt-10 font-semibold'>About Me</h2>
            <p className='w-full sm:w-3/4 text-start mt-5 text-lg'>My name is Lucas Delgado, I'm a 23-years-old Full Stack developer. Currently, living in Tucumán, Argentina. The main reason as to why I chose programming as a path career is because I'm passionate about Front End Development's world. Being able to create an interface with and eye-catching design and an enriching experience for the user is what I'm really looking forward to in this field.
            </p>

            <a target='_blank' href='https://drive.google.com/file/d/1Rc6MLZN2IUck8ECMaZwG5tvujBoxK2bl/view?usp=sharing'
              className='mt-8 rounded-lg p-3 text-black bg-purple-400 border-2 border-solid border-purple-800 hover:bg-purple-600 hover:border-purple-900 hover:text-white hover:transition-colors inline-block relative'
              style={{ boxShadow: '0 4px 6px -1px #40205e, 0 2px 4px -1px #40205e' }}>
              <button className='font-bold'>
                Download CV
              </button>
            </a>

            <h2 className='mt-8 text-xl text-left font-semibold'>My Skills</h2>
            <section className='mt-5 overflow-hidden w-full sm:w-4/5'>
              <div className='animate-marquee'>
                <div className='flex flex-row gap-5 animate-marquee'>
                  <Image src="/html-5.png" alt="logo html" width={65} height={65} />
                  <Image src="/css-3.png" alt="logo css" width={65} height={65} />
                  <Image src="/js.png" alt="logo javascript" width={65} height={65} />
                  <Image src="/react.png" alt="logo react" width={65} height={65} />
                  <Image src="/redux.png" alt="logo redux" width={65} height={65} />
                  <Image src="/next.png" alt="logo nextjs" width={65} height={65} />
                  <Image src="/tailwind.png" alt="logo tailwind" width={65} height={65} />
                  <Image src="/node.png" alt="logo node" width={65} height={65} />
                  <Image src="/Express.png" alt="logo express" width={65} height={65} />
                  <Image src="/sequelize.png" alt="logo sequelize" width={65} height={65} />
                  <Image src="/Postgresql.png" alt="logo Postgresql" width={65} height={65} />
                  <Image src="/github.png" alt="logo github" width={65} height={65} />
                  <Image src="/git.png" alt="logo git" width={65} height={65} />
                  <Image src="/html-5.png" alt="logo html" width={65} height={65} />
                  <Image src="/css-3.png" alt="logo css" width={65} height={65} />
                  <Image src="/js.png" alt="logo javascript" width={65} height={65} />
                  <Image src="/react.png" alt="logo react" width={65} height={65} />
                  <Image src="/redux.png" alt="logo redux" width={65} height={65} />
                  <Image src="/next.png" alt="logo nextjs" width={65} height={65} />
                  <Image src="/tailwind.png" alt="logo tailwind" width={65} height={65} />
                  <Image src="/node.png" alt="logo node" width={65} height={65} />
                  <Image src="/Express.png" alt="logo express" width={65} height={65} />
                  <Image src="/sequelize.png" alt="logo sequelize" width={65} height={65} />
                  <Image src="/Postgresql.png" alt="logo Postgresql" width={65} height={65} />
                  <Image src="/github.png" alt="logo github" width={65} height={65} />
                  <Image src="/git.png" alt="logo git" width={65} height={65} />
                </div>
              </div>
            </section>
          </section>

          <section className='mr-5 mb-10 sm:mb-0 flex justify-center w-1/2 ' style={{ borderRadius: '100%' }}>
            <Image
              src="/me2.png"
              alt="logo"
              width={200}
              height={200}
              className='p-2'
              style={{ borderRadius: '5%', height: '220px', width: '250px', boxShadow: '0 4px 6px -1px #40205e, 0 2px 4px -1px #40205e' }}
            />
          </section>
        </section>
      </section>

      {/* ----------- SECCION DE PROYECTOS ----------- */}

      <section id='proyect' className='w-full bg-fondo'>
        <section className='flex flex-col justify-center'>
          <h2 className='text-3xl font-semibold text-center py-6'>Projects</h2>
          <a target='blank' href='https://greenwave-henry.vercel.app/'>
            <section className='flex flex-col sm:flex-row w-3/4 bg-purple-300 mx-auto rounded-lg sm:pr-4'>
              <Image src="/green.png" alt="logo green wave" width={450} height={500}
                style={{ borderRadius: '0.5rem 0.5rem' }}
              />
              <section className='flex flex-col w-full'>
                <h2 className='text-center text-xl font-medium mt-3'>Green Wave</h2>
                <p className='m-4 text-center pb-4' style={{ borderBottom: '1px solid #431A38' }}>We are dedicated to promote awareness of the vital importance of the environment and, therefore, recycling. Recognizing that these issues are fundamental, is the first step to contribute in the well-being of our planet and future generations.</p>
                <article className='flex flex-wrap justify-center gap-3 sm:ml-3 mb-4'>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Javascript</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>CSS</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Tailwind</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Next.Js</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Node.Js</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Express</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>PostgreSQL</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Mercado Pago</p>
                </article>
              </section>
            </section>
          </a>

          <a target='blank' href='https://countries-front-smoky.vercel.app/'>
            <section className='flex flex-col sm:flex-row w-3/4 bg-purple-300 mx-auto rounded-lg m-10' >
              <Image src="/countries.png" alt="logo green wave" width={450} height={500}
                style={{ borderRadius: '0.5rem 0.5rem' }}
              />
              <section className='flex flex-col w-full'>
                <h2 className='text-center text-xl font-medium mt-3'>Countries</h2>
                <p className='m-4 text-center pb-4' style={{ borderBottom: '1px solid #431A38' }}>Explore fascinating and diverse facts about countries from around the globe with our comprehensive collection of information. Dream up your ideal itinerary and create custom activities tailored to your interests in any country you desire.</p>
                <article className='flex flex-wrap justify-center gap-3 sm:ml-3 sm:mr-3 mx-4 mb-4'>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Javascript</p>
                  <p className='text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>CSS</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>React</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Redux</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Node.Js</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Express</p>
                  <p className=' text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>PostgreSQL</p>

                </article>
              </section>

            </section>
          </a>
        </section>
      </section>

      {/* ----------- SECCION DE CONTACTO ----------- */}

      <section id='contact' className='w-full h-screen bg-black flex justify-center items-center'>
        <section className='flex flex-col sm:flex-row w-4/5 sm:w-3/4 mx-auto items-center bg-conect rounded-lg py-10' style={{ boxShadow: '0 3px 4px 1px #805ad5, 0 2px 4px 3px #805ad5' }}>
          <section className='flex flex-col justify-center items-center sm:items-start w-full sm:pl-16'>
            <h2 className='text-left font-semibold mt-5 text-3xl'>Let's Connect!</h2>
            <p className='pt-6 sm:text-left text-center w-4/5 text-lg'>
              <span className='font-semibold'>I'm always up for a chat</span> and would love to hear from you. Feel free to reach out via email at <a className='hover:text-purple-400 text-purple-700' target='blank' href='mailto:lucasdelgado.dev@gmail.com'>lucasdelgado.dev@gmail.com</a>. Additionally, you can connect with me on social media.
            </p>
            <section className='mt-6 flex flex-row items-start gap-5'>
              <a target='blank' href='https://www.linkedin.com/in/lucas-delgado-77b582165/' className='hover:bg-purple-400 hover:rounded-lg'>
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn Logo"
                  width={30}
                  height={30}
                />
              </a>

              <a target='blank' href='https://github.com/MLucasDelgado'
                className='hover:bg-purple-400 hover:rounded-full'>
                <Image
                  src="/github.png"
                  alt="Github Logo"
                  width={30}
                  height={30}
                />
              </a>

            </section>
            <p className='mt-6 mb-6 px-4 sm:px-0 sm:text-left text-sm text-center text-black font-medium'>
              Looking forward to connecting and discussing exciting opportunities, projects, or just having a friendly conversation!
            </p>
          </section>

          <section className='flex justify-center items-center mx-auto w-1/2'>
            <Image
              src="/contac.gif"
              alt="Contact Animation"
              width={300}
              height={300}
            />
          </section>
        </section>
      </section>
      <footer className='bg-footer text-center py-3 px-1 text-sm sm:text-lg font-medium'>Copyright © Lucas Mariano Delgado. All rights reserved.</footer>
    </main>
  )
}
