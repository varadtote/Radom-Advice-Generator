import React from 'react';

function Advice({ advice }) {
    var i = 0;

    var speed = 50;
    function typeWriter({ advice }) {
        let txt = advice;
        if (i < txt.length) {
            document.getElementById('demo').innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    return typeWriter({ advice });
}

export default Advice;
