import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
    return (
        <section className='section' id='about'>
            <Title title='about' subTitle='us' />

            <div className='section-center about-center'>
            <div className='about-img'>
                <img
                src={ aboutImg }
                className='about-photo'
                alt='awesome beach'
                />
            </div>
            <article className='about-info'>
                <h3>More than just tobacco</h3>
                <p>
                    We source only the finest hand-rolled cigars from legendary regions such as Cuba, Nicaragua, and the Dominican Republic. Each cigar is crafted with precision, aged to perfection, and designed for the ultimate smoking experience.
                </p>
                <p>
                    Our Selection Includes:
                    <ul>
                        <li><i className='fa fa-check'></i> Hand-Rolled Perfection</li>
                        <li><i className='fa fa-check'></i> Premium Tobacco Blends</li>
                        <li><i className='fa fa-check'></i> Limited & Exclusive Editions</li>
                    </ul>
                </p>
                <a href='#tours' className='btn'>read more</a>
            </article>
            </div>
        </section>
    );
}

export default About;