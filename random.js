function test () {
    if (condition) {
    var x = 5
    }
    console.log(x) // 5
    
    if (condition) {
    let y = 5
    }
    console.log(y) // undefined
    }