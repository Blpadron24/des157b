(function(){
    'use strict';

 //-----------------js for home screen & instructions------------------------
    document.getElementById("playBttn").addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("start").className = "hidden";
        document.getElementById("puzzle0").className = "layer showing";
    });

    document.getElementById("instBttn").addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("instructions").className = "showing";
    });

    document.getElementById("playBttn2").addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("start").className = "hidden";
        document.getElementById("instructions").className = "hidden";
        document.getElementById("puzzle0").className = "layer showing";
    });



    //-----------------one puzzle to the next------------------------
    let layerCounter = 0;
    const allBttns = document.querySelectorAll('.bttn');
    const body = document.querySelector("body");

    allBttns.forEach( eachBttn => {

        eachBttn.addEventListener('click', event => {

            event.preventDefault();
            if(event.target.id === "s0"){
                event.target.removeAttribute('style');
                f1CheckAnswers();                
            }
            if(event.target.id === "s1"){
                event.target.removeAttribute('style');
                f2CheckAnswers();                
            }
            if(event.target.id === "s2"){
                event.target.removeAttribute('style');
                f3CheckAnswers();                
            }
            let thisBttnNumber = Number(event.target.id.substring(1, event.target.id.length));

            layerCounter = thisBttnNumber+1;

            const nextLayer = document.querySelector(`#puzzle${layerCounter}`);
            const prevLayer = document.querySelector(`#puzzle${thisBttnNumber}`);
            
            nextLayer.style.zIndex = layerCounter;
            nextLayer.className = 'layer showing';

        } );
    } );

    //<-------------------------- puzzle 1 script------------------------>
    function f1CheckAnswers(){

        var userAnswer1 = document.getElementById("d1Answer").value.toLowerCase();
        var userAnswer2 = document.getElementById("d2Answer").value.toLowerCase();
        var userAnswer3 = document.getElementById("a1Answer").value.toLowerCase();
        const d1Answer = 'railroad';
        const d2Answer = 'patwin';
        const a1Answer = 'putah';

    
        if (userAnswer1.length == 0 || userAnswer2.length == 0 || userAnswer3==0) {
            alert("You must enter an answer to continue...");
            return false;
            }
        if (userAnswer1 === d1Answer || userAnswer2 === d2Answer || userAnswer3 === a1Answer){
            // alert("Correct!");
            document.getElementById("seal_container").className = "showing";
                document.getElementById("seal").src = seals[0];

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                body.style.backgroundImage = "url(images/sealPics/sealP1.png)";
            },3000);
        }
        else{
            alert("Try again!");
            console.log("f1");
        }

    }

      //<-------------------------- puzzle 2 script------------------------>
      function f2CheckAnswers(){
        var userAnswer1 = document.getElementById("ans1").value;
        var userAnswer2 = document.getElementById("ans2").value;
        const ans1 = '1868';
        const ans2 = 'Davisville';
       
        if (userAnswer1.length == 0 || userAnswer2.length == 0) {
            alert("You must enter an answer to continue...");
            return false;
            }
        if (userAnswer1 === ans1 || userAnswer2 === ans2){
            console.log('t2');
            document.getElementById("seal_container").className = "showing";
                document.getElementById("seal").src = seals[0];

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                body.style.backgroundImage = "url(images/sealPics/sealP2.png)";
            },3000);
        }else{
            alert("Try again!");
            console.log("f2");
        }
    }
    
    document.getElementById("s2").addEventListener("click", function(event){
        event.preventDefault();
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
            console.log('t3');
            document.getElementById("seal_container").className = "showing";
                document.getElementById("seal").src = seals[0];

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                body.style.backgroundImage = "url(images/sealPics/sealP3.png)";
            },3000);
        }else{
            alert("Try again!");
            console.log("f3");
        }
    }
    
    //     //<-------------------------- puzzle 4 script------------------------>
    //     function f4CheckAnswers(){
    //         var userAnswer1 = document.getElementById("home").value;
    //         const home = 'a';
            
    //         if (userAnswer1.length == 0) {
    //             alert("You must enter an answer to continue...");
    //             return false;
    //             }
    //         if (userAnswer1 === home){
    //             alert("Correct!");
    //             console.log('t4');
    //         }else{
    //             alert("Try again!");
    //             console.log("f4");
    //         }
    //     }
        
    //     document.getElementById("s4").addEventListener("click", function(event){
    //         event.preventDefault();
    //         f4CheckAnswers();
    //       });
    
    //     //<-------------------------- puzzle 5 script------------------------>
    //     function f5CheckAnswers(){
    //         var userAnswer1 = document.getElementById("plant").value;
    //         const plant = 'a';
        
    //         if (userAnswer1.length == 0) {
    //             alert("You must enter an answer to continue...");
    //             return false;
    //             }
    //         if (userAnswer1 === plant){
    //             alert("Correct!");
    //             console.log('t5');
    //         }else{
    //             alert("Try again!");
    //             console.log("f5");
    //         }
    //     }
        
    //     document.getElementById("s5").addEventListener("click", function(event){
    //         event.preventDefault();
    //         f5CheckAnswers();
    //       });
    
    //           //<-------------------------- puzzle 6 script------------------------>
    //     function f6CheckAnswers(){
    //         var userAnswer1 = document.getElementById("Gphase").value;
    //         const Gphase = 'a';
        
    //         if (userAnswer1.length == 0) {
    //             alert("You must enter an answer to continue...");
    //             return false;
    //             }
    //         if (userAnswer1 === Gphase){
    //             alert("Correct!");
    //             console.log('t6');
    //         }else{
    //             alert("Try again!");
    //             console.log("f6");
    //         }
    //     }
        
    //     document.getElementById("s6").addEventListener("click", function(event){
    //         event.preventDefault();
    //         f6CheckAnswers();
    //       });
          
    //              //<-------------------------- puzzle 7 script------------------------>
    //     function f7CheckAnswers(){
    //         var userAnswer1 = document.getElementById("ph1").value;
    //         var userAnswer2 = document.getElementById("ph2").value;
    //         var userAnswer3 = document.getElementById("wd1").value;
    //         var userAnswer4 = document.getElementById("ph3").value;
    //         var userAnswer5 = document.getElementById("wd2").value;
    //         const ph1 = 'a';
    //         const ph2 = 'b';
    //         const wd1 = 'c';
    //         const ph3 = 'd';
    //         const wd2 = 'e';
        
    //         if (userAnswer1.length == 0 || userAnswer2.length == 0 || userAnswer3.length == 0 || userAnswer4.length == 0 ||userAnswer5.length == 0) {
    //             alert("You must enter an answer to continue...");
    //             return false;
    //             }
    //         if (userAnswer1 === ph1 || userAnswer2 === ph2 || userAnswer3 === wd1 || userAnswer4 === ph3 || userAnswer5 === wd2){
    //             alert("Correct!");
    //             console.log('t7');
    //         }else{
    //             alert("Try again!");
    //             console.log("f7");
    //         }
    //     }
        
    //     document.getElementById("s7").addEventListener("click", function(event){
    //         event.preventDefault();
    //         f7CheckAnswers();
    //       });
    //             //<-------------------------- puzzle 8 script------------------------>
    
    
    
    
    
    
    //              //<-------------------------- puzzle 9 script------------------------>
    //     function f9CheckAnswers(){
    //         var userAnswer1 = document.getElementById("tomato").value;
    //         const tomato = 'a';
           
        
    //         if (userAnswer1.length == 0 ) {
    //             alert("You must enter an answer to continue...");
    //             return false;
    //             }
    //         if (userAnswer1 === tomato ){
    //             alert("Correct!");
    //             console.log('t9');
    //         }else{
    //             alert("Try again!");
    //             console.log("f9");
    //         }
    //     }
        
    //     document.getElementById("s9").addEventListener("click", function(event){
    //         event.preventDefault();
    //         f9CheckAnswers();
    //       });
    
    //              //<-------------------------- puzzle 10 script------------------------>
    //     function f10CheckAnswers(){
    //         var userAnswer1 = document.getElementById("water").value;
    //         const water = 'a';
           
        
    //         if (userAnswer1.length == 0 ) {
    //             alert("You must enter an answer to continue...");
    //             return false;
    //             }
    //         if (userAnswer1 === water ){
    //             alert("Correct!");
    //             console.log('t10');
    //         }else{
    //             alert("Try again!");
    //             console.log("f10");
    //         }
    //     }
        
    //     document.getElementById("s10").addEventListener("click", function(event){
    //         event.preventDefault();
    //         f10CheckAnswers();
    //       });
    
    //                //<-------------------------- puzzle 11 script------------------------>
    //     function f11CheckAnswers(){
    //         var userAnswer1 = document.getElementById("hallans").value;
    //         const hallans = 'a';
           
        
    //         if (userAnswer1.length == 0 ) {
    //             alert("You must enter an answer to continue...");
    //             return false;
    //             }
    //         if (userAnswer1 === hallans ){
    //             alert("Correct!");
    //             console.log('t11');
    //         }else{
    //             alert("Try again!");
    //             console.log("f11");
    //         }
    //     }
        
    //     document.getElementById("s11").addEventListener("click", function(event){
    //         event.preventDefault()
    //         f11CheckAnswers();
    //       });
    
    //                 //<-------------------------- puzzle 12 script------------------------>
        
    //     document.getElementById("s12").addEventListener("click", function(event){
    //         event.preventDefault();
    //         f12CheckAnswers();
    //       });
    
    
    })();