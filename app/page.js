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
            <a className='hover:text-purple-300 hover:cursor-pointer hover:transition-transform hover:transform hover:scale-110'>Projects</a>
            <a href='#about' className='hover:text-purple-300 hover:cursor-pointer hover:transition-transform hover:transform hover:scale-110'>Technologies</a>
            <a href='#contact' className='hover:text-purple-300 hover:cursor-pointer hover:transition-transform hover:transform hover:scale-110'>Contact me</a>
          </nav>
          <h1 className='text-3xl text-end w-2/3 text-white bebas-neue tracking-wider my-auto'>
            Hi! My name is Lucas Delgado, and I'm a <span className='text-purple-300 font-bold'>fullstack developer</span> dedicated to creating innovative and scalable web solutions.
          </h1>
        </section>

      </section>

      <section className='flex flex-col bg-purple-300 h-screen'>
        <section id='about' className='flex flex-row h-full gap-10 items-center '>
          <section  className='w-3/4 flex flex-col justify-center items-center'>
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
                <Image src="/nextjs.png" alt="logo nextjs" width={65} height={65} />
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
                <Image src="/nextjs.png" alt="logo nextjs" width={65} height={65} />
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

          <section className='mr-5 flex justify-center w-1/2'>
            <Image
              src="/me1.gif"
              alt="logo"
              width={300}
              height={300}
              style={{ borderRadius: '20%' }}
            />
          </section>
        </section>
      </section>

      <section id='contact' className='w-full h-screen bg-black flex justify-center items-center'>
        <section className='flex flex-row w-3/4 mx-auto items-center bg-white rounded-lg py-10 shadow-lg' style={{ boxShadow: '0 3px 4px 1px #805ad5, 0 2px 4px 3px #805ad5' }}>

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
      <footer className='bg-footer text-center py-3 text-lg'>Copyright © Lucas Mariano Delgado. All rights reserved.</footer>
    </main>
  )
}
