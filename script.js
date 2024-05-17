function updateTime() {
    const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('clock-mumbai').textContent = 'Mumbai: ' + new Intl.DateTimeFormat('en-GB', options).format(new Date());

    options.timeZone = 'Asia/Shanghai';
    document.getElementById('clock-shanghai').textContent = 'Shanghai: ' + new Intl.DateTimeFormat('en-GB', options).format(new Date());

    options.timeZone = 'Europe/Zurich';
    document.getElementById('clock-frauenfeld').textContent = 'Frauenfeld: ' + new Intl.DateTimeFormat('en-GB', options).format(new Date());

    options.timeZone = 'America/New_York';
    document.getElementById('clock-southington').textContent = 'Southington: ' + new Intl.DateTimeFormat('en-GB', options).format(new Date());
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to set the time immediately