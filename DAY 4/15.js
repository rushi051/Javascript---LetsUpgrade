
function add()
{
    let x = document.getElementById(1).value
    x = parseInt(x)
    let y = document.getElementById(2).value
    y = parseInt(y)
    document.getElementById(3).innerHTML = x + y
}
function sub()
{
    let x = document.getElementById(1).value
    x = parseInt(x)
    let y = document.getElementById(2).value
    y = parseInt(y)
    document.getElementById(3).innerHTML = x - y
}
function mul()
{
    let x = document.getElementById(1).value
    x = parseInt(x)
    let y = document.getElementById(2).value
    y = parseInt(y)
    document.getElementById(3).innerHTML = x * y
}
function div()
{
    let x = document.getElementById(1).value
    x = parseInt(x)
    let y = document.getElementById(2).value
    y = parseInt(y)
    document.getElementById(3).innerHTML = x / y
}
function sqrt1()
{
    let x = document.getElementById(1).value
    document.getElementById(3).innerHTML = Math.sqrt(x)
}