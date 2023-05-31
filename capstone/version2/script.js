(function(){
    'use strict';
    //<-------------------------- puzzle 1 script------------------------>
    function f1CheckAnswers(){
        var userAnswer1 = document.getElementById("d1Answer").value;
        var userAnswer2 = document.getElementById("d2Answer").value;
        var userAnswer3 = document.getElementById("a1Answer").value;
        const d1Answer = 'a';
        const d2Answer = 'b';
        const a1Answer = 'c';
    
        if (userAnswer1.length == 0 || userAnswer2.length == 0 || userAnswer3==0) {
            alert("You must enter an answer to continue...");
            return false;
            }
        if (userAnswer1 === d1Answer || userAnswer2 === d2Answer || userAnswer3 === a1Answer){
            alert("Correct!");
            console.log('t1');
        }else{
            alert("Try again!");
            console.log("f1");
        }
    }
    
    document.getElementById("s1").addEventListener("click", function(event){
        event.preventDefault()
        f1CheckAnswers();
      });
    
      //<-------------------------- puzzle 2 script------------------------>
      function f2CheckAnswers(){
        var userAnswer1 = document.getElementById("ans1").value;
        var userAnswer2 = document.getElementById("ans2").value;
        const ans1 = 'a';
        const ans2 = 'b';
       
        if (userAnswer1.length == 0 || userAnswer2.length == 0) {
            alert("You must enter an answer to continue...");
            return false;
            }
        if (userAnswer1 === ans1 || userAnswer2 === ans2){
            alert("Correct!");
            console.log('t2');
        }else{
            alert("Try again!");
            console.log("f2");
        }
    }
    
    document.getElementById("s2").addEventListener("click", function(event){
        event.preventDefault()
        f2CheckAnswers();
      });
    
      //<-------------------------- puzzle 3 script------------------------>
      function f3CheckAnswers(){
        var userAnswer1 = document.getElementById("bird").value;
        const bird = 'a';
        
        if (userAnswer1.length == 0) {
            alert("You must enter an answer to continue...");
            return false;
            }
        if (userAnswer1 === bird){
            alert("Correct!");
            console.log('t3');
        }else{
            alert("Try again!");
            console.log("f3");
        }
    }
    
    document.getElementById("s3").addEventListener("click", function(event){
        event.preventDefault()
        f3CheckAnswers();
      });
    
        //<-------------------------- puzzle 4 script------------------------>
        function f4CheckAnswers(){
            var userAnswer1 = document.getElementById("home").value;
            const home = 'a';
            
            if (userAnswer1.length == 0) {
                alert("You must enter an answer to continue...");
                return false;
                }
            if (userAnswer1 === home){
                alert("Correct!");
                console.log('t4');
            }else{
                alert("Try again!");
                console.log("f4");
            }
        }
        
        document.getElementById("s4").addEventListener("click", function(event){
            event.preventDefault()
            f4CheckAnswers();
          });
    
        //<-------------------------- puzzle 5 script------------------------>
        function f5CheckAnswers(){
            var userAnswer1 = document.getElementById("plant").value;
            const plant = 'a';
        
            if (userAnswer1.length == 0) {
                alert("You must enter an answer to continue...");
                return false;
                }
            if (userAnswer1 === plant){
                alert("Correct!");
                console.log('t5');
            }else{
                alert("Try again!");
                console.log("f5");
            }
        }
        
        document.getElementById("s5").addEventListener("click", function(event){
            event.preventDefault()
            f5CheckAnswers();
          });
    
              //<-------------------------- puzzle 6 script------------------------>
        function f6CheckAnswers(){
            var userAnswer1 = document.getElementById("Gphase").value;
            const Gphase = 'a';
        
            if (userAnswer1.length == 0) {
                alert("You must enter an answer to continue...");
                return false;
                }
            if (userAnswer1 === Gphase){
                alert("Correct!");
                console.log('t6');
            }else{
                alert("Try again!");
                console.log("f6");
            }
        }
        
        document.getElementById("s6").addEventListener("click", function(event){
            event.preventDefault()
            f6CheckAnswers();
          });
          
                 //<-------------------------- puzzle 7 script------------------------>
        function f7CheckAnswers(){
            var userAnswer1 = document.getElementById("ph1").value;
            var userAnswer2 = document.getElementById("ph2").value;
            var userAnswer3 = document.getElementById("wd1").value;
            var userAnswer4 = document.getElementById("ph3").value;
            var userAnswer5 = document.getElementById("wd2").value;
            const ph1 = 'a';
            const ph2 = 'b';
            const wd1 = 'c';
            const ph3 = 'd';
            const wd2 = 'e';
        
            if (userAnswer1.length == 0 || userAnswer2.length == 0 || userAnswer3.length == 0 || userAnswer4.length == 0 ||userAnswer5.length == 0) {
                alert("You must enter an answer to continue...");
                return false;
                }
            if (userAnswer1 === ph1 || userAnswer2 === ph2 || userAnswer3 === wd1 || userAnswer4 === ph3 || userAnswer5 === wd2){
                alert("Correct!");
                console.log('t7');
            }else{
                alert("Try again!");
                console.log("f7");
            }
        }
        
        document.getElementById("s7").addEventListener("click", function(event){
            event.preventDefault()
            f7CheckAnswers();
          });
                //<-------------------------- puzzle 8 script------------------------>
    
    
    
    
    
    
                 //<-------------------------- puzzle 9 script------------------------>
        function f9CheckAnswers(){
            var userAnswer1 = document.getElementById("tomato").value;
            const tomato = 'a';
           
        
            if (userAnswer1.length == 0 ) {
                alert("You must enter an answer to continue...");
                return false;
                }
            if (userAnswer1 === tomato ){
                alert("Correct!");
                console.log('t9');
            }else{
                alert("Try again!");
                console.log("f9");
            }
        }
        
        document.getElementById("s9").addEventListener("click", function(event){
            event.preventDefault()
            f9CheckAnswers();
          });
    
                 //<-------------------------- puzzle 10 script------------------------>
        function f10CheckAnswers(){
            var userAnswer1 = document.getElementById("water").value;
            const water = 'a';
           
        
            if (userAnswer1.length == 0 ) {
                alert("You must enter an answer to continue...");
                return false;
                }
            if (userAnswer1 === water ){
                alert("Correct!");
                console.log('t10');
            }else{
                alert("Try again!");
                console.log("f10");
            }
        }
        
        document.getElementById("s10").addEventListener("click", function(event){
            event.preventDefault()
            f10CheckAnswers();
          });
    
                   //<-------------------------- puzzle 11 script------------------------>
        function f11CheckAnswers(){
            var userAnswer1 = document.getElementById("hallans").value;
            const hallans = 'a';
           
        
            if (userAnswer1.length == 0 ) {
                alert("You must enter an answer to continue...");
                return false;
                }
            if (userAnswer1 === hallans ){
                alert("Correct!");
                console.log('t11');
            }else{
                alert("Try again!");
                console.log("f11");
            }
        }
        
        document.getElementById("s11").addEventListener("click", function(event){
            event.preventDefault()
            f11CheckAnswers();
          });
    
                    //<-------------------------- puzzle 12 script------------------------>
        
        document.getElementById("s12").addEventListener("click", function(event){
            event.preventDefault()
            f12CheckAnswers();
          });
    
    
    })();