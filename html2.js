console.log("Hello world")
const a = 20;
const b = 20
console.log(a+b)

const str = "jithesh sharma"
console.log(str)
const arr = [1,2.4,"string",false]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

arr[1]=3.1
console.log(arr[1])

arr.push("mohan")
console.log(arr)

arr.pop()
console.log(arr)


function example(){
    console.log("I am waiting for you")
}
const ptag = document.getElementById("ptag")
ptag.inner  = "Print Statement"

const input = document.getElementById("inputField")
const output = document.getElementById("input")

input.addEventListener("input", () => {
    output.textContent = input.value;
});

const first = document.createElement    ("h1")
first.textContent = "This is a new paragraph."
document.body.appendChild(first)    
first.remove()