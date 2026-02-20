class Dict {
  constructor() {
    this.items = new Array(8);
  }

  put(key, value) {
    let index = Math.abs(this.hashCode(key)) % this.items.length;
    this.items[index] = value;
  }

  get(key) {
    let index = Math.abs(this.hashCode(key)) % this.items.length;
    return this.items[index];
  }

  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; 
    }
    return hash;
  }
}

function main() {
  let myDict = new Dict();
  myDict.put("test", 3);
  myDict.put("333", 7);
  myDict.put("77", 6);

  console.log(myDict.get("test"));
}

// Run the main function
main();
