
const items = []    // String list containg tasks specified by used

function createItem(item, index) {
    /**
     * Creates a button element representing a specified task.
     * 
     * @param {string} item     string desribing task
     * @param {number} index    integer representing index of item
     * 
     * @return {HTMLButtonElement} Button element representing specified task
     */
    let element = document.createElement("button")
    element.type = "button"
    element.id = index
    element.className = "list-group-item list-group-item-action"
    element.innerText = item
    return element
}

function addItem() {
    /**
     * Adds the current value of the input form to the items list
     */
    const itemInput = document.getElementById("itemInput")
    if (itemInput.value == "") {
        $(".toast").toast("show")
    } else {
        items.push(itemInput.value)
        itemInput.value = ""
        update()
    }
}

function update() {
    /**
     * Updates html elements on changes of items list
     */
    const todoList = document.getElementById("itemList")

    todoList.innerHTML = ""
    if (items.length === 0) {
        todoList.innerText = "All Tasks Done!"
    } else {
        items.forEach((item, index) => {
            let element = createItem(item, index)
            element.onclick = function(event){
                items.splice(parseInt(element.id), 1)
                update()
            }
            todoList.appendChild(element)
        })
    }
}

function main() {
    /**
     * Initializes ui elements and sets event listener for input form
     */
    document.addEventListener("DOMContentLoaded", () => {
        $(".toast").toast()

        const itemInput = document.getElementById("itemInput")
        itemInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault()
                addItem()
            }
        })

        update()
    })
}

main()