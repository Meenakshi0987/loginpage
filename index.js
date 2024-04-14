//Reverse a string
// function string(str){
//     let reverse=""
//     for (let i=str.length-1;i>=0;i--) {
        
//         reverse=reverse+str[i]
//     }
//     return reverse
// }
// console.log(string("interview Happy"));


/*  Reverse a string using inbuilt method
function String(str){
    return str.split("").reverse().join("")
}
console.log(String("Hello World"));
*/



//write a function longest word in the sentence
/*
console.log(findLongestWord("I Love coding in JavaScript"));
function findLongestWord(sentence){
    const words=sentence.split(" ")
    let longestWord=""
    for (let word of words){
        if (word.length>longestWord.length){
            longestWord=word
        }
    }
return longestWord;
}
*/

// const name="meena is talented girl"
// console.log(name.split(" "));


//check string is palindrom or not 
/*
console.log(isPalindrom("racecar"));
function isPalindrom(str){
    let reversedStr=str.split("").reverse().join("")
    return str===reversedStr
}
*/
//Remove duplicates from an array 
/*
function removeDuplicates(arr){
    const uniqEl=[]
    for(let i=0;i<arr.length;i++){
        if(uniqEl.indexOf(arr[i])===-1){
            uniqEl.push(arr[i])
        }
    }
    return uniqEl;
}
console.log(removeDuplicates([1,2,3,4,4,5,6,6]));
*/


//Remove Duplicates using inbuilt method
/*
function removeDuplicates(arr){
    return [...new Set(arr)]
}
console.log(removeDuplicates([1,2,3,4,4,5,6,6]));
*/
/*
//writw a program to check two tring are anagram or not
//anagram is a word formed by rearranging the letters of another word

function anagram(str1,str2){
    const sortedStr1=str1.split("").reverse().join("")
    const sortedStr2=str2.split("").reverse().join("")
    return sortedStr1===sortedStr2

}
c
onsole.log(anagram("silent","silent"));
*/
/*
//write function to return number of vowels

function countVowels(str){
    const vowels=["a","e","i","o","u"]
    let count=0
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
        count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));
*/

/*
//find Largest number

console.log(findLargest([2,4,6,9,3]));
function findLargest(arr){
    let largest=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest;
}
*/
/*
//write a function for Prime Number


function isPrime(number){
    for(let i=2;i<=number/2;i++){
        if(number%i===0){
            return false
        }
    }
    return true
}
console.log(isPrime(7));
console.log(isPrime(10));
*/
/*
//write a program for factorial of number

function factorial(num){
    if(num===0){
        return 1
    }
    let fact=1
    for(let i=1;i<=num;i++){
        fact *=i
    }
return fact;
}
console.log(factorial(3));
*/
//write a program for Remove whiteSpace 
function whiteSpace(str){
    const result=str.replace(/\s/g,"")
    return result
}
const inputStr="Interview       Happy"
console.log(whiteSpace(inputStr));