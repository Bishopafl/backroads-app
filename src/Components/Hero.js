import { heroBtnText, heroSubtitle, heroTitle } from "../data";

const Hero = () => {
    return (
        <section className='hero' id='home'>
            <div className='hero-banner'>
            <h1>{heroTitle}</h1>
            <p>
                {heroSubtitle}
            </p>
            <a href='#products' className='btn hero-btn'>{heroBtnText}</a>
            </div>
        </section>
    );
}

export default Hero;