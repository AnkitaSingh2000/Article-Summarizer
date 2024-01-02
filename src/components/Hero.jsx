import { logo } from '../assets'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

                <button type='button' onClick={() => window.open('https://github.com/AnkitaSingh2000/Article-Summarizer')} className='black_btn'>
                    GitHub
                </button>
            </nav>

            <h1 className='head_text'>
                Summarize Articles with <br className='max-md:hidden' />
                <span className='red_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Summarize articles with Sumz, an open-source article summarizer that transform lengthy articles
                into clear and concise summaries.
                For eg you can copy (https://nextjs.org/docs/getting-started/project-structure) 
                and paste it here.
            </h2>
        </header>
    )
}

export default Hero
