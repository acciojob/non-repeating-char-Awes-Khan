function firstNonRepeatedChar(str) {
 // Write your code here
	let uniqueArr = [...(new Set([...str]))];
    let ans=[];
    for(let i=0;i<uniqueArr.length; i++){
        let ind = str.indexOf(uniqueArr[i]);
        if(str.indexOf(uniqueArr[i], ind+1)==-1)
            return uniqueArr[i];
    }
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
