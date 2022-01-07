import { getEmployees, getOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
    const itemClicked = clickEvent.target
    if(itemClicked.id.startsWith("employee")){
    const [,employeeId] = itemClicked.id.split("--")

    for(const employee of employees) {
    if(employee.id === parseInt(employeeId)) {
    employeeName = employee.id
    
  // search thru orders array to find the orders that have the clicked employeeId as a FK      
   const employeeOrders = orders.filter((order)=> order.employeeId === parseInt(employeeId))

  // what can we use to access the number of items in the employees's order array?
    window.alert(`${employee.name} sold ${employeeOrders.length} products`)

}
    }
    }
    }
)



const orders = getOrders ()

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

