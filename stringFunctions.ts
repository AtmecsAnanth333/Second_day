var str = new String("This is string"); 
console.log("str.charAt(0) is:" + str.charAt(0)); 
console.log("str.charAt(1) is:" + str.charAt(1)); 
console.log("str.charAt(2) is:" + str.charAt(2)); 
console.log("str.charAt(3) is:" + str.charAt(3)); 
console.log("str.charAt(4) is:" + str.charAt(4)); 
console.log("str.charAt(5) is:" + str.charAt(5));

var str1 = new String( "This is string one" ); 
var str2 = new String( "This is string two" ); 
var str3 = str1.concat(str2.toString());
console.log("str1 + str2 : "+str3)

var stri = new String( "This is string one" ); 
 
var index = stri.indexOf( "string" ); 
console.log("indexOf found String :" + index );   

var index = stri.indexOf( "one" ); 
console.log("indexOf found String :" + index );

