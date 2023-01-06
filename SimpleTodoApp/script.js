// 1-  select all elements

const list = document.querySelector('#list')
const form = document.querySelector('#new-item-list')
const input = document.querySelector('#item-input')

// 2- when i submit form: add new element

form.addEventListener("submit",e =>{
    e.preventDefault() 
    // console.log(input.value)

    // 1- create a new item:

    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add('list-item')


    // 2- add item to list

    list.appendChild(item)

    // 3- clear input
    
    input.value = " "

    // 4- setup event listener to delete the item
    item.addEventListener("click", () => {
        list.removeChild(item)
        // OR: item.remove()
    })


})