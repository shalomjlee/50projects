const budgetAmount = document.getElementById("budget-amount")
const expenseAmount = document.getElementById("expense-amount")
const balanceAmount = document.getElementById("balance-amount")

const revert = document.getElementById("revert")

const budgetInput = document.getElementById("budget-number");
const expenseInput = document.getElementById('')
const addBudget = document.getElementById("add-budget");




function getBudgetAmount(budget) {
    if (!budget) {
        budgetInput.placeholder = "Please input a budget"
    } else {
        budgetAmount.innerText = budget;
        balanceAmount.innerText = budget;
        localStorage.setItem('budget', budget)
        budgetInput.value = "";
    }
    // if (!localStorage.getItem('budget')) {
    //     console.log(Number(JSON.parse(window.localStorage.getItem('budget')) ))
    //     $window.localStorage.setItem('budget', Number(JSON.parse(window.localStorage.getItem('budget'))))
    //     console.log(typeof(budgetAmount))
    // }
}


revert.addEventListener("click", function(){
    const found = localStorage.getItem("budget");
    const num = Number(found)
    const remade = JSON.parse(num)
    console.log(remade)
    console.log(typeof(remade))
    budgetAmount.innerText= remade
    balanceAmount.innerText = remade
})


addBudget.addEventListener("submit", (e) => {
    e.preventDefault();
    getBudgetAmount(budgetInput.value)
    
})











// function sumArray() {
//     for (let i = 0; i < expenses.length; i++) {
//         sum += expenses[i]
//       }
//    return sum 
// }
// //   document.write( "javascript- Sum of the array value is :- " + sum ); 
// //we want remainig budgte to be budget minus the sum of the expenses array



// // expense.addEventListener('input', (event) => {
// //     expense.value = event.target.value
// //     console.log(expense.value)
// // })

// // expense.forEach(cost => {
// //     cost.addEventListener('input', (e) => {
// //         expense.value = e.target.value
// //     })
// // })

// //sets budget amount
// budgetAmount.addEventListener('input', (event) => {
//     budgetAmount.value = event.target.value;
//     console.log(budgetAmount.value)
// })

// newField.addEventListener('click', (event) => {
//     event.preventDefault();
//     index = 0 

//     const newExpense = document.createElement('div')
//     newExpense.classList.add('expenseList')
//     const newExpenseHTML = `<input type="string" name="description" class="description" 
//      placeholder="Expense name"><input type="number" name="expense" class="expense${index}" min="0" placeholder="Expense Cost"> 
//    </br>`   
//     index++
//     expenses.push(expense.value)
//     console.log(expenses)

//     newExpense.innerHTML = newExpenseHTML
//     budgetForm.appendChild(newExpense)
    
// })


// // newField.addEventListener('click', (event) => {
// //     event.preventDefault();
// //     const budgetDisplayHTML = `Remaining Budget: ${net}`
// //     budgetDisplay.innerHTML = budgetDisplayHTML

// // })


// calculate.addEventListener('click', (event) => {
//     event.preventDefault();

//     sumArray()
//     const budgetDisplayHTML = `Remaining Budget: ${net}`
//     budgetDisplay.innerHTML = budgetDisplayHTML

// })

// modal popup
