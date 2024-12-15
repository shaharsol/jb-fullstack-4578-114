"use strict";

(() => {


    const x = 1
    const y = 2
    const z = 3

    // O(1)
    console.log(z)

    const mySet = new Set()

    mySet.add('Beery') // dfhgfdhfgdfgs 124
    mySet.add('Beery') // dhsdgfsdghsdsda 188
    mySet.add('Beery')
    mySet.add('Beery')
    mySet.add('Beery')
    mySet.add('Beery')
    mySet.add('Yuval')
    mySet.add('Mishel')

    console.log(mySet.has('Beery'))
    console.log(mySet.has('dfhhkdshf'))


    console.log(mySet)

    const myNonUniqueArray = [10, 10, 10, 20, 20, 30]
    const myUniqueSet = new Set(myNonUniqueArray)
    const myUniqueArray = [...myUniqueSet]
    console.log(myUniqueArray)

})()
