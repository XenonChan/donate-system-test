const socket = io();
const donations = []

socket.on('donate', (data) => {
    donations.push(data)
    
    if(!document.querySelector('.alert')) {
        showDonate()
    }
})

function showDonate() {

    if(donations.length === 0) return;

    const box = document.getElementById('donations')
    const alert = document.createElement("div")
    const h1 = document.createElement("h1")
    const h2 = document.createElement("h2")
    const img = document.createElement("img")
    const data = donations.shift()
    alert.classList.add("alert")
    h1.innerHTML = `${data.name} <span style="color: white">Donated</span> ${data.amount} THB`;
    h2.textContent = data.message
    img.src = "https://i.giphy.com/odG50lUOUgl5qEz1OT.webp"
    img.style.width = "300px"
    img.style.height = "300px"
    box.appendChild(alert)
    alert.appendChild(img)
    alert.appendChild(h1)
    alert.appendChild(h2)

    const sound = new Audio("sound.mp3")
    sound.play();

    alert.style.opacity = 0
    let opacity = 0
    const interval = setInterval(() => {
        opacity += 0.01
        alert.style.opacity = opacity

        if (opacity >= 1) {
            clearInterval(interval)
        }
    }, 10)

    setTimeout(() => {
        let opacity = 1;
        const interval = setInterval(() => {
            opacity -= 0.01
            alert.style.opacity = opacity

            if (opacity <= 0) {
                clearInterval(interval)
                alert.remove()
                if (donations.length > 0) {
                    showDonate()
                }
            }
        }, 10)
    }, 10000)

    console.log("รับมาแล้ววว")
}