function table1()
{
    var x = document.getElementById(2).value
    x = parseInt(x)
    for(i=0;i<=10;i++)
    {
        c = x * i
        document.writeln(`${x} * ${i} = ${c}<br/>`)
        document.writeln("\n")
    }
}