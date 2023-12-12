import '../styles/nav.scss'
import lenis from '../lenis';

export default function Nav(){

    const navigator = (e) =>{
        e.preventDefault();
        lenis.scrollTo(`#${e.target.innerHTML}`,{
            duration:4,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            offset: -100,
        });
    }
    return (
        <div className='nav'>
            <div className='logo'>
                <img src="/remedi.svg" alt="logo" />
            </div>
            <div className='navlinks'>
                <a onClick={navigator}>Home</a>
                <a onClick={navigator}>Seller</a>
                <a onClick={navigator}>Buyer</a>
                <a onClick={navigator}>FAQs</a>
                <a onClick={navigator}>ContactUs</a>
            </div>
            <div className='loginContainer'>
                <a className='login'>Log in</a>
                <a className='signup'>Sign up</a>
            </div>
        </div>
    );
}