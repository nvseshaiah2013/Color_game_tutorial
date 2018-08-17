var colors =[]
var sq = document.querySelectorAll('.square');
var rg = document.querySelector('#rg');
var he = document.getElementById('heading');
var mess = document.getElementById("message");
var bdy = document.getElementsByTagName('body');
var newGame  = document.querySelectorAll('button');
var pickedColor,boolval=1;
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
easy.addEventListener('click',function()
{
    easy.classList.remove('selected');
    hard.classList.remove('selected');
    this.classList.add('selected');
    boolval=0;
    for(var i=3;i<6;i++)
    sq[i].style.visibility = 'hidden';
    init(3);
});
hard.addEventListener('click',function()
{
    easy.classList.remove('selected');
    hard.classList.remove('selected');
    this.classList.add('selected');
    boolval=1;
    for(var i=3;i<6;i++)
    sq[i].style.visibility ='visible';
    init(6);
});
function init(num)
{
    he.style.background = 'linear-gradient(90deg, rgba(194, 28, 13, 0.829), rgba(214, 228, 24, 0.856), rgba(100, 100, 100, 1))';
    setColors();
    pickedColor=pickColor(boolval);
    rg.textContent = pickedColor;
    Game(num);
    mess.textContent ='';
}
init(6);
newGame[0].addEventListener('click',function()
{
    easy.classList.remove('selected');
    hard.classList.remove('selected');
    hard.classList.add('selected');
    for(var i=3;i<6;i++)
        sq[i].style.visibility = 'visible';
    return init(6);
});
addEventListener()
function Game(num){
for(var i=0;i<num;i++)
{
    //Adding Colors
    sq[i].style.backgroundColor = colors[i];
    //Adding Event Listeners
    sq[i].addEventListener('click',function()
        {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor)
            {
                mess.textContent = 'Correct';
                document.getElementById("heading").style.background = pickedColor;
                changeColor(clickedColor);
            }
            else
            {
                this.style.backgroundColor = "rgb(100, 100, 100)";
                mess.textContent = "Try Again";
            }
        });
}
}
function changeColor(color)
{
    for(var i=0;i<6;i++)
    {
        sq[i].style.backgroundColor = color;
    }
}

function setColors()
{
    for(var i=0;i<6;i++)
    colors[i]=randomColor();
}
function randomColor()
{
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r +", " + g +", "+ b +")";
}
function pickColor(val)
{
    var num;
    if(val===1)
    num=Math.floor(Math.random()*6);
    else
    num= Math.floor(Math.random()*3);
    return colors[num];
}