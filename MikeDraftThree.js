class Item {
    constructor(name) {
        // This is a ternary operator (described in the List.removeItem() Method).
        // It is also making use of a `static` variable.
        // This means it creates a "lastId" Property that is shared across all Objects of the Item Class.
        // Using this `static` variable, we can let each Item Object set its own id Property, based on
        //   a running tally that gets incremented each time it gets used.
        Item.lastId = (typeof Item.lastId === "undefined") ? 0 : Item.lastId;

        // variable++;
        //   is identical to:
        // variable = variable + 1;
        this.id = Item.lastId++;
        // It's worth mentioning that this is also legal and will superficially to do the same thing:
        // ++Item.lastId;
        //
        // The difference is this:
        // const i = 0;
        // const q = i++; // ... q will equal: 0, i will equal: 1.
        // const r = ++i; // ... r will equal: 2, i will equal: 2.
        //
        // ... So `++variable` increments the value and then uses the new value in the "expression"
        // ... But `variable++` uses the old value in the "expression" and then increments the variable.

        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getId() {
        return this.id;
    }

    // This method should probably never be called.
    // I normally wouldn't even include it, but wanted to represent "completeness".
    setId(newId) {
        // Let's disable setting the Id to a value that might already exist.
        if (newId <= Item.lastId) {
            return false;
        }

        this.id = newId;

        // This updates the static lastId variable, to make sure that if we set a new id,
        // we don't accidentally reuse that id, later.
        Item.lastId = newId;
        return true;
    }
}


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

    removeItem (itemToRemove) {
        // This lets us pass in either an Object with an `id` property, or an Id to be removed.
        // The code checks if the parameter that was passed in has a "id" property.
        // If it exists, it sets `itemId` to the parameter's property,
        //   otherwise it uses the parameter as it was passed in.
        const itemId = (itemToRemove.hasOwnProperty('id')) ? itemToRemove.id : itemToRemove;
        // It's worth pointing out that it would be arguably "more right"
        //   if you used itemToRemove.getId() instead of itemToRemove.id.
        //   However, this will fail if you try to use `{id: 6, name: "Jackson"}` as an Item,
        //   because that Method does not exist on that Object, even though it will pass the
        //   itemToRemove.hasOwnProperty('id') check, since it does have an `id` Property.
        //   Therefore, I'm choosing to access the itemToRemove's `id` property directly,
        //   as a means of being more "robust" and tolerant of careless users.

        /* The above line of code is equivalent to:
            let itemId = null;
            if (itemToRemove.hasOwnProperty('id')) {
                itemId = itemToRemove.id;
            } else {
                itemId = itemToRemove;
            }

            ... Except, the way I did it allows itemId to be a `const` instead of a `let`
            because we want it to be either one value or the other, so rather than declaring
            a "mutable" variable with `let` and then setting its value based on the condition,
            in one line, we set the value, based on the condition.

            ... We'd say:
                (itemToRemove.hasOwnProperty('id'))
                is a `conditional clause`

            ... And this format:
                variableName = (<conditional clause>) ? <value if true> : <value if false>;
                is a `ternary operator`

            ... (From: http://www.dnawebagency.com/ternary-operator/)
                The ternary operator is an operator that takes three arguments.
                The first argument is a comparison argument,
                  the second is the result upon a true comparison,
                  and the third is the result upon a false comparison.
                  If it helps you can think of the operator as shortened way of writing an if-else statement.
        */

        const filterItemsToKeep = (item) => {
            return (item.getId() !== itemId);
        };

        this.list = this.list.filter(filterItemsToKeep);
        return this.getItemCount();
    }

    updateItem (itemToUpdate, mutation) {
        const itemId = (itemToUpdate.hasOwnProperty('id')) ? itemToUpdate.id : itemToUpdate;

        let foundItem = false;
        const mapItemsToUpdatedItems = (listItem) => {
            if (listItem.getId() === itemId) {
                foundItem = true;

                // If the mutation parameter is a String, then we use set the name to the provided value.
                if (typeof mutation === "string") {
                    listItem.setName(mutation);
                } else {
                    // Otherwise, we assume mutation is an object with a single `key -> value pair`,
                    // and we assume the `key` is the name of a Method we can execute on an Item (presumably a `setter` Method)
                    // and the `value` should be passed into the Method, presumably to update the Item's property.
                    const methodName = Object.keys(mutation)[0];

                    // This line is a little complicated, so I wanted to explain it:
                    //   In our code, we pass the value: {"setName": "Alex"}.
                    //   This means the below line will be interpreted as:
                    //     listItem["setName"]("Alex");
                    //   which is identical to:
                    //     listItem.setName("Alex");
                    //
                    //   When you know the name of the property/method you'd like to access, you can do so with `dot notation`:
                    //     myObjectInstance.myMethod(myParameter);
                    //
                    //   However, if you are accessing a property/method, but you don't at `build time` which one,
                    //   because it's controlled by a variable, you can use `bracket notation` and then use your variable:
                    //     const aVariableContainingTheNameOfAMethodOrPropertyAsAString = "setName";
                    //     myObjectInstance[ aVariableContainingTheNameOfAMethodOrPropertyAsAString ]( myParameter );
                    //   I added spaces, above, just to make the comment easier to read.
                    listItem[methodName](mutation[methodName]);
                }
            }
            return listItem;
        };

        this.list = this.list.map(mapItemsToUpdatedItems);
        return foundItem;
    }

    getItem (itemId) {
        const findItemInList = (listItem) => {
            return (listItem.getId() === itemId);
        };

        return this.list.find(findItemInList);
    }

    getAllItems () {
        return JSON.stringify(this.list);
    }
}

/* Create new List */
const myList = new List();

/* Add 4 items */
const mike = new Item("Mike");  // {id: 0, name: "Mike"}
const dom = new Item("Dom");    // {id: 1, name: "Dom"}
const dan = new Item("Dan");    // {id: 2, name: "Dan"}
const alex = new Item("Alex");  // {id: 3, name: "Alex"}

myList.addItem(mike);   // [{id: 0, name: "Mike"}]
myList.addItem(dom);    // [{id: 0, name: "Mike"}, {id: 1, name: "Dom"}]
myList.addItem(dan);    // [{id: 0, name: "Mike"}, {id: 1, name: "Dom"}, {id: 2, name: "Dan"}]
myList.addItem(alex);   // [{id: 0, name: "Mike"}, {id: 1, name: "Dom"}, {id: 2, name: "Dan"}, {id: 3, name: "Alex"}]
const myListContentsFull = myList.getAllItems();

/* Remove 2 items */
myList.removeItem(mike);    // [{id: 1, name: "Dom"}, {id: 2, name: "Dan"}, {id: 3, name: "Alex"}]
myList.removeItem(dan.getId());     // [{id: 1, name: "Dom"}, {id: 3, name: "Alex"}]
const myListContentsHalf = myList.getAllItems();

/* Attempt to update an item that does not exist */
const updateSuccessId2 = myList.updateItem(2, "Gerald");
const myListContentsFailedUpdate = myList.getAllItems();

/* Attempt to update an item that does exist */
const updateSuccessId3 = myList.updateItem(alex, "Gerald");
const myListContentsUpdated = myList.getAllItems();

/* Attempt to rename the item back */
const updateSuccessAlex = myList.updateItem(alex, {"setName": "Alex"});
const myListContentsAlexRestored = myList.getAllItems();

/* Output */
console.log("myListContents (Full):", myListContentsFull);
console.log("myListContents (Half):", myListContentsHalf);
console.log("We were able to update Item with id: 2?", updateSuccessId2);
console.log("Expected Update Failure:", myListContentsFailedUpdate);
console.log("We were able to update Item: alex?", updateSuccessId3);
console.log("myListContents (Rename Item: alex to 'Gerald'):", myListContentsUpdated);
console.log("We were able to update Item: alex back to 'Alex'?", updateSuccessAlex);
console.log("myListContents (Restored Gerald back to Alex):", myListContentsAlexRestored);
console.log("myListContents (Final):", myList.getAllItems());
