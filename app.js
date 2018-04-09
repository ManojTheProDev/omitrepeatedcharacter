function removeCharacters(str, n) {
   // Used as index in the modified string
   var index = 0, count=0, str1 = [];
    
   // Traverse through all characters
   for (var i=0; i<n; i++) {
        
     // Check if str[i] is present before it  
     var j;  
     for (j=0; j<i; j++) 
        if (str[i] == str[j]) {
        count++;
        if(count == 2)
           break;}
      
     // If not present, then add it to
     // result.
     if (j == i){
        str1[index++] = str[i];
     }
     // else if(count==2) {
     // 	str1[index++] = '';
     // }
     count=0;
   }
   str1 = str1.join('');
   return str1;
}

function omitExtras() {
	var str;
	str =document.getElementById('stringBox').value
	var n =str.length ;
	var abc = removeCharacters(str, n);
	document.getElementById('output').innerHTML = abc;
	return 0;
}