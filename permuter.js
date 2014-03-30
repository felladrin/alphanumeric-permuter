var result = [];
var count = 0;

function permute(p, l)
{
    if (!l.length)
    {
        result[count++] = p.join('');
    }
    else
    {
        for (var i in l)
            permute(p.concat(l[i]), l.slice(0, l.indexOf(l[i])).concat(l.slice(l.indexOf(l[i]) + 1, l.length)));
    }
}

function factorial(num)
{
    var val = 1;
    for (var i = 2; i <= num; i++)
        val = val * i;
    return val;
}

function calcPermutations(num)
{
    if (num > 9)
    {
        alert("Can't permute a word with more then 9 letters... Your browser would blow up.");
        return;
    }

    document.getElementById('possibilities').innerHTML = factorial(num);
    result = [];
    count = 0;
    permute([], document.getElementById('word').value);
    document.getElementById('result').value = result.join('\n');
}