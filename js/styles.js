// front end logic

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var romanOnes = ["I","II","III","IV","V","VI","VII","VIII","IX"];
    var romanTens = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    var romanHundreds = ["C","CC","CCC","CD","D","DX","DXX","DXXX","CM"];
    var romanThousands = ["M","MM","MMM"];
    var regularNumbers = ["1","2","3","4","5","6","7","8","9"];

    var currentIndex = 0;
    var userInput = $("#inputNumber").val().split("");

          if (userInput.length === 1) {
            var onesDigit = regularNumbers.indexOf(userInput[0]);
            $(".output").text(romanOnes[onesDigit]);
          }

           else if (userInput.length === 2) {
            var tensDigit = regularNumbers.indexOf(userInput[0]);
            var onesDigit = regularNumbers.indexOf(userInput[1]);
            $(".output").text(romanTens[tensDigit] + romanOnes[onesDigit]);
          }

          else if (userInput.length === 3) {
           var hundredsDigit = regularNumbers.indexOf(userInput[0]);
           var tensDigit = regularNumbers.indexOf(userInput[1]);
           var onesDigit = regularNumbers.indexOf(userInput[2]);
           $(".output").text(romanHundreds[hundredsDigit] + romanTens[tensDigit] + romanOnes[onesDigit]);
         }

         else if (userInput.length === 4) {
          var thousandsDigit = regularNumbers.indexOf(userInput[0]);
          var hundredsDigit = regularNumbers.indexOf(userInput[1]);
          var tensDigit = regularNumbers.indexOf(userInput[2]);
          var onesDigit = regularNumbers.indexOf(userInput[3]);
          $(".output").text(romanThousands[thousandsDigit] + romanHundreds[hundredsDigit] + romanTens[tensDigit] + romanOnes[onesDigit]);
        }

        else {
          if (isNaN(userInput)) {
            $(".output").text("Please enter a valid number!");
          };
        }
      });
    });




    //
    // THIS IS HOW WE WORKED THE ONE DIGIT INPUTS (VERSION2 ):******************
    //
    // regularNumbers.forEach(function(currentInteger) {
    //   	if (userInput === currentInteger) {
    //     currentIndex = regularNumbers.indexOf(currentInteger);
    //     };
    //   });
    // var outputRoman = romanArray[currentIndex];
    // $(".output").text(outputRoman);


// THIS IS HOW WE WORKED THE ONE DIGIT INPUTS (VERSION 1):******************

// var userInput = parseInt($("#inputNumber").val()); {
//       if (isNaN(userInput)) {
//       $(".output").text("Please Enter an actual valid number!");
//     }
//       else if (userInput === 1) {
//       $(".output").text("I");
//     }
//       else if (userInput === 2) {
//       $(".output").text("II");
//     }
//       else if (userInput === 3) {
//       $(".output").text("III");
//     }
//       else if (userInput === 4) {
//       $(".output").text("IV");
//     }
//       else if (userInput === 5) {
//       $(".output").text("V");
//     }
//       else if (userInput === 6) {
//       $(".output").text("VI");
//     }
//       else if (userInput === 7) {
//       $(".output").text("VII");
//     }
//       else if (userInput === 8) {
//       $(".output").text("VIII");
//     }
//       else if (userInput === 9) {
//       $(".output").text("IX");
//     }
//       else if (userInput === 10) {
//       $(".output").text("X");
//     }
//
//   };
