var v=prompt("Enter virus composition");
var b=prompt("Enter blood composition");

var i=0,j=0;
var count=0;
while(i<v.length && j<b.length)
{
    if(v[i]==b[j])
    {
    i++;
    j++;
    count++;
    }
    else
    i++;
}
if(count==b.length)
document.write("Positive");
else
document.write("Negative");