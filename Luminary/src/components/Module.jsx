import React from 'react'

class Module {
  constructor(name,code){
    this.name=name;
    this.code=code;
    this.index={};
  }
  updateIndex(index,arr){
    this.index[index]=arr;
  }
}

export default Module