
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (matrix==undefined || matrix.length==0) return []
    let arr = []
    matrix.forEach(function(item,index){
        index%2==1 ? item.reverse() : item
        for(item_ of item){
            arr.push(item_)
        }
    })
    return arr
}
