var numbers = [1, 2, 3, 4, 5];
var i = 0;

while (i < numbers.length)
{
    numbers[i] *= 2;
    i++;
}

alert("The last item in the array is " + numbers[numbers.length - 1]);