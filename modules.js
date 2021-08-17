console.log(__dirname);
console.log(__filename);
console.log(module);
var value=1;
setInterval(()=>{

    console.log('Hi '+value);
    value++;
},1000);