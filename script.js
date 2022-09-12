function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    const botton = document.getElementById('click');
    const clock = document.getElementById('clock');

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }
    if (hrs > 12) {
        hrs = hrs - 12;
    }


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = seconds;
    setTimeout(() => {
        displayTime();
    }, 1000);
    botton.addEventListener('click', (e) => {
        if (botton.innerHTML == 'Dark Mode') {
            document.body.style.backgroundColor = 'black';
            botton.innerHTML = 'Light Mode';
            clock.classList.toggle("dark");
            return;
        } else {
            document.body.style.backgroundColor = 'white';
            botton.innerHTML = 'Dark Mode';
            clock.classList.toggle("light");
            return;
        }
    });

}
displayTime();