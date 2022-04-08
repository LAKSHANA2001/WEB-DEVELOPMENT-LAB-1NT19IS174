var x = parseInt(prompt("Enter 1st Number"), 10)
var y = parseInt(prompt("Enter 2nd Number"), 10)

function sum(n1,n2)
{
    let s=n1+n2;
    if(s%2==0)
    document.write("Sum is even");
    else
    document.write("Sum is odd");
}
sum(x,y);
