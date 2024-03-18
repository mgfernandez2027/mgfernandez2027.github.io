var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
var block4 = document.getElementById("block4");
var block1copy = document.getElementById("block1copy");
var block2copy = document.getElementById("block2copy");
var block3copy = document.getElementById("block3copy");
var block4copy = document.getElementById("block4copy");
var block1copy2 = document.getElementById("block1copy2");
var block2copy2 = document.getElementById("block2copy2");
var block3copy2 = document.getElementById("block3copy2");
var block4copy2 = document.getElementById("block4copy2");

var blockTop1 = parseInt(window.getComputedStyle(block1).getPropertyValue("top"));
    var blockTop2 = parseInt(window.getComputedStyle(block2).getPropertyValue("top"));
    var blockTop3 = parseInt(window.getComputedStyle(block3).getPropertyValue("top"));
    var blockTop4 = parseInt(window.getComputedStyle(block4).getPropertyValue("top"));
    var blockTop1copy = parseInt(window.getComputedStyle(block1copy).getPropertyValue("top"));
    var blockTop2copy = parseInt(window.getComputedStyle(block2copy).getPropertyValue("top"));
    var blockTop3copy = parseInt(window.getComputedStyle(block3copy).getPropertyValue("top"));
    var blockTop4copy = parseInt(window.getComputedStyle(block4copy).getPropertyValue("top"));
    var blockTop1copy2 = parseInt(window.getComputedStyle(block1copy2).getPropertyValue("top"));
    var blockTop2copy2 = parseInt(window.getComputedStyle(block2copy2).getPropertyValue("top"));
    var blockTop3copy2 = parseInt(window.getComputedStyle(block3copy2).getPropertyValue("top"));
    var blockTop4copy2 = parseInt(window.getComputedStyle(block4copy2).getPropertyValue("top"));

var gameStarted = false;
var gameLost = false;

var hit1 = false;
var hit2 = false;
var hit3 = false;
var hit4 = false;
var hit1c = false;
var hit2c = false;
var hit3c = false;
var hit4c = false;
var hit1cc = false;
var hit2cc = false;
var hit3cc = false;
var hit4cc = false;

var song2 = document.getElementById('song2');


function moveBlock1(){
        block1.classList.toggle('move');
        setTimeout(function(){
            block1.style.transition = "none";
            block1.classList.toggle('move');
            block1.classList.toggle('back');   
            setTimeout(function(){
                block1.classList.toggle('back');
                block1.style.transition = "top 1.5s linear";
                hit1 = false
            }, 100);
        }, 1569);
    }
    
    function moveBlock2(){
        block2.classList.toggle('move');
        setTimeout(function(){
            block2.style.transition = "none";
            block2.classList.toggle('move');
            block2.classList.toggle('back');   
            setTimeout(function(){
                block2.classList.toggle('back');
                block2.style.transition = "top 1.5s linear";
                hit2 = false
            }, 100);
        }, 1569);
    }
    
    function moveBlock3(){
        block3.classList.toggle('move');
        setTimeout(function(){
            block3.style.transition = "none";
            block3.classList.toggle('move');
            block3.classList.toggle('back');   
            setTimeout(function(){
                block3.classList.toggle('back');
                block3.style.transition = "top 1.5s linear";
                hit3 = false
            }, 100);
        }, 1569);
    }
    
    function moveBlock4(){
        block4.classList.toggle('move');
        setTimeout(function(){
            block4.style.transition = "none";
            block4.classList.toggle('move');
            block4.classList.toggle('back');   
            setTimeout(function(){
                block4.classList.toggle('back');
                block4.style.transition = "top 1.5s linear";
                hit4 = false
            }, 100);
        }, 1569);
    }
    
    function moveBlock1Copy(){
        block1copy.classList.toggle('move');
        setTimeout(function(){
            block1copy.style.transition = "none";
            block1copy.classList.toggle('move');
            block1copy.classList.toggle('back');   
            setTimeout(function(){
                block1copy.classList.toggle('back');
                block1copy.style.transition = "top 1.5s linear";
                hit1c=false
            }, 100);
        }, 1569);
    }
    
    function moveBlock2Copy(){
        block2copy.classList.toggle('move');
        setTimeout(function(){
            block2copy.style.transition = "none";
            block2copy.classList.toggle('move');
            block2copy.classList.toggle('back');   
            setTimeout(function(){
                block2copy.classList.toggle('back');
                block2copy.style.transition = "top 1.5s linear";
                hit2c=false
            }, 100);
        }, 1569);
    }
    
    function moveBlock3Copy(){
        block3copy.classList.toggle('move');
        setTimeout(function(){
            block3copy.style.transition = "none";
            block3copy.classList.toggle('move');
            block3copy.classList.toggle('back');   
            setTimeout(function(){
                block3copy.classList.toggle('back');
                block3copy.style.transition = "top 1.5s linear";
                hit3c=false
            }, 100);
        }, 1569);
    }
    
    function moveBlock4Copy(){
        block4copy.classList.toggle('move');
        setTimeout(function(){
            block4copy.style.transition = "none";
            block4copy.classList.toggle('move');
            block4copy.classList.toggle('back');   
            setTimeout(function(){
                block4copy.classList.toggle('back');
                block4copy.style.transition = "top 1.5s linear";
                hit4c=false
            }, 100);
        }, 1569);
    }    
    
    function moveBlock1Copy2(){
        block1copy2.classList.toggle('move');
        setTimeout(function(){
            block1copy2.style.transition = "none";
            block1copy2.classList.toggle('move');
            block1copy2.classList.toggle('back');   
            setTimeout(function(){
                block1copy2.classList.toggle('back');
                block1copy2.style.transition = "top 1.5s linear";
                hit1cc=false
            }, 100);
        }, 1569);
    }
    
    function moveBlock2Copy2(){
        block2copy2.classList.toggle('move');
        setTimeout(function(){
            block2copy2.style.transition = "none";
            block2copy2.classList.toggle('move');
            block2copy2.classList.toggle('back');   
            setTimeout(function(){
                block2copy2.classList.toggle('back');
                block2copy2.style.transition = "top 1.5s linear";
                hit2cc=false
            }, 100);
        }, 1569);
    }
    
    function moveBlock3Copy2(){
        block3copy2.classList.toggle('move');
        setTimeout(function(){
            block3copy2.style.transition = "none";
            block3copy2.classList.toggle('move');
            block3copy2.classList.toggle('back');   
            setTimeout(function(){
                block3copy2.classList.toggle('back');
                block3copy2.style.transition = "top 1.5s linear";
                hit3cc=false
            }, 100);
        }, 1569);
    }
    
    function moveBlock4Copy2(){
        block4copy2.classList.toggle('move');
        setTimeout(function(){
            block4copy2.style.transition = "none";
            block4copy2.classList.toggle('move');
            block4copy2.classList.toggle('back');   
            setTimeout(function(){
                block4copy2.classList.toggle('back');
                block4copy2.style.transition = "top 1.5s linear";
                hit4cc=false
            }, 100);
        }, 1569);
    }

function playSong2(){
    song2.play();
}

function pauseSong2(){
    song2.pause();
}

function play2(){
    
    gameStarted = true
    playSong2();
    
    setTimeout(moveBlock1, 740);
    setTimeout(moveBlock1Copy, 1100);
    setTimeout(moveBlock2, 1760);
    setTimeout(moveBlock4, 2100);
    setTimeout(moveBlock3, 2640);
    setTimeout(moveBlock4Copy, 3440);    
    setTimeout(moveBlock1, 4050);
    setTimeout(moveBlock2, 4590);
    setTimeout(moveBlock3, 5100);
    setTimeout(moveBlock4, 5700);
    setTimeout(moveBlock1Copy, 6000);
    setTimeout(moveBlock2, 7400);
    setTimeout(moveBlock3, 7600);
    setTimeout(moveBlock1, 8900);
    setTimeout(moveBlock4, 9200);
    setTimeout(moveBlock3, 9400);
    setTimeout(moveBlock1Copy, 9900);
    setTimeout(moveBlock4Copy, 10250);
    setTimeout(moveBlock2Copy, 10550);
    setTimeout(moveBlock3Copy, 10750);
    setTimeout(moveBlock4, 11050);
    setTimeout(moveBlock1, 12100);
    setTimeout(moveBlock4Copy, 12500);
    setTimeout(moveBlock2, 12900);
    setTimeout(moveBlock1Copy, 14150);
    setTimeout(moveBlock2Copy, 14450);
    setTimeout(moveBlock3, 16000);
    setTimeout(moveBlock4, 16400);
    setTimeout(moveBlock1, 16950);
    setTimeout(moveBlock2, 17100);
    setTimeout(moveBlock1Copy, 17700);
    setTimeout(moveBlock4, 18200);
    setTimeout(moveBlock3, 18350);
    setTimeout(moveBlock4Copy, 18900);
    setTimeout(moveBlock2Copy, 19300);
    setTimeout(moveBlock1, 19600);
    setTimeout(moveBlock2, 20000);
    setTimeout(moveBlock4, 21250);
    setTimeout(moveBlock2Copy, 21500);
    setTimeout(moveBlock3, 22900);
    setTimeout(moveBlock2Copy2, 23200);
    setTimeout(moveBlock1, 23350);
    setTimeout(moveBlock4, 24100);
    setTimeout(moveBlock3Copy, 24250);
    setTimeout(moveBlock2, 24900);
    setTimeout(moveBlock3Copy2, 25200);
    setTimeout(moveBlock1, 25500);
    setTimeout(moveBlock4Copy, 25700);
    setTimeout(moveBlock1Copy, 26100);
    setTimeout(moveBlock2Copy, 26250);
    setTimeout(moveBlock3, 27000);
    setTimeout(moveBlock4, 28100);
    setTimeout(moveBlock2, 28500);
    setTimeout(moveBlock3, 30000);
    setTimeout(moveBlock1, 30400);
    setTimeout(moveBlock3Copy, 30800);
    setTimeout(moveBlock2Copy, 30950);
    setTimeout(moveBlock4, 31350);
    setTimeout(moveBlock1Copy, 31800);
    setTimeout(moveBlock4Copy, 32050);
    setTimeout(moveBlock1, 32350);
    setTimeout(moveBlock3, 33900);
    setTimeout(moveBlock2, 34300);
    setTimeout(moveBlock4, 34700);
    setTimeout(moveBlock2Copy, 35100);
    setTimeout(moveBlock3Copy, 35250);
    setTimeout(moveBlock2Copy2, 36000);
    setTimeout(moveBlock1, 36150);
    setTimeout(moveBlock3, 36500);
    setTimeout(moveBlock1Copy, 37300);
    setTimeout(moveBlock3Copy, 37650);
    setTimeout(moveBlock2, 38250);
    setTimeout(moveBlock3Copy2, 38400);
    setTimeout(moveBlock4, 38550);
    setTimeout(moveBlock1, 38700);
    setTimeout(moveBlock2Copy, 39600);
    setTimeout(moveBlock4Copy, 39750);
    setTimeout(moveBlock3, 40050);
    setTimeout(moveBlock1, 40750);
    setTimeout(moveBlock1Copy, 41150);
    setTimeout(moveBlock4, 41650);
    setTimeout(moveBlock3Copy, 41850);
    setTimeout(moveBlock2, 42050);
    setTimeout(moveBlock1Copy2, 42350);
    setTimeout(moveBlock4Copy, 42950);
    setTimeout(moveBlock3Copy2, 43100);
    setTimeout(moveBlock3, 43700);
    setTimeout(moveBlock2, 44200);
    setTimeout(moveBlock4, 44350);
    setTimeout(moveBlock3Copy, 44500);
    setTimeout(moveBlock1Copy, 44650);
    setTimeout(moveBlock4Copy, 45100);
    setTimeout(moveBlock3Copy2, 45250);
    setTimeout(moveBlock2Copy, 45400);
    setTimeout(moveBlock4Copy2, 45550);
    setTimeout(moveBlock1Copy2, 45750);
    setTimeout(moveBlock1, 46250);
    setTimeout(moveBlock3, 46750);
    setTimeout(moveBlock2, 47250);
    setTimeout(moveBlock3Copy, 47650);
    setTimeout(moveBlock1Copy, 48350);
    setTimeout(moveBlock4, 48500);
    setTimeout(moveBlock2Copy, 48650);
    setTimeout(moveBlock3Copy2, 48800);
    setTimeout(moveBlock1, 49000);
    setTimeout(moveBlock3, 49150);
    setTimeout(moveBlock2Copy2, 49750);
    setTimeout(moveBlock4Copy, 49900);
    setTimeout(moveBlock4Copy2, 50900);
    setTimeout(moveBlock2, 51300);
    setTimeout(moveBlock1Copy, 51700);
    setTimeout(moveBlock1Copy2, 52100);
    
    setTimeout(moveBlock4, 52500);
    setTimeout(moveBlock3, 52900);
    setTimeout(moveBlock2Copy, 53300);
    setTimeout(moveBlock4Copy, 53800);
    setTimeout(moveBlock1, 53950);
    setTimeout(moveBlock2Copy2, 56050);
    setTimeout(moveBlock3Copy, 56250);
    
    setTimeout(moveBlock2Copy2, 58250);
    setTimeout(moveBlock1Copy, 58950);
    setTimeout(moveBlock4, 59300);
    setTimeout(moveBlock3Copy2, 59600);
    
    setTimeout(function(){
        alert("CONGRATS! YOU WON!");
    }, 61000);
    

}


var counter = 0;
    
document.addEventListener('keydown', event => {
    
    
    blockTop1 = parseInt(window.getComputedStyle(block1).getPropertyValue("top"));
    blockTop2 = parseInt(window.getComputedStyle(block2).getPropertyValue("top"));
    blockTop3 = parseInt(window.getComputedStyle(block3).getPropertyValue("top"));
    blockTop4 = parseInt(window.getComputedStyle(block4).getPropertyValue("top"));
    blockTop1copy = parseInt(window.getComputedStyle(block1copy).getPropertyValue("top"));
    blockTop2copy = parseInt(window.getComputedStyle(block2copy).getPropertyValue("top"));
    blockTop3copy = parseInt(window.getComputedStyle(block3copy).getPropertyValue("top"));
    blockTop4copy = parseInt(window.getComputedStyle(block4copy).getPropertyValue("top"));
    blockTop1copy2 = parseInt(window.getComputedStyle(block1copy2).getPropertyValue("top"));
    blockTop2copy2 = parseInt(window.getComputedStyle(block2copy2).getPropertyValue("top"));
    blockTop3copy2 = parseInt(window.getComputedStyle(block3copy2).getPropertyValue("top"));
    blockTop4copy2 = parseInt(window.getComputedStyle(block4copy2).getPropertyValue("top"));
    
    var counterequate;
    
    checkLoser()
    
    if(event.key === "Enter"){
        play2();
    } else if(blockTop1 >= 450 && blockTop1 <= 800 && event.key === 'q'){
        counter++;
        counterequate = counter;
        document.getElementById('count').innerHTML = "Score: " + counterequate;
        hit1=true;
        
    } else if(blockTop2 >= 450 && blockTop2 <= 800 && event.key === 'w'){
        counter++;
        counterequate = counter;
        document.getElementById('count').innerHTML = "Score: " + counterequate;
        hit2=true;
    } else if(blockTop3 >= 450 && blockTop3 <= 800 && event.key === 'o'){
        counter++;
        counterequate = counter;
        document.getElementById('count').innerHTML = "Score: " + counterequate;
        hit3=true;
    } else if(blockTop4 >= 450 && blockTop4 <= 800 && event.key === 'p'){
        counter++;
        counterequate = counter;
        document.getElementById('count').innerHTML = "Score: " + counterequate;
        hit4=true;
    } else if(blockTop1copy >= 450 && blockTop1copy <= 800 && event.key === 'q'){
        counter++;
        counterequate = counter;
        document.getElementById('count').innerHTML = "Score: " + counterequate;
        hit1c=true
    } else if(blockTop2copy >= 450 && blockTop2copy <= 800 && event.key === 'w'){
        counter++;
        counterequate = counter;
        document.getElementById('count').innerHTML = "Score: " + counterequate;
        hit2c=true;
    } else if(blockTop3copy >= 450 && blockTop3copy <= 800 && event.key === 'o'){
        counter++;
        counterequate = counter;
        document.getElementById('count').innerHTML = "Score: " + counterequate;
        hit3c=true;
    } else if(blockTop4copy >= 450 && blockTop4copy <= 800 && event.key === 'p'){
        counter++;
        counterequate = counter;
        document.getElementById('count').innerHTML = "Score: " + counterequate;
        hit4c=true;
    } else if(blockTop1copy2 >= 450 && blockTop1copy2 <= 800 && event.key === 'q'){
        counter++;
        counterequate = counter;
        hit1cc=true
        document.getElementById('count').innerHTML = "Score: " + counterequate;
    } else if(blockTop2copy2 >= 450 && blockTop2copy2 <= 800 && event.key === 'w'){
        counter++;
        counterequate = counter;
        document.getElementById('count').innerHTML = "Score: " + counterequate;
        hit2cc=true;
    } else if(blockTop3copy2 >= 450 && blockTop3copy2 <= 800 && event.key === 'o'){
        counter++;
        counterequate = counter;
        document.getElementById('count').innerHTML = "Score: " + counterequate;
        hit3cc=true;
    } else if(blockTop4copy2 >= 450 && blockTop4copy2 <= 800 && event.key === 'p'){
        counter++;
        counterequate = counter;
        document.getElementById('count').innerHTML = "Score: " + counterequate;
        hit4cc=true;
    }else {
        pauseSong2();
        alert("GAME OVER");
        location.reload();
    }
});



function checkLoser(){
    
    
    
    blockTop1 = parseInt(window.getComputedStyle(block1).getPropertyValue("top"));
    blockTop2 = parseInt(window.getComputedStyle(block2).getPropertyValue("top"));
    blockTop3 = parseInt(window.getComputedStyle(block3).getPropertyValue("top"));
    blockTop4 = parseInt(window.getComputedStyle(block4).getPropertyValue("top"));
    blockTop1copy = parseInt(window.getComputedStyle(block1copy).getPropertyValue("top"));
    blockTop2copy = parseInt(window.getComputedStyle(block2copy).getPropertyValue("top"));
    blockTop3copy = parseInt(window.getComputedStyle(block3copy).getPropertyValue("top"));
    blockTop4copy = parseInt(window.getComputedStyle(block4copy).getPropertyValue("top"));
    blockTop1copy2 = parseInt(window.getComputedStyle(block1copy2).getPropertyValue("top"));
    blockTop2copy2 = parseInt(window.getComputedStyle(block2copy2).getPropertyValue("top"));
    blockTop3copy2 = parseInt(window.getComputedStyle(block3copy2).getPropertyValue("top"));
    blockTop4copy2 = parseInt(window.getComputedStyle(block4copy2).getPropertyValue("top"));
    
    console.log(block1.className)
    
    if(gameLost == false){
    
    if((blockTop1 > 800 && hit1 == false) || (blockTop2 > 800 && hit2 == false) || (blockTop3 > 800 && hit3 == false)  || (blockTop4> 800 && hit4 == false) || (blockTop1copy > 800 && hit1c == false) || (blockTop2copy > 800 && hit2c == false) || (blockTop3copy > 800 && hit3c == false)  || (blockTop4copy> 800 && hit4c == false) || (blockTop1copy2 > 800 && hit1cc == false) || (blockTop2copy2 > 800 && hit2cc == false) || (blockTop3copy2 > 800 && hit3cc == false)  || (blockTop4copy2> 800 && hit4cc == false)){
        pauseSong2();
        alert("GAME OVER");
        location.reload();
        gameLost = true;
    }
        
    }
}
    


function changeTheme(themeName) {
    switch(themeName) {

    case 'theme1':
        document.body.style.backgroundColor = '#ffffff';
        document.querySelector('.dropbtn').style.backgroundColor = '#ffffff';
        document.querySelector('.dropdown-content').style.backgroundColor = '#ffffff';
        document.querySelector('.dropbtn').style.borderColor = '#000000';
        document.querySelector('.dropdown-content').style.borderColor = '#000000';
        document.querySelector('#game').style.borderColor = '#000000';
        document.querySelector('#indicator').style.borderColor = '#000000';
        document.querySelector('#game').style.backgroundImage = 'url("t1.jpg")';
        document.querySelectorAll('*').forEach(element => {element.style.color = '#000000';});
        document.querySelector('#checkbar').style.backgroundColor = '#bfc9de';
        document.querySelector('#indicator').style.backgroundColor = '#bfc9de';
        document.body.style.fontFamily = 'Roboto Slab';
        var moveBlocks = document.querySelectorAll('[id^="block"]');
        moveBlocks.forEach(function(block) {
           block.style.backgroundColor = '#000000';
        });
        break;

    case 'theme2':
        document.body.style.backgroundColor = '#292929';
        document.querySelector('.dropbtn').style.backgroundColor = '#292929';
        document.querySelector('.dropdown-content').style.backgroundColor = '#292929';
        document.querySelector('.dropbtn').style.borderColor = '#ffffff';
        document.querySelector('.dropdown-content').style.borderColor = '#ffffff';
        document.querySelector('#game').style.borderColor = '#ffffff';
        document.querySelector('#indicator').style.borderColor = '#ffffff';
        document.querySelector('#game').style.backgroundImage = 'url("t2.avif")';
        document.querySelectorAll('*').forEach(element => {element.style.color = '#ffffff';});
        document.querySelector('#checkbar').style.backgroundColor = '#757679';
        document.querySelector('#indicator').style.backgroundColor = '#757679';
        document.body.style.fontFamily = 'Roboto Slab';
        var moveBlocks = document.querySelectorAll('[id^="block"]');
        moveBlocks.forEach(function(block) {
           block.style.backgroundColor = '#ffffff';
        });
        break;

    case 'theme3':
        document.body.style.backgroundColor = '#0d1222';
        document.querySelector('.dropbtn').style.backgroundColor = '#0d1222';
        document.querySelector('.dropdown-content').style.backgroundColor = '#0d1222';
        document.querySelector('.dropbtn').style.borderColor = '#a6cbd8';
        document.querySelector('.dropdown-content').style.borderColor = '#a6cbd8';
        document.querySelector('#game').style.borderColor = '#a6cbd8';
        document.querySelector('#indicator').style.borderColor = '#a6cbd8';
        document.querySelector('#game').style.backgroundImage = 'url("t3.jpg")';
        document.querySelectorAll('*').forEach(element => {element.style.color = '#a6cbd8';});
        document.querySelector('#checkbar').style.backgroundColor = '#0a0a33';
        document.querySelector('#indicator').style.backgroundColor = '#0a0a33';
        document.body.style.fontFamily = 'Share Tech Mono';
        var moveBlocks = document.querySelectorAll('[id^="block"]');
        moveBlocks.forEach(function(block) {
           block.style.backgroundColor = '#a6cbd8';
        });
        break;

    case 'theme4':
        document.body.style.backgroundColor = '#dbb59b';
        document.querySelector('.dropbtn').style.backgroundColor = '#dbb59b';
        document.querySelector('.dropdown-content').style.backgroundColor = '#dbb59b';
        document.querySelector('.dropbtn').style.borderColor = '#381e1e';
        document.querySelector('.dropdown-content').style.borderColor = '#381e1e';
        document.querySelector('#game').style.borderColor = '#381e1e';
        document.querySelector('#indicator').style.borderColor = '#381e1e';
        document.querySelector('#game').style.backgroundImage = 'url("t4.jpg")';
        document.querySelectorAll('*').forEach(element => {element.style.color = '#381e1e';});
        document.querySelector('#checkbar').style.backgroundColor = '#9b725f';
        document.querySelector('#indicator').style.backgroundColor = '#9b725f';
        document.body.style.fontFamily = 'Merriweather';
        var moveBlocks = document.querySelectorAll('[id^="block"]');
        moveBlocks.forEach(function(block) {
           block.style.backgroundColor = '#381e1e';
        });
        break;

    case 'theme5':
        document.body.style.backgroundColor = '#bdc499';
        document.querySelector('.dropbtn').style.backgroundColor = '#bdc499';
        document.querySelector('.dropdown-content').style.backgroundColor = '#bdc499';
        document.querySelector('.dropbtn').style.borderColor = '#2c4d43';
        document.querySelector('.dropdown-content').style.borderColor = '#2c4d43';
        document.querySelector('#game').style.borderColor = '#2c4d43';
        document.querySelector('#indicator').style.borderColor = '#2c4d43';
        document.querySelector('#game').style.backgroundImage = 'url("t5.jpg")';
        document.querySelectorAll('*').forEach(element => {element.style.color = '#2c4d43';});
        document.querySelector('#checkbar').style.backgroundColor = '#77a88e';
        document.querySelector('#indicator').style.backgroundColor = '#77a88e';
        document.body.style.fontFamily = 'Madimi One';
        var moveBlocks = document.querySelectorAll('[id^="block"]');
        moveBlocks.forEach(function(block) {
            block.style.backgroundColor = '#2c4d43';
        });
        break;

    default:
        document.body.style.backgroundColor = '#ffffff';
        document.querySelector('.dropbtn').style.backgroundColor = '#ffffff';
        document.querySelector('.dropdown-content').style.backgroundColor = '#ffffff';
        document.querySelector('.dropbtn').style.borderColor = '#000000';
        document.querySelector('.dropdown-content').style.borderColor = '#000000';
        document.querySelector('#game').style.borderColor = '#000000';
        document.querySelector('#indicator').style.borderColor = '#000000';
        document.querySelector('#game').style.backgroundImage = 'url("t1.jpg")';
        document.querySelectorAll('*').forEach(element => {element.style.color = '#000000';});
        document.querySelector('#checkbar').style.backgroundColor = '#bfc9de';
        document.querySelector('#indicator').style.backgroundColor = '#bfc9de';
        document.body.style.fontFamily = 'Roboto Slab';
        var moveBlocks = document.querySelectorAll('[id^="block"]');
        moveBlocks.forEach(function(block) {
           block.style.backgroundColor = '#000000';
        });
    }
  }