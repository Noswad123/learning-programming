const gas = [1,2,3,4,5]
const cos = [3,4,5,1,2]
// greedy
export function canCompleteCircuit(gas: number[], cost: number[]): number {
	if(gas.reduce(add) < cost.reduce(add)) {
		return -1;
	}

	let total = 0;
	let start = 0;
	for(let i = 0; i < gas.length; i++) {
		total += gas[i] - cost[i];
		if(total < 0) {
			total = 0;
			start = i + 1;
		}
	}
	return start;
}

function add(a, b) {
	return a + b;
}
