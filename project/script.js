(function(){

    "use strict";

    const body = document.querySelector("body");
    const seals = ["images/sealPics/seal.png", "images/sealPics/sealP1.png", "images/sealPics/sealP2.png", "images/sealPics/sealP3.png", "images/sealPics/sealP4.png", "images/sealPics/sealP5.png", "images/sealPics/sealP6.png", "images/sealPics/sealP7.png", "images/sealPics/sealP8.png", "images/sealPics/sealP9.png", "images/sealPics/sealP10.png", "images/sealPics/sealP11.png", "images/sealPics/sealP12.png"];
    const sealDesc = document.getElementById("s_desc");
    const puzzleDesc = document.getElementById("p_desc");

    const allBttns = document.querySelectorAll('.bttn');

    //instructions button
    document.getElementById("instBttn").addEventListener("click", function(event){

        event.preventDefault();
        document.getElementById("start").className = "hidden";
        document.getElementById("instructions").className = "showing";
    });

    //play buttons
    const plays = document.querySelectorAll(".playBttn");
    plays.forEach(play => {
        play.addEventListener("click", function(event){

            event.preventDefault();
            document.getElementById("start").className = "hidden";
            document.getElementById("instructions").className = "hidden";
            document.querySelector("main").className = "showing";
            document.getElementById("puzzle0").className = "layer showing";
            body.style.backgroundImage = "url(images/bg/bg_1.jpg)";
        });
    });

    //event listener for all buttons
    allBttns.forEach(bttn =>{
        bttn.addEventListener("click", event =>{
            event.preventDefault();
            const form = document.querySelectorAll("form");
            switch(event.target.id){
                case 's0':  processData(form[0]);
                            f1CheckAnswers();
                            break;
                case 's1':  processData(form[1]);
                            f2CheckAnswers(); 
                            break;
                case 's2':  processData(form[2]);
                            f3CheckAnswers(); 
                            break;
                case 's3':  processData(form[3]);
                            f4CheckAnswers(); 
                            break;
                case 's4':  processData(form[4]);
                            f5CheckAnswers(); 
                            break;
                case 's5':  processData(form[5]); 
                            f6CheckAnswers();
                            break;
                case 's6':  processData(form[6]); 
                            f7CheckAnswers();
                            break;
                case 's7':  f8game();
                            break;
                case 's8':  processData(form[8]); 
                            f9CheckAnswers();
                            break;
                case 's9':  processData(form[9]); 
                            f10CheckAnswers();
                            break;
                case 's10': processData(form[10]);
                            f11CheckAnswers(); 
                            break;
                case 's11': f12game();
                            break;
            }
        })
    });
    //function that processes information for each form, if there is a form. 
    function processData(formData){
        const words =[];
        const emptyFields = [];
        let counter = 0;

        for(let i=0; i < formData.length-1; i++){
            if(formData[i].value){
                words.push(formData[i].value); 
            }
            else{
                emptyFields.push(counter);
            }
            counter++;
        }

        if(emptyFields.length > 0){
            alert("Please fill out all the answers.");
        }
    }

    //check answers for first puzzle
    function f1CheckAnswers(){
        var userAnswer1 = document.getElementById("d1Answer").value.toLowerCase();
        var userAnswer2 = document.getElementById("d2Answer").value.toLowerCase();
        var userAnswer3 = document.getElementById("a1Answer").value.toLowerCase();
    
        if (userAnswer1 === "railroad" && userAnswer2 === "patwin" && userAnswer3 === "putah"){
            console.log("correct!");
            document.getElementById("seal_container").className = "showing";
            document.getElementById("seal").src = seals[1];
            document.getElementById("puzzle0").className = "hidden";

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                document.getElementById("puzzle1").className = "layer showing";
                body.style.backgroundImage = "url(images/bg/bg_2.jpg)";
            },5000);
        }
        else{
            alert('One or more of your answers are wrong. Try again!\n View "Hints" if needed.');
        }
    }

    //check answers for second puzzle
    function f2CheckAnswers(){
        var userAnswer1 = document.getElementById("ans1").value.toLowerCase();
        var userAnswer2 = document.getElementById("ans2").value.toLowerCase();
    
        if (userAnswer1 === "1868" && userAnswer2 === "davisville"){
            console.log("correct!");
            sealDesc.innerHTML = "Second Ring - This portion of the seal represents the early history, from the settlers in 1868 to incorporation in 1917.";
            puzzleDesc.innerHTML = "This puzzle, named Time, is a representation of dates and names for the settlers in this region.";
            document.getElementById("seal_container").className = "showing";
            document.getElementById("seal").src = seals[2];
            document.getElementById("puzzle1").className = "hidden";

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                document.getElementById("puzzle2").className = "layer showing";
                body.style.backgroundImage = "url(images/bg/bg_3.jpg)";
            },5000);
        }
        else{
            alert('One or more of your answers are wrong. Try again!\n View "Hints" if needed.');
        }
    }

    //check answers for third puzzle
    function f3CheckAnswers(){
        var userAnswer1 = document.getElementById("bird").value.toLowerCase();
    
        if (userAnswer1 === "hawk"){
            console.log("correct!");
            sealDesc.innerHTML = "Pacific Flyway Panels - These two panels feature important symbols to the city of Davis, including the Pacific Flyway, agriculture, the university, wetlands, and migratory birds.";
            puzzleDesc.innerHTML = "This puzzle, named Birds, features a Swainson Hawk, which is a breed of hawk native to the region and is important to the Wintun people.";
            document.getElementById("seal_container").className = "showing";
            document.getElementById("seal").src = seals[3];
            document.getElementById("puzzle2").className = "hidden";

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                document.getElementById("puzzle3").className = "layer showing";
                body.style.backgroundImage = "url(images/bg/bg_4.jpg)";
            },5000);
        }
        else{
            alert('Your answer is wrong. Try again!\n View "Hints" if needed.');
        }
    }

    //check answers for fourth puzzle
    function f4CheckAnswers(){
        var userAnswer1 = document.getElementById("home").value.toLowerCase();
    
        if (userAnswer1 === "8" || userAnswer1 === "9" || userAnswer1 === "10"){
            console.log("correct!");
            sealDesc.innerHTML = "Innovative Contributions of Citizens Panel - This features citizens’ contributions to the city, like the bike lanes, the farmer’s market, Village Homes, and Wayne Thiebaud’s art. ";
            puzzleDesc.innerHTML = "This puzzle, named Paths, invites you to find the town on a 1914 map, to show that the journey always starts from home, wherever home may be.";
            document.getElementById("seal_container").className = "showing";
            document.getElementById("seal").src = seals[4];
            document.getElementById("puzzle3").className = "hidden";

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                document.getElementById("puzzle4").className = "layer showing";
                body.style.backgroundImage = "url(images/bg/bg_5.jpg)";
            },5000);
        }
        else{
            alert('Your answer is wrong. Try again!\n View "Hints" if needed.');
        }
    }

    //check answers for fifth puzzle
    function f5CheckAnswers(){
        var userAnswer1 = document.getElementById("plant").value.toLowerCase();
    
        if (userAnswer1 === "436512"){
            console.log("correct!");
            sealDesc.innerHTML = "Yolo County Panel - This panel features Davis as part of a whole, and shows the relationship between Davis and the county it is a part of.";
            puzzleDesc.innerHTML = "This puzzle, named Farmland, focuses on all the farmland in the Yolo county, and tells you about the crops grown in this region.";
            document.getElementById("seal_container").className = "showing";
            document.getElementById("seal").src = seals[5];
            document.getElementById("puzzle4").className = "hidden";

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                document.getElementById("puzzle5").className = "layer showing";
                body.style.backgroundImage = "url(images/bg/bg_6.jpg)";
            },5000);
        }
        else{
            alert('Your answer is wrong. Try again!\n View "Hints" if needed.');
        }
    }

    //check answers for sixth puzzle
    function f6CheckAnswers(){
        var userAnswer1 = document.getElementById("Gphase").value.toLowerCase();
    
        if (userAnswer1 === "patwin of wintun"){
            console.log("correct!");
            sealDesc.innerHTML = "Humanitarian and Social Justice Panel - This panel represents the social justice movements  by the citizens of Davis, including Measure A, Davis Free Clinic, and “We March with Selma”.";
            puzzleDesc.innerHTML = "This puzzle, named People, focuses on the people to whom the land belonged to.";
            document.getElementById("seal_container").className = "showing";
            document.getElementById("seal").src = seals[6];
            document.getElementById("puzzle5").className = "hidden";

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                document.getElementById("puzzle6").className = "layer showing";
                body.style.backgroundImage = "url(images/bg/bg_7.jpg)";
            },5000);
        }
        else{
            alert('Your answer is wrong. Try again!\n View "Hints" if needed.');
        }
    }

    //check answers for seventh puzzle
    function f7CheckAnswers(){
        var userAnswer1 = document.getElementById("ph1").value.toLowerCase();
        var userAnswer2 = document.getElementById("ph2").value.toLowerCase();
        var userAnswer3 = document.getElementById("wd1").value.toLowerCase();
        var userAnswer4 = document.getElementById("ph3").value.toLowerCase();
        var userAnswer5 = document.getElementById("wd2").value.toLowerCase();
    
        if ((userAnswer1 === "see no evil and hear no evil" || userAnswer1 === "hear no evil and see no evil") && userAnswer2 === "eye on you" && userAnswer3 === "bookhead" && userAnswer4 === "yin and yang" && userAnswer5 === "stargazer"){
            console.log("correct!");
            sealDesc.innerHTML = "University Panel - This panel is a collection of the university’s contribution to the community, including the eggheads, Unitrans and the arboretum.";
            puzzleDesc.innerHTML = "This puzzle, named Eggs, focuses on the 7 eggheads and their names across UCD campus. Some of the eggheads are pairs.";
            document.getElementById("seal_container").className = "showing";
            document.getElementById("seal").src = seals[7];
            document.getElementById("puzzle6").className = "hidden";

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                document.getElementById("puzzle7").className = "layer showing";
                body.style.backgroundImage = "url(images/bg/bg_8.jpg)";
            },5000);
        }
        else{
            alert('One or more of your answers are wrong. Try again!\n View "Hints" if needed.');
        }
    }

    //timer + game for eighth puzzle
    function f8game(){
        sealDesc.innerHTML = "Children’s Panel - This panel shows how Davis is a wonderful place to raise children, and yet there have been children who were excluded.";
        puzzleDesc.innerHTML = "This puzzle, named Childhood, asks you to draw childlike joy, as a way of reminding you about the simple pleasures of childhood.";
        document.getElementById("seal_container").className = "showing";
        document.getElementById("seal").src = seals[8];
        document.getElementById("puzzle7").className = "hidden";

        setTimeout(function(){
            document.getElementById("seal_container").className = "hidden";
            document.getElementById("puzzle8").className = "layer showing";
            body.style.backgroundImage = "url(images/bg/bg_9.jpg)";
        },5000);
    }

    //check answers for ninth puzzle
    function f9CheckAnswers(){
        var userAnswer1 = document.getElementById("tomato").value.toLowerCase();
    
        if (userAnswer1 === "12"){
            console.log("correct!");
            sealDesc.innerHTML = "Business and Commerce Panel - This panel represents the history of commerce in Davis, including the Hunt Wesson tomato plant processing plant and co-ops.";
            puzzleDesc.innerHTML = "This puzzle, named Hunt, is a hunt for tomatoes, highlighting the connection Davis farming has with tomatoes.";
            document.getElementById("seal_container").className = "showing";
            document.getElementById("seal").src = seals[9];
            document.getElementById("puzzle8").className = "hidden";

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                document.getElementById("puzzle9").className = "layer showing";
                body.style.backgroundImage = "url(images/bg/bg_10.jpg)";
            },5000);
        }
        else{
            alert('Your answer is wrong. Try again!\n View "Hints" if needed.');
        }
    }

    //check answers for tenth puzzle
    function f10CheckAnswers(){
        var userAnswer1 = document.getElementById("water").value.toLowerCase();
    
        if (userAnswer1 === "home by the spring water"){
            console.log("correct!");
            sealDesc.innerHTML = "Community and Volunteerism Panel - This panel honors Davis citizens who embodied the values of Community, Engagement, Citizenship and Volunteerism, like Hattie Weber.";
            puzzleDesc.innerHTML = "This puzzle, named Waters, focuses on the community that lived here with a Patwin phrase about their homes - yochadihisel, or home by the spring water.";
            document.getElementById("seal_container").className = "showing";
            document.getElementById("seal").src = seals[10];
            document.getElementById("puzzle9").className = "hidden";

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                document.getElementById("puzzle10").className = "layer showing";
                body.style.backgroundImage = "url(images/bg/bg_11.jpg)";
            },5000);
        }
        else{
            alert('Your answer is wrong. Try again!\n View "Hints" if needed.');
        }
    }

    //check answers for eleventh puzzle
    function f11CheckAnswers(){
        var userAnswer1 = document.getElementById("hallans").value.toLowerCase();
    
        if (userAnswer1 === "russell" || userAnswer1 === "russell blvd"){
            console.log("correct!");
            sealDesc.innerHTML = "Civic Engagement Panel - This panel reflects the civic engagement from the community, with the city hall features and voting movements shown.";
            puzzleDesc.innerHTML = "This puzzle, named Townhall, shows the relocation of the Town Hall in Davis. The current building used to be a school.";
            document.getElementById("seal_container").className = "showing";
            document.getElementById("seal").src = seals[11];
            document.getElementById("puzzle10").className = "hidden";

            setTimeout(function(){
                document.getElementById("seal_container").className = "hidden";
                document.getElementById("puzzle11").className = "layer showing";
                body.style.backgroundImage = "url(images/bg/bg_12.jpg)";
            },5000);
        }
        else{
            alert('Your answer is wrong. Try again!\n View "Hints" if needed.');
        }
    }

    //twelfth puzzle, memory game
    function f12game(){
    
        sealDesc.innerHTML = "Outer Ring - This features flora and fauna native to the Putah Creek region, including birds, beavers, trout, and salmon. It also shows the flow of the creek.";
        puzzleDesc.innerHTML = "This puzzle, named Memory, shows the native flora and fauna of this region as mentioned by the Patwin creation stories.";
        document.getElementById("seal_container").className = "showing";
        document.getElementById("seal").src = seals[12];
        document.getElementById("puzzle11").className = "hidden";

        setTimeout(function(){
            document.getElementById("reward").innerHTML = "All Rewards Acquired!";
            sealDesc.innerHTML = 'Here is the full <a href="https://www.cityofdavis.org/city-hall/city-manager-s-office/arts-culture/davis-centennial-seal">centennial seal of Davis</a>, created by Susan Shelton.';
            puzzleDesc.innerHTML = "You've reached the end. Thank you for playing!";
            document.getElementById("seal").src = seals[0];
        },5000);
    }

})();