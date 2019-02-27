// import Person from './Person'
const Person = require('./Person');

class LeanBulkGymDayCalories {
    constructor() {
    }

    getLeanBulkGymDayCalories() {
        return this.bodyweight * 15 + 500;
    };

    calculateLeanBulkGymDayProteinInGrams() {
        const proteinInGrams = this.bodyweight; // = 170
        return proteinInGrams;
    };

    calculateLeanBulkGymDayFatInGrams() {
        const totalCalories = this.calories + 500; // = 3050
        const CaloriesInFatConvertedToGramsInFat = totalCalories / 9; // = 294.444444
        const fatInGrams = CaloriesInFatConvertedToGramsInFat * 0.25; // = 73.611111
        return fatInGrams;
    };

    calculateLeanBulkGymDayCarbohydratesInGrams() {
        const totalCalories = this.calories + 500; // = 3050
        const totalCaloriesMinusCaloriesInFat = totalCalories - totalCalories * 0.25;  // = 2287.5
        const totalCaloriesMinusCaloriesInProtein = totalCalories - this.bodyweight * Person.NUMBER_OF_PROTEIN_CALORIES; // = 2370
        const carbohydratesInCalories = totalCaloriesMinusCaloriesInFat + totalCaloriesMinusCaloriesInProtein - totalCalories; // = 1607.5
        const carbohydratesInGrams = carbohydratesInCalories / 4; // = 401.875
        return carbohydratesInGrams;
    };

    calculateLeanBulkGymDayProteinInCalories() {
        const bodyweight = this.bodyweight; // = 170
        const proteinInCalories = bodyweight * Person.NUMBER_OF_PROTEIN_CALORIES; // = 680
        return proteinInCalories;
    };

    calculateLeanBulkGymDayFatInCalories() {
        const totalCalories = this.calories + 500; // = 3050
        const fatInCalories = totalCalories * 0.25; // = 762.5
        return fatInCalories;
    };

    calculateLeanBulkGymDayCarbohydratesInCalories() {
        const totalCalories = this.calories + 500; // = 3050
        const totalCaloriesMinusCaloriesInFat = totalCalories - totalCalories * 0.25; // = 2287.5
        const totalCaloriesMinusCaloriesInProtein = totalCalories - this.bodyweight * Person.NUMBER_OF_PROTEIN_CALORIES; // = 2370
        const carbohydratesInCalories = totalCaloriesMinusCaloriesInFat + totalCaloriesMinusCaloriesInProtein - totalCalories; // = 1607.5
        return carbohydratesInCalories;
    };
}

const myLeanBulkGymDayCalories = new LeanBulkGymDayCalories();

console.log("Gym Day Protein in Grams:", myLeanBulkGymDayCalories.calculateLeanBulkGymDayProteinInGrams());
console.log("Gym Day Fat in Grams:", myLeanBulkGymDayCalories.calculateLeanBulkGymDayFatInGrams());
console.log("Gym Day Carbohydrates in Grams:", myLeanBulkGymDayCalories.calculateLeanBulkGymDayCarbohydratesInGrams());
console.log("Gym Day Protein in Calories:", myLeanBulkGymDayCalories.calculateLeanBulkGymDayProteinInCalories());
console.log("Gym Day Fat in Calories:", myLeanBulkGymDayCalories.calculateLeanBulkGymDayFatInCalories());
console.log("Gym Day Carbohydrates in Calories:", myLeanBulkGymDayCalories.calculateLeanBulkGymDayCarbohydratesInCalories());

// export default LeanBulkGymDayCalories;
module.exports = LeanBulkGymDayCalories;