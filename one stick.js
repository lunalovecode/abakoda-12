var r = parseInt(readline());
 
function createCombo(num, t) {
    return [num, (t - num)];
}
 
function countCombos(num) {
    //make array with possible combinations
    //[[1,8],[2,7]
    var combinations = [];
    for (var i = 1; i < num; i++) {
        combinations.push(createCombo(i, num));
    }
    
    for (var j = 0; j < combinations.length; j++) {
        if (combinations[j][0] === combinations[j][1]) {
            combinations.splice(combinations.indexOf(combinations[j]), 1);
        }
    }
    return combinations.length;
}
 
print(countCombos(r));