function mincost(arr)
{ 
//write your code here
// return the min cost
	 let cost = 0;
  let heap = [...arr];
  heap.sort((a, b) => a - b);
  
  while (heap.length > 1) {
    let first = heap.shift();
    let second = heap.shift();
    cost += first + second;
    heap.push(first + second);
    heap.sort((a, b) => a - b);
  }
  
  return cost;
  
}

module.exports=mincost;
