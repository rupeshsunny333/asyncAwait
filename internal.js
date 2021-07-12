
function find(n){
    return new Promise((x,y)=>{
        if(!isNaN(Math.abs(n))){
            x(n+" is a NUMBER");
        }
        else{
            y(n+" is not a NUMBER");
        }
    });
}

async function output(){
    return await find("5");
}
output().then(function(a){
    console.log(a);
}).catch(function(b){
    console.log(b);
});
/*


var buffer= Buffer.alloc(6);

buffer.write("abcd","ascii");

console.log(buffer.byteLength);
console.log("\n");
for(let i=0;i<buffer.byteLength;i++)
    console.log(buffer[i]);
console.log("\n");
var buffer2 = Buffer.from("hello!","utf-8");

console.log(buffer2.byteLength);
console.log("\n");

console.log("Buffer 1 = "+buffer.toString());
console.log("Buffer 2 = "+buffer2.toString());
console.log("\n");
buffer2.copy(buffer);
console.log(buffer.toString());
console.log(buffer2.toString());

*/