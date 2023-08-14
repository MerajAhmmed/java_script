function CheckPalindrome(word){

    let check = word.length;
    for(let i = 0; i < check / 2; i++){
        if(check[i] !== word[check -1-i]){
            return ('it is not a palindrome');
        }else{
            return ('It is a palindrome');
        }
    }

}

let word = 'madam';
let result = CheckPalindrome(word);
console.log(result);