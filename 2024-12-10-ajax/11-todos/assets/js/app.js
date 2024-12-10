"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateStatsTable = todos => {

        const totalTodos = todos.length
        const completedTodos = todos.filter(todo => todo.completed).length
        const incompletedTodos = totalTodos - completedTodos

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

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const todos = await getData('https://jsonplaceholder.typicode.com/todos')

            // generate html
            const todosTableHTML = generateTodosTable(todos)
            const statsTableHTML = generateStatsTable(todos)

            // render html
            renderTodosTable(todosTableHTML)
            renderStatsTable(statsTableHTML)
            
        } catch (e) {
            console.warn(e)
        }
    })

})()


