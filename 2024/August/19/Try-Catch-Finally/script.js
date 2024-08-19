let a = prompt("Enter a number: ")
let b = prompt("Enter another number: ")

a = parseInt(a)
b = parseInt(b)
if (isNaN(a) || isNaN(b)) {
    alert("Syntax error")
}
function main() {
    try {
        alert(a + b)
        return true
    } catch (error) {
        alert(error.name)
        return false
    }
    finally{
        console.log("Bye Bye");
        
    }
    
}