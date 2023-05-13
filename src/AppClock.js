import { useState } from 'react';
import ClockFunction from './ClockFunction';

export default function AppClock() {
    const [show, setShow] = useState(false);

    return <>
        { show && <ClockFunction />};
        <button onClick={
            () => setShow(!show)
        }>
            { show ? 'Esconder' : 'Mostrar'}
        </button>
    </>
}