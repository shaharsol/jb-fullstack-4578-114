const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
  ]


  const mid = [
    [],
    [],
  ]


  const result = [
    {suffix: ".io", count: 3},
    {suffix: ".com", count: 2},
  ]


"use strict";

(() => {

    const extractSuffixFromEmail = email => email.substring(email.lastIndexOf('.'))

    const getData = url => fetch(url).then(response => response.json())

    const generateEmailSuffixesTable = users => {
        const result = users
            .map(user => extractSuffixFromEmail(user.email)) // (10) ['.biz', '.tv', '.net', '.org', '.ca', '.info', '.biz', '.me', '.io', '.biz']
            .reduce((suffixes, current) => {
                const existingSuffix = suffixes.find(({suffix}) => suffix === current)
                console.log(existingSuffix, current)
                if(!existingSuffix) suffixes.push({
                    suffix: current,
                    count: 1
                })
                else existingSuffix.count++
                return suffixes
            }, [])
        
        console.log(result)
    }

    const renderEmailSuffixesTable = newHTML => document.getElementById('emailSuffixes').innerHTML = newHTML

    const load = async () => {
        try {

            // get data
            const users = await getData('https://jsonplaceholder.typicode.com/users')

            // generate html
            const emailSuffixesHTML = generateEmailSuffixesTable(users)

            // render html
            renderEmailSuffixesTable(emailSuffixesHTML)
            
        } catch (e) {
            console.warn(e)
        }
    }

    load()

})()


