//console.log(my_dicr.get("333")) 이걸 찾으려고 할 때
// 1. hash(333) % this.items.length -> index+1
// 2. this.items[1] -> ['333', 7] -> ["77", 6]
// 3. self.items[1] 에 있는 링크드 리스트에서 333 키에 해당하는 value를 반환하면 된다.
//=> value 는 7이야

class LinkedTuple {
  constructor() {
    this.items = [];
  }
  //Python: (key, value) → 튜플
  //JavaScript: (key, value) → 콤마 연산자 (마지막 값만 반환)
  //따라서 () 대신 [] 이나 {}를 사용했다.
  add(key, value) {
    this.items.push([key, value]);
  }
  get(key) {
    for (let [k, v] of this.items) {
      if (key === k) {
        return v;
      }
    }
    return undefined;
  }
}
const bucket = new LinkedTuple();
bucket.add("333", 7);
bucket.add("77", 6);

console.log(bucket.get("333")); // 7
console.log(bucket.get("77")); // 6
console.log(bucket.get("999")); // undefined
console.log(bucket.items);

class LinkedDict {
  constructor() {
    this.items = new Array(8);
    for (let i = 0; i < this.items.length; i++)
      this.items[i] = new LinkedTuple();
  }
  put(key, value) {
    const s = String(key);
    let index = Math.abs(this.hash(s)) % this.items.length;
    this.items[index].add(key, value);
  }
  get(key) {
    const s = String(key);
    let index = Math.abs(this.hash(s)) % this.items.length;
    return this.items[index].get(key);
  }
  hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash;
  }
}
