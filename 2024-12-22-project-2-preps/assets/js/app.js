"use strict";

(async () => {

    // document.getElementById('navCoins').addEventListener('click', () => {
    //     document.getElementById('coins').style.display = 'block'
    //     document.getElementById('reports').style.display = 'none'
    //     document.getElementById('about').style.display = 'none'
    // })

    // document.getElementById('navReports').addEventListener('click', () => {
    //     document.getElementById('coins').style.display = 'none'
    //     document.getElementById('reports').style.display = 'block'
    //     document.getElementById('about').style.display = 'none'
    // })

    // document.getElementById('navAbout').addEventListener('click', () => {
    //     document.getElementById('coins').style.display = 'none'
    //     document.getElementById('reports').style.display = 'none'
    //     document.getElementById('about').style.display = 'block'
    // })



    const getData = (url) => fetch(url).then(response => response.json())

    const fetchRetry = async (url) => {
        let isSuccess = false;
        do {
            try {
                const data = await getData(url)
                isSuccess = true
            } catch (e) {
                setTimeout(() => {
                    fetchRetry(url)
                }, 5000)               
            }
        } while (!isSuccess)
    }

    

    // const getAllCoins = async () => getData('https://api.coingecko.com/api/v3/coins/list')
    const getAllCoins = async () => getData('assets/json/coins.json')
    const getSingleCoin = async (coin) => fetchRetry(`https://api.coingecko.com/api/v3/coins/${coin}`)
    const getGraphData = async (coins) => getData(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coins.join(',')}&tsyms=USD`)

    const coins = await getAllCoins()
    console.log(coins)

    // const btcData = await getSingleCoin('bitcoin')
    // const graphData = await getGraphData(['BTC','ETH'])
    // console.log(btcData)
    // console.log(graphData)



})()