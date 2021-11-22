import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi.")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Gülşen", "Pekcan", "İstanbul")
let user2 = new User(2, "Ece", "Cans", "Bursa")
userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))

//prototyping
let customer = {id: 1, firstName: "Gülş"}
customer.lastName = "Pekcan"

console.log(customer.lastName)

console.log("-------------------------------------------------------------------------------------------------")

userService.load()

let customerToAdd = new Customer(1, "Seço", "Günay", "İstanbul", "dsdasd")
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())