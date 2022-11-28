function overlappingRectangles(arr1,arr2){
    let a = arr1[1]['x'] - arr1[0]['x'] // 3
    let b =  arr1[1]['y'] - arr1[0]['y'] // 4
    let a1 = arr2[1]['x'] - arr2[0]['x'] 
    let b1 =  arr2[1]['y'] - arr2[0]['y']
    let A = Math.abs(b - b1)
    let B = Math.abs(a-a1)
    let AB = Math.abs((a - A)) * Math.abs((b-B))
    return AB
}
console.log(overlappingRectangles(
    [{ x: 2, y: -9 }, { x: 13, y: -4 }],
    [{ x: 5, y: -11 }, { x: 7, y: -2 }]
));