const todos = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 2,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 2,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
]

const arr = [
    [
    ],
    [
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },
    ],
    [
        {
            "userId": 2,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 3,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },

    ]
]

const result = [
    {
        userId: 1,
        completed: 0,
        incompleted: 2
    },
    {
        userId: 2,
        completed: 1,
        incompleted: 1
    },

]


"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateUsersTable = todos => {
        const result = todos

        // complete missing code...

        console.log(result)

        return result
    }

    const generateStatsTable = todos => {

        const totalTodos = todos.length
        const completedTodos = todos.filter(todo => todo.completed).length
        const incompletedTodos = totalTodos - completedTodos
        const completeRatio = completedTodos/totalTodos * 100

        return `
            <tr>
                <td>total todos:</td>
                <td>${totalTodos}</td>
            </tr>
            <tr>
                <td>total completed todos:</td>
                <td>${completedTodos}</td>
            </tr>
            <tr>
                <td>total incompleted todos:</td>
                <td>${incompletedTodos}</td>
            </tr>
            <tr>
                <td>complete ratio:</td>
                <td>${completeRatio}%</td>
            </tr>
        `
    }

    const generateTodosTable = todos => {
        const newHTML = todos
            .map(todo => {
                const { userId, title, completed } = todo // deconstruction
                return `
                    <tr>
                        <td>${userId}</td>
                        <td>${title}</td>
                        <td>${completed ? 'Yes' : 'No'}</td>
                    </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderTodosTable = newHTML => document.getElementById('todos').innerHTML = newHTML

    const renderStatsTable = newHTML => document.getElementById('stats').innerHTML = newHTML

    const renderUsersTable = newHTML => document.getElementById('users').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const todos = await getData('https://jsonplaceholder.typicode.com/todos')

            // generate html
            const todosTableHTML = generateTodosTable(todos)
            const statsTableHTML = generateStatsTable(todos)
            const usersTableHTML = generateUsersTable(todos)

            // render html
            renderTodosTable(todosTableHTML)
            renderStatsTable(statsTableHTML)
            renderUsersTable(usersTableHTML)
            
        } catch (e) {
            console.warn(e)
        }
    })

})()


