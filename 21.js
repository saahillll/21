var card=document.getElementById("cards")
var total=document.getElementById("total")
var msg=document.getElementById("msg")
var comp=document.getElementById("comp")
var pcard=[]
var sum=0
var sum1=0
var player=prompt("Enter your name")
var amount=prompt("Enter amount")
var win=false
var game=true
var startG=false

function getRand(){
    
    var r=Math.floor(Math.random()*13)+1
    if(r>10){
        return 10
    }
    else if(r==1){
        return 11
    }
    else
    return r
}
function start(){
    startG=true
    var n1=getRand()
    var n2=getRand()
    sum=n1+n2
    pcard=[n1,n2]

    var c1=getRand()
    var c2=getRand()
    sum1=c1+c2
    // card.innerHTML="Cards :"
    //if above line is not there it will not concat agaian n again
    // pcard=[n1,n2]
    // for(var i=0;i<pcard.length;i++){
    //     card.innerHTML+=`  ${pcard[i]}  `      
    // }
    // // total.innerHTML="Total :"
    // total.innerHTML=`Total : ${sum}`

    // if(sum<21){
    //     msg.innerHTML="Do you want Another card?<br> Press New Card Button  <br> to draw a new one"
    // }
    // else if(sum==21){
    //     msg.innerHTML="You Won the game !!! "
    // }
    // else{
    //     msg.innerHTML="Sorry ! you lose the game."
    // }
    // render(n1,n2) foolish logic
    render() //callback function
    
}
// function render(n1,n2){
function render(){
    card.innerHTML="Cards :"
    for(var i=0;i<pcard.length;i++){
        card.innerHTML+=`  ${pcard[i]}  `      
    }
 
    total.innerHTML=`Total : ${sum}`
    comp.innerHTML=`Computer Total : ${sum1}`
    
    if(sum<21){
        msg.innerHTML="Do you want Another card?"
    }
    else if(sum==21){
        amount*=2
        msg.innerHTML=`Congress ${player}! You Won Rs.${amount}`
        // msg.fontcolor="green"s
        win=true
        
    }
    else{
        msg.innerHTML=`Sorry ${player}! you lose the game.Tere Rs.${amount} gaye`
        game=false
    }
}
function newCard(){
    //logic 2
    if(win==false && game==true && startG==true)
    {
    var num=getRand()
    pcard.push(num)
    sum+=num;
    
    while(sum1<17){
        
        var cnum=getRand()
        sum1+=cnum
    }
    if( sum<20){
    render()
    }
    if(sum<21 && sum>16 ){
        
        winner()
    } 
    }
    
   //logic 1
    // var random=Math.floor(Math.random()*12)
    // card.innerHTML="Cards :"

    // while(sum<22)
    // pcard=[n1,n2,random]
    // for(var i=0;i<pcard.length;i++){
    //     card.innerHTML+=`${pcard[i]}  ` 
    //     sum+=random     
    // }
    
    // total.innerHTML=`Total : ${sum}`
    // if(sum<21){
    //     msg.innerHTML="Do you want Another card?<br> Press New Card Button  <br> to draw a new one"
    // }
    // else if(sum==21){
    //     msg.innerHTML="You Won the game !!! "
    // }
    // else{
    //     msg.innerHTML="Sorry ! you lose the game."
    // }
}
function winner(){
    if(startG==true){
        while(sum1<17 && sum1<sum){
            var cnum=getRand()
            sum1+=cnum
        }
        comp.innerHTML=`Computer Total: ${sum1}`
        if(sum>21 || (sum1<=21 && sum1>sum)){
            msg.innerHTML=`Sorry ${player}! you lose the game.Tere Rs.${amount} gaye`
        }
        else if(sum1==sum){
            msg.innerHTML="Its a Tie ... "
        }
        else{
            amount*=2
            msg.innerHTML=`Congress ${player}! You Won ${amount}`
        }
        game=false
    }
}