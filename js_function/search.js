const lyrics = 'tumi bomdu kala pakhi sada sada kala kala ';

const SearchString = 'KAla';

const StringLowerCase = SearchString.toLowerCase();

const DoesExist = StringLowerCase.includes(StringLowerCase);

console.log(DoesExist);

console.log(lyrics.indexOf(StringLowerCase));

if(StringLowerCase !== -1){
    console.log('the word is exisst');
}else{
    console.log('it does not exit');
}

console.log(lyrics.startsWith(StringLowerCase));
console.log(lyrics.endsWith(StringLowerCase))

if(StringLowerCase == lyrics.startsWith){
    console.log('the word does not start with this word')
}else{
    console.log('word start with another word');
}

