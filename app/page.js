import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className='h-screen flex flex-row items-center w-full' >
        <section className='w-2/3 flex justify-center items-center bg-fondo h-full' style={{ marginInline: 'auto' }}>
          <Image
            className='rounded-lg flex justify-center'
            src="/me1.gif"
            alt="Logo"
            width={300}
            height={300}
          />
        </section>

        <section className='flex flex-col items-center justify-center bg-black h-full'>
          <nav className='mt-5 text-white flex flex-row justify-end gap-10 w-full pr-8'>
            <a href='#about' className='hover:text-purple-300 hover:cursor-pointer hover:transition-transform hover:transform hover:scale-110'>About me</a>
            <a href='#proyect' className='hover:text-purple-300 hover:cursor-pointer hover:transition-transform hover:transform hover:scale-110'>Projects</a>
            <a href='#about' className='hover:text-purple-300 hover:cursor-pointer hover:transition-transform hover:transform hover:scale-110'>Technologies</a>
            <a href='#contact' className='hover:text-purple-300 hover:cursor-pointer hover:transition-transform hover:transform hover:scale-110'>Contact me</a>
          </nav>
          <h1 className='text-3xl text-end w-2/3 text-white bebas-neue tracking-wider my-auto'>
            Hi! My name is Lucas Delgado, and I'm a <span className='text-purple-300 font-bold'>fullstack developer</span> dedicated to creating innovative web solutions.
          </h1>
        </section>

      </section>

      {/* ----------- SECCION DE SOBRE MI ----------- */}

      <section className='flex flex-col bg-purple-300 h-screen'>
        <section id='about' className='flex flex-row h-full gap-10 items-center '>
          <section className='w-3/4 flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-semibold'>About Me</h2>
            <p className='w-3/4 text-start mt-5 text-lg'>Hello, I'm Lucas Delgado. A 23-year-old Full Stack developer living in Tucuman, Argentina. My personal approach and why I entered programming was because of my passion for the world of Front End development. Being able to create an interface with an eye catching design and an enriching experience for the user is what I am most passionate about in this field.
            </p>

            <a target='_blank' href='https://drive.google.com/file/d/1chap1odGmScZdVboV_OfpzQJ8_apeqMO/view?usp=sharing'
              className='mt-8 rounded-lg p-3 text-black bg-purple-400 border-2 border-solid border-purple-800 hover:bg-purple-600 hover:border-purple-900 hover:text-white hover:transition-colors inline-block relative'
              style={{ boxShadow: '0 4px 6px -1px #40205e, 0 2px 4px -1px #40205e' }}>
              <button className='font-bold'>
                Download CV
              </button>
            </a>

            <h2 className='mt-8 text-xl text-left font-semibold'>My Skills</h2>
            <section className='flex flex-row mt-5 gap-5 overflow-hidden'>
              <div className='flex gap-5 animate-marquee'>
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
            </section>
          </section>

          <section className='mr-5 flex justify-center w-1/2' style={{borderRadius: '100%'}}>
            <Image
              src="/my.png"
              alt="logo"
              width={200}
              height={200}
              style={{ borderRadius: '100%', height: '310px', width: '300px', border: '1px solid black', boxShadow: '0 4px 6px -1px #40205e, 0 2px 4px -1px #40205e' }}
            />
          </section>
        </section>
      </section>

      {/* ----------- SECCION DE PROYECTOS ----------- */}

      <section id='proyect' className='w-full bg-fondo'>
        <section className='flex flex-col justify-center'>
          <h2 className='text-3xl font-semibold text-center py-6'>Projects</h2>
          <a target='blank' href='https://greenwave-henry.vercel.app/'>
            <section className='flex flex-row w-3/4 bg-purple-300 mx-auto rounded-lg pr-4'>
              <Image src="/green.png" alt="logo green wave" width={450} height={500}
                style={{ borderRadius: '0.5rem 0.5rem' }}
              />
              <section className='flex flex-col w-full'>
                <h2 className='text-center text-xl font-medium mt-3'>Green Wave</h2>
                <p className='m-4 text-start pb-4' style={{ borderBottom: '1px solid #431A38' }}>We are dedicated to promoting awareness of the vital importance of the environment and recycling, recognizing that these issues are fundamental to the well-being of our planet and future generations.</p>
                <article className='flex flex-col lg:flex-row lg:flex-wrap gap-3 ml-3 mb-4'>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Javascript</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>CSS</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Tailwind</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Next.Js</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Node.Js</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Express</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>PostgreSQL</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Mercado Pago</p>
                </article>
              </section>
            </section>
          </a>

          <a target='blank' href='https://countries-front-smoky.vercel.app/'>
            <section className='flex flex-row w-3/4 bg-purple-300 mx-auto rounded-lg pl-4 m-10' >
              <section className='flex flex-col w-full'>
                <h2 className='text-center text-xl font-medium mt-3'>Countries</h2>
                <p className='m-4 text-start pb-4' style={{ borderBottom: '1px solid #431A38' }}>Explore fascinating and diverse facts about countries from around the globe with our comprehensive collection of information. Dream up your ideal itinerary and create custom activities tailored to your interests in any country you desire.</p>
                <article className='flex flex-col lg:flex-row lg:flex-wrap gap-3 mr-3 mb-4'>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Javascript</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>CSS</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>React</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Redux</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Node.Js</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>Express</p>
                  <p className='flex-auto text-center bg-tecnologia rounded-lg px-2' style={{ border: '1px solid black' }}>PostgreSQL</p>

                </article>
              </section>
              <Image src="/countries.png" alt="logo green wave" width={500} height={500}
                style={{ borderRadius: '0.5rem 0.5rem' }}
              />
            </section>
          </a>
        </section>
      </section>

      {/* ----------- SECCION DE CONTACTO ----------- */}

      <section id='contact' className='w-full h-screen bg-black flex justify-center items-center'>
        <section className='flex flex-row w-3/4 mx-auto items-center bg-conect rounded-lg py-10' style={{ boxShadow: '0 3px 4px 1px #805ad5, 0 2px 4px 3px #805ad5' }}>
          <section className='flex flex-col w-full pl-16'>
            <h2 className='text-left font-semibold mt-5 text-3xl'>Let's Connect!</h2>
            <p className='pt-6 text-left w-4/5 text-lg'>
              <span className='font-semibold'>I'm always up for a chat</span> and would love to hear from you. Feel free to reach out via email at <a className='hover:text-purple-400' target='blank' href='mailto:lucasdelgado.dev@gmail.com'>lucasdelgado.dev@gmail.com</a>. Additionally, you can connect with me on social media.
            </p>
            <section className='mt-6 flex flex-row items-center gap-5'>
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
            <p className='mt-4 text-left text-sm text-black font-medium'>
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
      <footer className='bg-footer text-center py-3 text-lg font-medium'>Copyright © Lucas Mariano Delgado. All rights reserved.</footer>
    </main>
  )
}
