function solution(n, k){
    if(n === 0){
        return[""]
    }
    var result = []
    solution(n-1, k-1).forEach(function(p){
        'abc'.split('').forEach(function(l){
            if(p.slice(-1) !== l){
                result.push(p.concat(l));
            }
        })
    })
    return result.slice(0, k)
}



var a = solution(2,4);
console.log(a)
console.log("*****************************")
var b = solution(3,20);
console.log(b)
console.log("*****************************")
var c = solution(5,6);
console.log(c)


// function solution(S) {
//     var occurrences = new Array(26);
//     for (var i = 0; i < occurrences.length; i++) {
//         occurrences[i] = 0;
//     }

//     for (var id in S) {
//         occurrences[S.charCodeAt(id) - 'a'.charCodeAt(0)]++;
//     }

//     var best_char = 'a';
//     var best_res  = 0;

//     for (var i = 1; i < 26; i++) {
//         if (occurrences[i] >= best_res) {
//             best_char = String.fromCharCode('a'.charCodeAt(0) + i);
//             best_res  = occurrences[i];
//         }
//     }

//     return best_char;
// }

// var s = solution('sarikapansare')
// console.log(s)