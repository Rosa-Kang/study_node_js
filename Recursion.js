// Recursion is a computational approach where a function calls itself from within its body.
// Programmers use recursion when they need to perform a similar action multiple times in a row until 
// it reaches a predefined stopping point, also known as a base case.

const iterativeFactorial=(n)=>{
    let result = 1;
    while(n >0) {
        result *= n;
        n -= 1;
    }
    return result;
}

console.log(iterativeFactorial(6));

//if we change above to Recursion Function
const recursiveFactorial =(n)=> {
    // Base Case
    if(n === 0) {
        return 1;
    }

    //Recursive Case
    if(n >= 1) {
        return n * recursiveFactorial(n-1);
    }
}

