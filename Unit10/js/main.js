

async function getHotelData() {
    try {
        const response = await fetch('./hotel.json')
        return await response.json() //Return the JSON object
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

// store in a variable document.querySelectorAll("a")
// use that variable to loop over each elem and addEventlistener to each
// one I suggest using forEach

const hotelList = document.querySelectorAll("button")
hotelList.forEach(hotel => {
    hotel.addEventListener('click', hotelInfo)
})

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`
    document.querySelector("#rooms").textContent = `${hotelChoice.rooms}`
    document.querySelector("#gym").textContent = `${hotelChoice.gym}`
    document.querySelector("#roomTypes").textContent = `${hotelChoice.roomTypes}`
    document.querySelector("#address").textContent = `${hotelChoice.address}`
    document.querySelector("#picture").src = `./images/${hotelChoice.picture}`

}