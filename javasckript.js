// 1. მოცემულია ობიექტი:
  let  user = {
       firstname:'giorgi',
       lastname: 'smith',
       age: 25,
       studentstatus: 'active'
       };
// // ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
                                               console.log(user.studentstatus);


// 2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი;
let mas=[12,4,35,3,'ika','gio','ani',12,'sali','shoti'];
for (let x of mas){
                                              //console.log(x);
 }
// // 3.  შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.
let mas2=[12,2,34,5,6,2,34,56,9,5,1,2,54];
for(let i=0; i<mas2.length; i++){
    if(mas2[i]>5)
                                              console.log(mas2[i]);
}
// 4.მოცემულია ობიექტი:
// თუ უსერის ასაკი მეტია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;


    let user2 = {
    	name: 'giorgi',
    	age:  28,
    	studentstatus: 'active'
    }
    if (user2.studentstatus=='active') {
        console.log('hello');
    }
    else if (user2.name=='levan') {
        console.log('hello giorgi');
    }
    else if ((user2.studentstatus=='active' )|| (user2.age<25)) {
        console.log('hello world');
    }
     else {
         console.log('error');
     }                                           

// 5.მოცემულია მასივი:
    let array = [ '‘watermelon’', '‘pear’', 10, 45, 50, '‘apple’', '‘ananas’' ] ;
//  გამოიტანეთ მარტო სრტინგები;
     for(let x of array){
         if(typeof x=='string'){
             console.log(x);
         }
     }

// 6. მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
 let array2 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
 for(let y of array2){
     for(let z of y){
         if(z>0){
             console.log(z);
         }
     }

 }

// 7. მოცემული მასივიდან ამოარჩიეთ მხოლოდ ციფრები, რომელიბიხ 5-ის ჯერადია
let array3 = [32, 10, '‘hello’', null,'hello2', 50 ]
  for(let i=0; i<array3.length;i++){
      if(array3[i]!='string'&&array3[i]%5==0&&array3[i]!=null){
          console.log(array3[i]);
      }
  }