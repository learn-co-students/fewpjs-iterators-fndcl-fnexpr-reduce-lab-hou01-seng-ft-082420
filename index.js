const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducer(total,num) {
    return total + num
}

const totalBatteries = batteryBatches.reduce(reducer)
