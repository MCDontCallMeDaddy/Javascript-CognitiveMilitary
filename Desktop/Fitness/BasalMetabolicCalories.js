// import Person from './Person'
const Person = require('./Person');

class BasalMetabolicCalories {
    constructor() {
    }

    getCalories() {
        return this.bodyweight * 15;
    };

    calculateProteinInGrams() {
        const proteinInGrams = this.bodyweight; // = 170
        return proteinInGrams;
    };

    calculateFatInGrams() {
        const totalCalories = this.calories; // = 2550
        const CaloriesInFatConvertedToGramsInFat = totalCalories / 9; // = 283.333333
        const fatInGrams = CaloriesInFatConvertedToGramsInFat * 0.25; // = 70.8333333
        return fatInGrams;
    };

    calculateCarbohydratesInGrams() {
        const totalCalories = this.calories;
        const totalCaloriesMinusCaloriesInFat = totalCalories - totalCalories * 0.25;  // = 1912.5
        const totalCaloriesMinusCaloriesInProtein = totalCalories - this.bodyweight * Person.NUMBER_OF_PROTEIN_CALORIES; // = 1870
        const carbohydratesInCalories = totalCaloriesMinusCaloriesInFat + totalCaloriesMinusCaloriesInProtein - totalCalories; // = 1232.5
        const carbohydratesInGrams = carbohydratesInCalories / 4; // = 308.125
        return carbohydratesInGrams;
    };

    calculateProteinInCalories() {
        const bodyweight = this.bodyweight; // = 170
        const proteinInCalories = bodyweight * Person.NUMBER_OF_PROTEIN_CALORIES; // = 680
        return proteinInCalories;
    };

    calculateFatInCalories() {
        const totalCalories = this.calories; // = 2550
        const fatInCalories = totalCalories * 0.25; // = 637.5
        return fatInCalories;
    };

    calculateCarbohydratesInCalories() {
        const totalCalories = this.calories; // = 2550
        const totalCaloriesMinusCaloriesInFat = totalCalories - totalCalories * 0.25; // = 1912.5
        const totalCaloriesMinusCaloriesInProtein = totalCalories - this.bodyweight * Person.NUMBER_OF_PROTEIN_CALORIES; // = 1870
        const carbohydratesInCalories = totalCaloriesMinusCaloriesInFat + totalCaloriesMinusCaloriesInProtein - totalCalories; // = 1232.5
        return carbohydratesInCalories;
    };
};

const myBasalMetabolicCalories = new BasalMetabolicCalories();

console.log("Protein in Grams:", myBasalMetabolicCalories.calculateProteinInGrams());
console.log("Fat in Grams:", myBasalMetabolicCalories.calculateFatInGrams());
console.log("Carbohydrates in Grams:", myBasalMetabolicCalories.calculateCarbohydratesInGrams());
console.log("Protein in Calories:", myBasalMetabolicCalories.calculateProteinInCalories());
console.log("Fat in Calories:", myBasalMetabolicCalories.calculateFatInCalories());
console.log("Carbohydrates in Calories:", myBasalMetabolicCalories.calculateCarbohydratesInCalories());

// export default BasalMetabolicCalories;
module.exports = BasalMetabolicCalories;