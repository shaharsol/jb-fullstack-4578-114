"use strict";

(async() => {

    const mySyncFunc = () => 1
    const myAsyncFunc = async () => 1

    console.log(mySyncFunc())
    console.log(await myAsyncFunc())

})()


