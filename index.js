//java script 87 no video
//jsonfile access, modify, delete and conversion (chack json note book)

const data =require("./student_data.json"); //akhane student_data json file ke akhane import ba connect kora hoyeche...
////console.log(data); ///akhane terminal ar console a output dekha hoyeche node index.js diye.....and aita chack kora hoyeche je amra student_data.json file take import ba connect korte perechi ki na


//console.log(data.students[0].language) ///aivabe amra access korte pari json file theke data 


//modify korar jonno------------------

// data.students[0].name="shanot" 
// console.log(data)


//delete korar jonno----------------

// delete data.students[0].age;
// console.log(data) 


///////////////// loop ar maddhome json file ke access korar jonno------------------------------------

// for(x in data){
//     console.log(x); ////akhane sudhu key ta print korbe jemon students..........jodi r oo key thake tahole seta oo print korbe
//     console.log(data[x]) /// akhane key ar value ta print korbe
// }


////////////conversion-----(chack note book)
//// java script theke json format a convart----
// const data2={
//     name:"dip", //java script ar object ar khetre key te "" dewar kono dorkar nei
//     age:25
// }

// console.log(JSON.stringify(data2)) //akhane java script object ke json format a convart kora hoyeche



//// json format theke java script  a convart----

console.log(JSON.parse('{"name" : "dipghosh"}'));

////comment korar akti niyom hocche /** deyar sathe sathe multiple line comment hoye jabe 