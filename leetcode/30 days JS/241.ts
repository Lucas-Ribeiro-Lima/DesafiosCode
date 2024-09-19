let memo: Map<string, number[]> = new Map()
function diffWaysToCompute(expression: string): number[] {
    const results: number[] = []

    if (memo.has(expression)) {
        return memo.get(expression) ?? []; 
    }

    if(!expression) return results
    
    if (!isNaN(Number(expression))) {
        results.push(Number(expression))
        return results
    }

    function computeOperation(num1: number, num2: number, opr: string): number {
        return opr === '+' 
                    ? num1 + num2
                    : opr === '-'
                        ? num1 - num2
                        : num1 * num2
    }

    for(let char = 0; char < expression.length; char++) {
        let currentChar = expression[char]

        if(!Number.isNaN(Number(currentChar))) continue
        
        let leftResults = diffWaysToCompute(expression.slice(0, char))
        let rightResults = diffWaysToCompute(expression.slice(char+1, expression.length))

        for(let leftValue of leftResults) {
            for(let rightValue of rightResults) {
                const computedResult = computeOperation(leftValue, rightValue, currentChar)
                results.push(computedResult)
            }
        }
    }

    memo.set(expression, results)
    return results
};


const expression = '2-4*5+1'

const result = diffWaysToCompute(expression)
console.log(result)