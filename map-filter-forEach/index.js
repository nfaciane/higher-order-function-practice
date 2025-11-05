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
Use the native filter method to return a new array of the film
objects that were directed by Alfred Hitchcock.
*/

/*
I: intake array of film objects and cast arrays
O:
C:
E:
*/

//synatx for follow for each prompt//
    // arrayName.filter(){}
    // arrayName.map(){}
let hitchcock = films.filter(function(film){
//return true if element film has director key value Alefred Hitchcock
return film.director === 'Alred Hitchcock';
})
//console.log(hitchcock);

/*
Prompt #2
Use the native filter method to return a new array of the film objects
that were made in the 1980s.
*/

let eighties = films.filter(function(film1980s){
  //return true if element film1980 has year key value between 1980 and 1989
  return film1980s.year <= 1989 && film1980s.year >= 1980;
})
//console.log(eighties);

/*
Prompt #3
Use the map method to return a new array of strings of each film's title
and year like so...

example output:
// ['Rear Window (1954)', 'The Thing (1982)', 'Vertigo (1958)', 'Fright Night (1985)']
*/

let mappedStrings = films.map(function(filmTitle){
  //return new aray of strings with object film's title and year
  return filmTitle.title + " " + "(" + filmTitle.year + ")";
})
//console.log(mappedStrings);

/*
Prompt #4
Use the native filter method to return a new array of the film objects that have a physicalMedia quantity
of 2.
*/

let quantityTwo = films.filter(function(physicalMediaQ2){
//return true if film object key physicalMedia, quantity key value is 2
return physicalMediaQ2.physicalMedia.quantity === 2;
})
//console.log(quantityTwo);

/*
Prompt #5
Use the native filter method to return a new array of the film objects who have Kurt Russell in the cast.
*/

//Answer using .filter method and for loop
// let kurtRussell = films.filter(function(film) {
//   //loop thru cast array
//   for(let i = 0; i < film.cast.length; i++){
//     //return if true film's casting Kurt Russell
//     if(film.cast[i].name === "Kurt Russell"){
//       return true;
//     };
//   }
   
// })

//Answer using filter method and filter method and .length property
let kurtRussell = films.filter(function(film) {
  //return if true film objects casting Kurt Russell
    //return array element film.object key cast
  return film.cast.filter(function(castMember){
    //return cast array element castMember, name key value is Kurt Russell
    return castMember.name === "Kurt Russell";
    //.length; after filter function to ensure return ONLY if true
  }).length;
   
});

console.log(kurtRussell);

/*
Prompt #6
Use the native map method to return a new array of strings of each film's title and the top-billed
cast member (top billed cast member will be the first cast member in the cast array).
*/

let mappedWithCastMember = films.map(function(film){
//return new array of strings incuding film title and top-billed cast member 
                            //located at object.title  //located at object.cast[0].name
    return film.title + ", " + film.cast[0].name;
})
//console.log(mappedWithCastMember);