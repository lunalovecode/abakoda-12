var r = parseInt(readline());

function createCombo(num, t) {
    return [num, (t - num)];
}

/*
Base function
function countCombos(num) {
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
*/

function countCombos(num) {
    var combinations = [];
    for (var i = 1; i < num; i++) {
        combinations.push(createCombo(i, num));
    }
    
    for (var j = 0; j < combinations.length; j++) {
        if (combinations[j][0] === combinations[j][1]) {
            combinations.splice(combinations.indexOf(combinations[j]), 1);
        }
    }
    return combinations;
}

var overallCombos = [];
for (var i = r; i > 0; i--) {
    overallCombos.push(countCombos(i));
}
var flattened = overallCombos.reduce((acc, val) => acc.concat(val), []);
var flatSort = flattened.map(x => x.sort());
flatSort.sort();
var nextEls = [];
for (var j = 0; j < flatSort.length; j++) {
    nextEls.push(flatSort[j + 1]);
}

var nextFiltered = nextEls.filter(a => a !== undefined);
var final = [];

for (var k = 0; k < nextFiltered.length; k++) {
    if (flatSort[k][0] === nextFiltered[k][0] && flatSort[k][1] === nextFiltered[k][1]) {
        final.push(flatSort[k]);
    }
}
print(final.length);