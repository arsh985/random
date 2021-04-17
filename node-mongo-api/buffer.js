var buf = Buffer.alloc(10);
len = buf.write('This Is Shaikh AJ, how  are you');
var json = buf.toJSON(buf);
console.log(json);
console.log('Octet Written : ' + len);
//console.log(buf.length);

//Reading Buffer
var buf1 = Buffer.alloc(26);

for(var i = 0; i<26; i++){
    buf1[i] = i + 97;
}

console.log(buf1.toString('ascii'));
console.log(buf1.toString('ascii',0,5));
console.log(buf1.toString('utf-8', 0, 5));
console.log(buf1.toString(undefined, 0, 5));

var buf2 = Buffer.concat([buf,buf1]);
console.log("Buf 3 is : " + buf2.toString());
