import '@wcj/dark-mode';
import './style.css'
const Switch = () => {
    return (
        <div className='text-sm'>
            <dark-mode   light="Light" dark="Dark" style={{ font: '12px'}}></dark-mode>
        </div>
    );
};

export default Switch;