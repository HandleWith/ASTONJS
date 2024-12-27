function firstSum(arr, total) {
    let result = []
    let sum = 0
    for(let i = 0; i<arr.length; i++) {
        if(sum + arr[i] <= total) {
            result.push(arr[i])
            sum += arr[i]
        }
        if (sum === total) {
            return result
        }
    }
    return ("No numbers found")
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(firstSum(arr, 3))
console.log(firstSum(arr, 20))
console.log(firstSum(arr, 10))
// Цикл проходит по каждому элементу массива arr от 0 до arr.length. Сложность алгоритма линейная,
// то есть при увеличении входных данных линейно увеличивается время, необходимое на их обработку. 
// Операции, которые используются внутри цикла имеют сложность O(1).
// Из этого следует, что сложность алгоритмма O(n).  