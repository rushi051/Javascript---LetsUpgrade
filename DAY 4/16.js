function reward()
{
    let r = document.getElementById(5).value
    if(r >= 0 && r <= 5000 )
    console.log( r * 0.02 )
    else if(r >= 5001 && r <= 10000 )
    console.log( r * 0.05 )
    else if(r >= 10001 && r <= 20000 )
    console.log( r * 0.07 )
    else if(r >= 20000 )
    console.log( r * 0.1 )
}