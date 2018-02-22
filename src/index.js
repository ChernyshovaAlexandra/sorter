class Sorter {
  constructor() {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }
  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let newMass = [];
    indices = indices.sort() || [];
      for(let i = 0; i < indices.length; i++) {
          if (this.array[indices[i]]) {
              newMass.push(this.array[indices[i]]);
          }
      }
      newMass.sort(function(a,b){return a - b});
      for(let i=0; i < indices.length; i++){
        this.array[indices[i]]= newMass[i];
      }
      return this.array;
  }

  setComparator(compareFunction) {
    return this.array.sort(compareFunction());
  }
}

module.exports = Sorter;