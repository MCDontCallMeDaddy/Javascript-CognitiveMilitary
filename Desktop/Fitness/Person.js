const BasalMetabolicCalories = require('./BasalMetabolicCalories');

class Person {
    constructor() {
        this.bodyweight = 170;
        this.calories = 2550;
        this.restsurplus = 100;
        this.activesurplus = 500;
    }

    // calculateFatInGrams() {
    //     const totalCalories = this.getCalories();
    //     return this.caclulateFatInGramsFromCalories(totalCalories);
    // }

    // calculateFatInGramsOnGymDay() {
    //     const totalCalories = this.getActiveSurplusCalories();
    //     return this.caclulateFatInGramsFromCalories(totalCalories);
    // }

    // caclulateFatInGramsFromCalories(calories){
    //     const CaloriesInFatConvertedToGramsInFat = calories / 9;
    //     const fatInGrams = CaloriesInFatConvertedToGramsInFat * 0.25;
    //     return fatInGrams;
    // }

    // getAllMacros() {
    //     return {
    //         "calories":this.bodyweight * 15,
    //         "restCalories": this.bodyweight * 15 + 100,
    //         "activeCalories": this.bodyweight * 15 + 500
    //     };
    // }
}

Person.NUMBER_OF_PROTEIN_CALORIES = 4;
Person.NUMBER_OF_FAT_CALORIES = 9;
Person.NUMBER_OF_CARB_CALORIES = 4;

const myPerson = new Person();

// console.log("Calories based on Bodyweight:", myPerson.getCalories());
// console.log("Rest Day Calories:", myPerson.getRestSurplusCalories());
// console.log("Gym Day Calories:", myPerson.getActiveSurplusCalories());


module.exports = Person;