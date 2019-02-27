// import Person from './Person'
const Person = require('./Person');

class LeanBulkRestDayCalories {
    constructor() {
    }

    getLeanBulkRestDayCalories() {
        return this.bodyweight * 15 + 100;
    };

    calculateLeanBulkRestDayProteinInGrams() {
        const proteinInGrams = this.bodyweight; // = 170
        return proteinInGrams;
    };

    calculateLeanBulkRestDayFatInGrams() {
        const totalCalories = this.calories + 100; // = 2650
        const CaloriesInFatConvertedToGramsInFat = totalCalories / 9; // = 294.444444
        const fatInGrams = CaloriesInFatConvertedToGramsInFat * 0.25; // = 73.611111
        return fatInGrams;
    };

    calculateLeanBulkRestDayCarbohydratesInGrams() {
        const totalCalories = this.calories + 100; // = 2650
        const totalCaloriesMinusCaloriesInFat = totalCalories - totalCalories * 0.25;  // = 1987.5
        const totalCaloriesMinusCaloriesInProtein = totalCalories - this.bodyweight * Person.NUMBER_OF_PROTEIN_CALORIES; // = 1970
        const carbohydratesInCalories = totalCaloriesMinusCaloriesInFat + totalCaloriesMinusCaloriesInProtein - totalCalories; // = 1307.5
        const carbohydratesInGrams = carbohydratesInCalories / 4; // = 326.875
        return carbohydratesInGrams;
    };

    calculateLeanBulkRestDayProteinInCalories() {
        const bodyweight = this.bodyweight; // = 170
        const proteinInCalories = bodyweight * Person.NUMBER_OF_PROTEIN_CALORIES; // = 680
        return proteinInCalories;
    };

    calculateLeanBulkRestDayFatInCalories() {
        const totalCalories = this.calories + 100; // = 2650
        const fatInCalories = totalCalories * 0.25; // = 662.5
        return fatInCalories;
    };

    calculateLeanBulkRestDayCarbohydratesInCalories() {
        const totalCalories = this.calories + 100; // = 2650
        const totalCaloriesMinusCaloriesInFat = totalCalories - totalCalories * 0.25; // = 1987.5
        const totalCaloriesMinusCaloriesInProtein = totalCalories - this.bodyweight * Person.NUMBER_OF_PROTEIN_CALORIES; // = 1970
        const carbohydratesInCalories = totalCaloriesMinusCaloriesInFat + totalCaloriesMinusCaloriesInProtein - totalCalories; // = 1307.5
        return carbohydratesInCalories;
    };
}

const myLeanBulkRestDayCalories = new LeanBulkRestDayCalories();

console.log("Rest Day Protein in Grams:", myLeanBulkRestDayCalories.calculateLeanBulkRestDayProteinInGrams());
console.log("Rest Day Fat in Grams:", myLeanBulkRestDayCalories.calculateLeanBulkRestDayFatInGrams());
console.log("Rest Day Carbohydrates in Grams:", myLeanBulkRestDayCalories.calculateLeanBulkRestDayCarbohydratesInGrams());
console.log("Rest Day Protein in Calories:", myLeanBulkRestDayCalories.calculateLeanBulkRestDayProteinInCalories());
console.log("Rest Day Fat in Calories:", myLeanBulkRestDayCalories.calculateLeanBulkRestDayFatInCalories());
console.log("Rest Day Carbohydrates in Calories:", myLeanBulkRestDayCalories.calculateLeanBulkRestDayCarbohydratesInCalories());

// export default LeanBulkRestDayCalories;
module.exports = LeanBulkRestDayCalories;