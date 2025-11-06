const films = [
  {
    title: 'Rear Window',
    director: 'Alfred Hitchcock',
    year: 1954,
    genreTags: ['Suspense', 'Murder Myster'],
    physicalMedia: {
      type: 'Bluray',
      quantity: 2,
    },
    cast: [
      {
        name: 'Jimmy Stewart'
      },
      {
        name: 'Grace Kelly'
      },
      {
        name: 'Thelma Ritter'
      }
    ]
  },
  {
    title: 'The Thing',
    director: 'John Carpenter',
    year: 1982,
    genreTags: ['Horror', 'Creature Feature'],
    physicalMedia: {
      type: '4k',
      quantity: 1,
    },
    cast: [
      {
        name: 'Kurt Russell',
      },
      {
        name: 'Keith David'
      },
      {
        name: 'Wilford Brimley'
      }
    ]
  },
  {
    title: 'Vertigo',
    director: 'Alfred Hitchcock',
    year: 1958,
    genreTags: ['Suspense'],
    physicalMedia: {
      type: 'Bluray',
      quantity: 1,
    },
    cast: [
      {
        name: 'Jimmy Stewart'
      },
      {
        name: 'Kim Novak'
      }
    ]
  },
  {
    title: 'Fright Night',
    director: 'Tom Holland',
    year: 1985,
    genreTags: ['Horror', 'Vampire'],
    physicalMedia: {
      type: '4k',
      quantity: 2,
    },
    cast: [
      {
        name: 'William Ragsdale'
      },
      {
        name: 'Chris Surandon'
      },
      {
        name: 'Amanda Bearse'
      }
    ]
  }
];

/*
Prompt #1
Use the native reduce method to return the number of films that were made 
in the 1950s.
*/
//acc - where to start return value
//film - current element
let numFifties = films.reduce(function(acc, film){
//return number of films made in 1950s
  //data starts as array
  //return needs to be number
  //define seed as 0
    //condition
    if(film.year >= 1950 && film.year <= 1959){
      acc += 1;
    }
    //return
    return acc;
}, 0);
//console.log(numFifties); //2

/*
Prompt #2
Use the native reduce method to return a new array of the films whose physicalMedia
type is "Bluray".
*/

let blurays = films.reduce(function(acc, film){
//return an array => seed is empty array[]
  //condition
    if(film.physicalMedia.type === 'Bluray'){
      //what to do with accumulator acc
      //acc starts as empty array
      //to add to an array value has to be pushed
      //push film object into acc array if true
      acc.push(film);
    }
    //return
    return acc;
}, []);

//console.log(blurays);

/*
Prompt #3
Use the native reduce method to return a new array of the film titles whose genreTags
array includes 'Horror'
*/

let horror = films.reduce(function(acc, film){
//define seed => return needs to an array
  //condition if film object genereTags key value = Horror 
    //genereTags key value is an array => need to loop thru array to find Horror value
      //loop thru genereTags array
      for(let i = 0; i < film.genreTags.length; i++){
        //condition if film object genereTags key value = Horror 
        if(film.genreTags[i] === "Horror"){ 
          //what to do to acc
            //return an array of film titles if condition is true
          acc.push(film.title);
        }
      }
      //return acc
      return acc;
}, []);

//console.log(horror); //['The Thing', 'Friday Night']
/*
Prompt #4
Use the native reduce method to return a string of each title's first letter.

example output:
// 'RTVF'
*/

let firstLetters = films.reduce(function(acc, film){
//define seed => return string of title's first letter
  //seed is empty string
    //condition => no condition return all films objects just modified
      //return a string of film title's first letter 
        //what to do with acc
         acc += film.title(0);

         return acc;
      
}, "");
console.log(firstLetters);
