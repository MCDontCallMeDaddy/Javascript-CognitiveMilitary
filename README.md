# Javascript-CognitiveMilitary

class List {

  constructor() {
    this.list = [];
  }

  addItem (item) {              // console.log(addItem(list, item));
    const {list} = this;
    return [
      ...list,
      item
    ];
  }

  removeItem (item) {            // console.log(removeItem(list, list[0]));
    const {list} = this;
    return list.filter((listItem) => {
      return (listItem.id !== item.id);
    });
  }

  updateItem () {  
    const {list} = this;                     // console.log(updateItem(list, list[0].id, newValue))
    return list.map((listItem) => {
      return (listItem.id === itemId) ? {...listItem, name: newValue} : listItem;
    });
  }

  getItem (itemId) {  
    const {list} = this;             // console.log(getItem(list, list[0].id));
    return list.find((listItem) => {
      return (listItem.id === itemId);
    });
  }
}

const myList = new List();
myList.addItem()
