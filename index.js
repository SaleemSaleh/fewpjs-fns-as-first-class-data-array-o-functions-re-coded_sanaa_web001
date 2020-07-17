let func1 = function wakeDog(dogName, dogBreed) {
  let string = `Wake ${dogName} the ${dogBreed}` ;
  console.log(string);
  return string ;
};
let func2 =function leashDog(dogName, dogBreed) {
  let string = `Leash ${dogName} the ${dogBreed}` ;
  console.log(string);
    return string ;
};

let func3 = function walkToPark(dogName, dogBreed) {
  let string = `Walk to the park with ${dogName} the ${dogBreed}` ;
  console.log(string);
    return string ;
};
let func4 =function throwFrisbee(dogName, dogBreed) {
  let string = `Throw the frisbee for ${dogName} the ${dogBreed}` ;
  console.log(string);
    return string ;
};
let func5 =function walkHome(dogName, dogBreed) {
  let string = `Walk home with ${dogName} the ${dogBreed}` ;
  console.log(string);
    return string ;
};
let func6 =function unleashDog(dogName, dogBreed) {
  let string = `Unleash ${dogName} the ${dogBreed}` ;
  console.log(string);
    return string ;
};

let routine = [wakeDog() ,leashDog() ,walkToPark() ,throwFrisbee()
,walkHome(),unleashDog()] ;

function exerciseDog  (dogName,dogBreed) {
    let array = [];
  for (let i = 0; i <routine.lenght ; i++ ){
    let func = routine[i] ;
    let string = func(dogName,dogBreed);
    array.push(string);
  }
  return array ;
}
