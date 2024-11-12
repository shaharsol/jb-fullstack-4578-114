const emp = {
    firstName: 'Moshe',
    lastName: 'Katz',
    salary: 1000000
}

for(const prop in emp) {
    document.write(`${prop}: ${emp[prop]}<br>`)
}

document.write('<hr/>')
// emp.address = 'Ahad Haam 12 Tel Aviv'
emp['address'] = 'Ahad Haam 12 Tel Aviv'

document.write(`adress: ${emp.address}<br>`)

delete emp.salary

document.write(`salary: ${emp.salary}<br>`)
