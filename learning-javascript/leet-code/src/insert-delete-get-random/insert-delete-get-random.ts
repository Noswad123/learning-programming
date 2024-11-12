export class RandomizedSet {
	private hashMap: Map<number, number>;
	private arr: number[] = [];
	constructor() {
		this.hashMap = new Map<number, null>();
	}

	insert(val: number): boolean {
		if(this.hashMap.has(val)) {
			return false;
		} else {
			this.arr.push(val)
			this.hashMap.set(val, this.arr.length-1);
			return true;
		}
	}

	remove(val: number): boolean {
		if(this.hashMap.has(val)) {
			const indexToDelete = this.hashMap.get(val);
			this.arr[indexToDelete] = this.arr[this.arr.length-1];
			this.hashMap.set(this.arr[indexToDelete], indexToDelete);
			this.arr.pop();
			this.hashMap.delete(val);
			return true;
		} else {
			return false;	
		}

	}

	getRandom(): number {
		const size = this.arr.length
		if (size === 1) {
			return this.arr[0];
		}
		const rand = Math.floor(Math.random() * size);
		return this.arr[rand];
	}
}