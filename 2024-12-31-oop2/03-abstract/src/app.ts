import Client from "./client.js";
import Employee from "./employee.js";
import Person from "./person.js";
import Supplier from "./supplier.js";

const client = new Client('freddy', new Date(), [90, 30, 20])
client.printName()
const employee = new Employee('George', new Date(), [6000, 6200, 6000])
employee.printName()
const supplier = new Supplier('Jessica', new Date(), [400, 500])
supplier.printName()

const totalRevenue = client.calcRevenue() + employee.calcRevenue() + supplier.calcRevenue()
console.log(`total revenue: ${totalRevenue}`)
// const person = new Person('Anna', new Date())
// person.printName()
