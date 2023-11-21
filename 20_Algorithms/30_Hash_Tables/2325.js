// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.


// O(n + m) where n is the length of key, and m is the length of the message
const func = (key, message) => {
    const hm = new Map();

    // Spaces are transformed to themselves
    hm.set(' ', ' ')
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    
    let j = 0;
    for(let i = 0; i < key.length; i++){
        // Assign each character of the key to a letter of the alph if it hasn't already been assinged
        if(!hm.get(key[i])){
            hm.set(key[i], alph[j]);
            j++;
        }
    }

    let ans = '';
    for(const char of message){
        ans += hm.get(char);
    }

    console.log(ans);
}

func(key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv");