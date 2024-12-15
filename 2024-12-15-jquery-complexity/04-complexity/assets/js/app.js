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
            .reduce((cumulative, current) => {
                const { userId } = current;
                (cumulative[userId] ? cumulative[userId] : cumulative[userId] = []).push(current)
                return cumulative
            }, [])
            .filter(userTodos => userTodos)
            .map(userTodos => userTodos
                .reduce((cumulative, current) => {
                    cumulative.completed += current.completed ? 1 : 0

                    // if + command, else + command
                    // O(1) + O(1) = O(1)
                    cumulative.incompleted += current.completed ? 0 : 1
                    
                    return cumulative
                }, {userId: userTodos[0].userId, completed: 0, incompleted: 0})
            )
            .map(userTodos => `
                <tr>
                    <td>${userTodos.userId}</td>
                    <td>${userTodos.completed}</td>
                    <td>${userTodos.incompleted}</td>
                </tr>
            `).
            reduce((cumulative, current) => cumulative + current, '')

        // O(1)    
        console.log(result)

        // O(1)
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


