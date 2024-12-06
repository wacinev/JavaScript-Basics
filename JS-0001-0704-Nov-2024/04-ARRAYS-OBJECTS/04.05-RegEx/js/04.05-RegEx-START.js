/*  Lesson 04.05 - START

Some Regex Syntax:
      / /     means there is a regex expression inside the / /
      \s      means "one space"
      \s+     means "one or more spaces".
      /\s/    means find space
      /\s+/   means find one or more consecutive spaces
      g       means global (all instances)
      /\s/g   means find all spaces
*/

// '"  A B  C   D EF "'
console.log('str:'); // "##A#B##C###D#EF#"

// RegEx expressions to replace substring:
console.log('/\s/ replace 1st space:\n'); 
// "# A B  C   D EF "

console.log('/\s+/  replace 1st instance of consecutive spaces:'); 
// "#A B  C   D EF "

// replace all space w # using replaceAll(' ', '#') and replace(RegEx, '#')
console.log('replaceAll() spaces w hashtags:');
console.log('/\s/g  replace all spaces w hashtags:');  
// "##A#B##C###D#EF#"

console.log('/\s+/g replace all space groups w ONE hashtag per group:\n'); 
// "#A#B#C#D#EF#"

console.log('/\s/g remove all spaces : '); // "ABCDEF"


// title case: capitalize all words
// let bdwyPlay = 'west side story';
// let titleCase;
// console.log(titleCase);

// replaceAll() is one way to replace all instances of a substring with another substring:
// "I am a cat person, because cats are the best!"
console.log();
// replaceAll(substring_to_replace, new_substring) 
// replaceAll() replaces all occurrences of the substring. 

// replaceAll() is an ES7 feature, so fairly newish (circa 2019)
// 'cat', 'dog'
console.log(); // I am a dog person, because dogs are the best!

// now back to cat with another way of replacing all instances
// RegEx alternative to replaceAll (g means 'globally'):
// 'cat' 
console.log(); // I am a cat person, because cats are the best!

/* 
More Regex Syntax:

\d	          one digit (0-9)
\d\d          two consecutive digits
file_\d\d	    "file_" followed by any two digits
file_\d+	    "file_" followed by all consecutive digit(s) 
*/
// 'car_file_807448.jpg'
// replace w new naming standard:
// 'pic'
console.log('fileName:'); // car_pic.jpg

/*
\w	        word character: letter, digit (0-9) or underscore  

\s	        whitespace character: space, tab, newline, carriage return, vertical tab	

^           not
^\w         not a word character (could be punctuation or special char)

^\w\s       everything NOT word chars (incl digits) and spaces

RegEx Recipe:
Removing punctuation from a string using ReGex
The following text contains lots of punctuation and special characters: 
: - ! ? " " , . ' ^ # $ % & @ + = * / \ { } [ ] ( )
*/
let nycHistory = `
    New York: Key Player in American Revolutionary War Boston and Philadelphia garner most of the credit for being the birthplaces of American independence, but did you know that New York -- named after King George's brother! -- played no small role itself? The "Sons of Liberty" campaigned against British authority in New York City, and the Stamp Act Congress of representatives from throughout the Thirteen Colonies met in the city in 1765 to organize resistance to Crown policies. The city's strategic location and status as a major seaport made it the prime target for British seizure in 1776. General George Washington lost a series of battles from which he narrowly escaped (with the notable exception of the Battle of Harlem Heights, his first victory of the war), and the British Army occupied New York and made it their base on the continent until late 1783, attracting Loyalist { } [ ] ( ) + = * / \ | refugees. The city served as the national capital under the Articles of Confederation from 1785 to 1789, and briefly served as the new nation's capital in 1789-90 under the United States Constitution. [adapted from Wikipedia; headline and lead question added] ^ # $ % & @ York, York. York; York:`;

console.log('nycHistory:');

/* 
Regex Expression: remove all punctuation (replace w empty string):

replace() works as well as replaceAll(), due to the "g flag" for "global" (all instances)
^\w        not a word char (word chars include digits)
^\s        not a space or whitespace
^\w\s      not word char, not space
[^\w\s]g   not word char, not space, globally (all)

remove all non-word chars and all non-spaces
digits 0-9 are word chars, so digits NOT removed
this will remove all punctuation and special chars:
*/

console.log('nycNoPuncNoSC:\n'); 
// no punc, no special chars, but has extra spaces

// clean up text by removing extra spaces
// replace space and multi-space sequences w one space


console.log('nycNoPuncNoSCTrim:\n'); 
// no punc, no special chars, no extra spaces

// remove all digits
// (replace w empty string):
let nyc;
// removing digits leaves extra space where year used to be: ' 1778 '
// so remove the extra spaces left by digit removal:

console.log('nycNoPuncNoSCNoDigits:\n');

/*
RegEx links:
https://www.rexegg.com/
https://www.rexegg.com/regex-quickstart.html
https://www.rexegg.com/regex-uses.html
*/

// END: Lesson 04.05
// NEXT: Lesson 04.06