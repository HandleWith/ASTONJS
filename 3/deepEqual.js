const deepEqual = (obj1, obj2) => {
    if(obj1 === obj2) return true

    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || !obj1 || !obj2) return false

    const stack = [[obj1, obj2]]

    while(stack.length > 0) {
        const [currentObj1, currentObj2] = stack.pop()

        const keys1 = Object.keys(currentObj1)
        const keys2 = Object.keys(currentObj2)

        if(keys1.length !== keys2.length) return false

        for(const key of keys1) {
            if(!currentObj2.hasOwnProperty(key)) return false

            const valueOfObject1 = currentObj1[key]
            const valueOfObject2 = currentObj2[key]

            if(valueOfObject1 !== valueOfObject2) {
                if(typeof valueOfObject1 === 'object' && typeof valueOfObject2 === 'object' && valueOfObject1 && valueOfObject2) {
                    stack.push([valueOfObject1, valueOfObject2])
                } else {
                    return false
                }
            }
        }      
    }
    return true
}





