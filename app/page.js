import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className='h-screen flex flex-col items-center' style={{ background: 'linear-gradient(90deg, #d4d9f7 35%, #000000 20%, #000000 100%)' }}>

        <nav className='p-5 text-white flex flex-row justify-end gap-10 w-full pr-8'>
          <a href='#about' className='hover:text-purple-300 hover:cursor-pointer hover:transition-transform hover:transform hover:scale-110'>About me</a>
          <a className='hover:text-purple-300 hover:cursor-pointer hover:transition-transform hover:transform hover:scale-110'>Proyects</a>
          <a className='hover:text-purple-300 hover:cursor-pointer hover:transition-transform hover:transform hover:scale-110'>Technologies</a>
          <a className='hover:text-purple-300 hover:cursor-pointer hover:transition-transform hover:transform hover:scale-110'>Contact me</a>
        </nav>

        <section className="flex flex-row items-center justify-center h-full">
          <section className='flex flex-row items-center justify-evenly'>
            <Image
              className='rounded-lg'
              src="/me1.gif"
              alt="Logo"
              width={300}
              height={200}
            />
            <h1 className='text-3xl w-1/2 text-end text-white bebas-neue tracking-wider'>
              Hi! My name is Lucas Delgado, and I'm a <span className='text-purple-300 font-bold'>fullstack developer</span> dedicated to creating innovative and scalable web solutions.
            </h1>
          </section>
        </section>
      </section>

      <section className='flex flex-col bg-purple-300 h-screen'>
        <section id='about' className='flex flex-row h-full gap-10 items-center '>
          <section className='w-3/4 flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-semibold'>About Me</h2>
            <p className='w-3/4 text-start mt-5 text-lg'>Hello, I'm Lucas Delgado. A 23-year-old Full Stack developer living in Tucuman, Argentina. My personal approach and why I entered programming was because of my passion for the world of Front End development. Being able to create an interface with an eye-catching design and an enriching experience for the user is what I am most passionate about in this field.
            </p>

            <a target='_blank' href='https://drive.google.com/file/d/1chap1odGmScZdVboV_OfpzQJ8_apeqMO/view?usp=sharing'
              className='mt-8 rounded-lg p-3 text-black bg-purple-400 border-2 border-solid border-purple-800 hover:bg-purple-600 hover:border-purple-900 hover:text-white hover:transition-colors inline-block relative'
              style={{ boxShadow: '0 4px 6px -1px #40205e, 0 2px 4px -1px #40205e' }}>
              <button className='font-bold'>
                Download CV
              </button>
            </a>

            <h2 className='mt-5'>My Skills</h2>
          </section>

          <section className='mr-5 flex justify-center w-1/2'>
            <Image
              src="/me1.gif"
              alt="Description of the image"
              width={300}
              height={300}
              style={{borderRadius: '20%'}}
            />
          </section>

        </section>
      </section>

    </main>
  )
}
