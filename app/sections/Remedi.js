import '../styles/Remedi.scss';

export default function Remedi() {
    return (
        <>
            <div className='quote01'>Congratulations!!, You're Saving environment by reducing medical waste</div>
            <div className="Remedi section">
                <div className='left'>
                    <div className='head'><span>We Ensure</span><span>Your Safty</span></div>
                    <div className='info'><span>Every medicine is checked by our experts before it gets to you</span></div>
                </div>
                <img src='/plus.png' alt=''/>
                <div className='right'>
                    <img className='bgRemedi' src='/bgRemedi.png' alt=''/>
                    <img className='remediBag' id='remediBag' src='/remediBag.png' alt=''/>
                </div>
            </div>
        </>
    );
}