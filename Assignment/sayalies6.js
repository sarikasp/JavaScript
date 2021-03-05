// console.log("Gauri..");

// class MyClass {
//     // class constructor, equivalent to
//     // the function body of a constructor
//     constructor() {
//       const privateVariable = 'private value'; // Private variable at the constructor scope
//       this.publicVariable = 'public value'; // Public property
  
//       this.privilegedMethod = function() {
//         // Public Method with access to the constructor scope variables
//         console.log(privateVariable);
//       };
//     }
  
//     // Prototype methods:
//     publicMethod() {
//       console.log(this.publicVariable);
//     }
  
//     // Static properties shared by all instances
//     static staticProperty = 'static value';
  
//     static staticMethod() {
//       console.log(this.staticProperty);
//     }
//   }
  
//   // We can add properties to the class prototype
//   MyClass.prototype.additionalMethod = function() {
//     console.log(this.publicVariable);
//   };
  
//   var myInstance = new MyClass();
//   myInstance.publicMethod();       // "public value"
//   myInstance.additionalMethod(); // "public value"
//   myInstance.privilegedMethod(); // "private value"
//   MyClass.staticMethod();             // "static value"



class Players{
    
    firstname = 'Virat'
    lastName = 'Kohali'

    constructor(pno, pty){

        const playerNum = pno
        this.playerType = pty

        this.privilegedMethod = function() {
            // Public Method with access to the constructor scope variables
            console.log("Player Number: ",playerNum);
          };
    }
       // Prototype methods:
       publicMethod() {
        console.log("Player Type: ",this.playerType);
      }
    
      // Static properties shared by all instances
      static firstname = 'Sachin';
    
      static staticMethod() {
        console.log("Updated Player Name: ",this.firstname);
      }
  
}

  // We can add properties to the class prototype
    Players.prototype.additionalMethod = function() {
      console.log("Player lastName: ", this.lastName);
  };
  
  var a = new Players(3, 'Batsman');

  console.log("Player Name: ", a.firstname);      
  a.additionalMethod();   // "public value"
  Players.staticMethod();      // "static value"
  a.privilegedMethod();   // "private value
  a.publicMethod();       // "public value"
 


