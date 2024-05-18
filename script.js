function createTicks() {
    const svg = document.getElementById('ticks');
    const r = 40;
    const centerX = 50;
    const centerY = 50;
    const startAngle = -Math.PI / 2;

    for (let i = 0; i < 60; i++) {
        const angle = startAngle + (i / 60) * (2 * Math.PI);
        const x1 = centerX + r * Math.cos(angle);
        const y1 = centerY + r * Math.sin(angle);
        const x2 = centerX + (r - 5) * Math.cos(angle);
        const y2 = centerY + (r - 5) * Math.sin(angle);

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('class', 'tick');
        line.setAttribute('id', `tick-${i}`);
        svg.appendChild(line);
    }
}

function updateTime() {
    const optionsHM = { hour12: false, hour: '2-digit', minute: '2-digit' };

    document.getElementById('clock-mumbai').textContent = new Intl.DateTimeFormat('en-GB', {...optionsHM, timeZone: 'Asia/Kolkata'}).format(new Date());
    document.getElementById('clock-shanghai').textContent = new Intl.DateTimeFormat('en-GB', {...optionsHM, timeZone: 'Asia/Shanghai'}).format(new Date());
    document.getElementById('clock-frauenfeld').textContent = new Intl.DateTimeFormat('en-GB', {...optionsHM, timeZone: 'Europe/Zurich'}).format(new Date());
    document.getElementById('clock-bristol').textContent = new Intl.DateTimeFormat('en-GB', {...optionsHM, timeZone: 'Europe/London'}).format(new Date());

    const seconds = new Date().getSeconds();
    document.getElementById('seconds').textContent = seconds;

    // Update tick colors
    for (let i = 0; i < 60; i++) {
        const tick = document.getElementById(`tick-${i}`);
        if (i <= seconds) {
            tick.style.stroke = 'white';
        } else {
            tick.style.stroke = 'gray';
        }
    }
}



createTicks();
setInterval(updateTime, 1000);
updateTime();
