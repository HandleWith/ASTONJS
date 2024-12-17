function getLength(value) {
    let length = 0;
    if (value && typeof value.length === 'number') {
        length = value.length;
    }
    else if(value instanceof Map || value instanceof Set) {
        length = value.size
    }

    console.log(length);
}