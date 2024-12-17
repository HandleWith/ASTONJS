const compare = (node1, node2) => {
    if(!node1 && !node2) {
        return true
    }
    if(!node1 || !node2) {
        return false
    }
    if(node1.value !== node2.value) {
        return false
    }
    return compare(node1.left, node2.left) && compare(node1.right, node2.right)
}

const node1 = {
    value: 1,
    left: {
        value: 2,
        left: null,
        right: {
            value: 5,
            left: {
                value: 9,
                left: null,
                right: null
            },
            right: null
        }
    },
    right: {
        value: 3,
        left: null,
        right: null
    }
};

const node2 = {
    value: 1,
    left: {
        value: 2,
        left: null,
        right: null
    },
    right: {
        value: 3,
        left: null,
        right: null
    }
};

const node3 = {
    value: 1,
    left: {
        value: 2,
        left: null,
        right: null
    },
    right: {
        value: 3,
        left: null,
        right: null
    }
};

console.log(compare(node1, node3))
console.log(compare(node2, node3))
