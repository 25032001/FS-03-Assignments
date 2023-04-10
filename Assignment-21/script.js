
// You can console also You can see Results on HTML Page
// Question 1 a) ans
let DisplayOutput01=document.querySelector('.Random1')
let Displayoutput02=document.querySelector('.Random2')
let Random= Math.floor(Math.random() * 10) + 1;
let p1=new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve(Random)
   },1000)
}).then((value)=>{
  DisplayOutput01.innerHTML=`Random Number is  ${Random}`
  console.log(value);
})


// Question 1 (b)
let p2=new Promise((resolve,reject)=>{
 Random= Math.floor((Math.random() * 10) + 1)%2==1;
  setTimeout(()=>{
    reject(new Error(`Random number is odd ? ${Random}`))
  })
}).catch((value)=>{
   Displayoutput02.innerHTML=value;
})






