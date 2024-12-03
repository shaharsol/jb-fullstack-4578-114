// const myFunc = (myLocation) => console.log(myLocation)
// navigator.geolocation.getCurrentPosition(myFunc)

/*
const getCurrentPosition = (callback) => {
    //
    //
    //
    const location = {
        coords: {
            longitude: 20,
            latitdue: 20,
            altitude: 0
        }
    }
    callback(location)
}
*/
navigator.geolocation.getCurrentPosition((myLocation) => console.log(myLocation))
// 1. i call getCurrentPosition
// 2. the callback i provide is kept somewhere in memory
// 3. when the answer is ready, JavaScript invokes the callback function out of the blue
// regardless of anything else that currently happens in the app
// 4. JavaScript invokes the function on behalf of us, and provides a value for the parameter
// ???(location)

navigator.geolocation.getCurrentPosition(console.log)
// 1. i call getCurrentPosition
// 2. the callback i provide is kept somewhere in memory
// 3. when the answer is ready, JavaScript invokes the callback function out of the blue
// regardless of anything else that currently happens in the app
// 4. JavaScript invokes the function on behalf of us, and provides a value for the parameter
// ???(location) => console.log(location)





