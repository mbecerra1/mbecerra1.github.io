document.write('goodd job');

let namep= "Jane";

const year=2018;

const isok = true

const empty = null

document.write(namep);

//create a object 
let people = {
    grades: 'graduate',
    height: '5.3'

}

document.write(people.grades);

//create array

let seasons = ['spring', 'winter']
document.write(seasons[0]);

//create a new array using functions
let season02=new Array ('autumn', 'spring')
document.write(season02[0]);


//create function
function greet(){
    document.write('well done');
}
greet();

//function for the paragraph 
function getmsg(){
    return 'print message for paragraph';
}

document.getElementById('msg').innerHTML=getmsg();