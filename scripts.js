

window.addEventListener("load", function () {
    const paragraph = document.getElementById('flightStatus')
    const colorInBack = document.getElementById('shuttleBackground')
    const height = document.getElementById('spaceShuttleHeight')
    const button = document.getElementById('takeoff')

    button.addEventListener("click", function () {
        let response =
            window.confirm('Confirm that the shuttle is ready for takeoff')
        if (response) {
            paragraph.innerHTML = 'shuttle in flight'
            colorInBack.style.backgroundColor = 'blue'
            height.innerHTML = 10000
        }
    })

})
