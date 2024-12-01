const showUserLocation = () => {
    // the following line contains an asynchronous function invocation
    const location = navigator.geolocation.getCurrentPosition(myLocation => {
        // console.log(`my location:`, myLocation)
        // alert(myLocation)
        console.log(`your location is ${myLocation.coords.latitude}, ${myLocation.coords.longitude}`)
    })
    console.log('after getting current position')
    console.log(location) // undefined
}

showUserLocation()