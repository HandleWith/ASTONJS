const showIndex = (arr) => {
    for(let i = 0; i<arr.length; i++) {
       setTimeout(() => console.log(i), i*3000)
    }
}

let arr = [1,2,3,4,5,6,7,8,9]

showIndex(arr)
