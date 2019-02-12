class List {

    constructor() {
      this.list = [];
    }
  
    getItemCount() {
      return this.list.length;
    }
  
    addItem (item) {
      this.list = [
        ...this.list,
        item
      ];
  
      return this.getItemCount();
    }
  
    removeItem (item) {
      this.list = this.list.filter((listItem) => {
        return (listItem.id !== item.id);
      });
  
      return this.getItemCount();
    }
  
    updateItem (itemId, newValue) {
      let foundItem = false;
      this.list = this.list.map((listItem) => {
          if (listItem.id === itemId) {
              foundItem = true;
              return {...listItem, name: newValue}
          }
          return listItem;
      });
      return foundItem;
    }
  
    getItem (itemId) {
      return this.list.find((listItem) => {
        return (listItem.id === itemId);
      });
    }
  
    getAllItems () {
      return this.list;
    }
  }
  
  /* Create new List */
  const myList = new List();
  
  /* Add 4 items */
  myList.addItem({id: "0", name: "Mike"}); // [{id: 0, ...}]
  myList.addItem({id: "1", name: "Dom" }); // [{id: 0, ...}, {id: 1, ...}]
  myList.addItem({id: "2", name: "Dan" }); // [{id: 0, ...}, {id: 1, ...}, {id: 2, ...}]
  myList.addItem({id: "3", name: "Alex"}); // [{id: 0, ...}, {id: 1, ...}, {id: 2, ...}, {id: 3, ...}]
  const myListContentsFull = myList.getAllItems();
  
  /* Remove 2 items */
  myList.removeItem(myList.list[0]);
  myList.removeItem(myList.list[1]);
  const myListContentsHalf = myList.getAllItems();
  
  /* Attempt to update an item that does not exist */
  const updateSuccessId2 = myList.updateItem('2', "Gerald");
  const myListContentsFailedUpdate = myList.getAllItems();
  
  /* Attempt to update an item that does exist */
  const updateSuccessId3 = myList.updateItem('3', "Gerald");
  const myListContentsUpdated = myList.getAllItems();
  
  /* Output */
  console.log("myListContents (Full):", myListContentsFull);
  console.log("myListContents (Half):", myListContentsHalf);
  console.log("Update Success (id: '2')?", updateSuccessId2);
  console.log("Expected Update Failure:", myListContentsFailedUpdate);
  console.log("Update Success (id: '3')?", updateSuccessId3);
  console.log("myListContents (Replace Alex w/ Gerald):", myListContentsUpdated);
  console.log("myListContents (Final):", myList.getAllItems());
