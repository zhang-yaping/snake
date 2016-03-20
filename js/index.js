window.onload=function(){
 var snake=document.getElementById('snake');
 snake.style.backgroundSize='cover';
var SNAKEROW=20;
var RIGHT=39,LEFT=37,UP=38,DOWN=40;
var defaultDirection=RIGHT;
for(var i=0;i<SNAKEROW;i++){
  for(var j=0;j<SNAKEROW;j++){
  var ge=document.createElement('div');
  ge.setAttribute('class','block');
  ge.setAttribute('id',i+'+'+j);
  snake.appendChild(ge);
  }
}
var snake=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
(function(){
  for(var i=0;i<snake.length;i++){
    document.getElementById(snake[i].x+'+'+snake[i].y).style.background='#00F50A';
  }
})();
var isiInSnake=function(aa,bb){
    for(var i=0;i<snake.length;i++){
        if(snake[i].x==aa&&snake[i].y==bb){
          return true;
          }
      }
       return false;
};
var dropfood=function(){
   var 
   x=Math.floor(Math.random()*SNAKEROW),
   y=Math.floor(Math.random()*SNAKEROW);
   if(snake.length==100){alert('你真牛逼！！');return;}
   while(isiInSnake(x,y)){
    x=Math.floor(Math.random()*SNAKEROW),
    y=Math.floor(Math.random()*SNAKEROW);
   }
   document.getElementById(x+'+'+y).style.background='yellow';
   return {x:x,y:y};
};
var food=dropfood();
var zou=function(){
  var last=snake.length-1,newHead,weiba;
      if(defaultDirection==RIGHT){
        newHead={x:snake[last].x , y:snake[last].y+1};
      }
      if(defaultDirection==LEFT){
        newHead={x:snake[last].x , y:snake[last].y-1};
      }
        if(defaultDirection==DOWN){
        newHead={x:snake[last].x+1, y:snake[last].y};
      }
        if(defaultDirection==UP){
        newHead={x:snake[last].x-1, y:snake[last].y};
      }
        if(newHead.x>=SNAKEROW||newHead.x<0||newHead.y>=SNAKEROW||newHead.y<0){
        alert('撞死了');
        clearInterval(zouqi);
        return null;
      }
      if(isiInSnake(newHead.x,newHead.y)){
        alert('逗逼，咬到自己了');
        clearInterval(zouqi);
        return null;
      } 
      if(newHead.x==food.x&&newHead.y==food.y){
       snake.push(newHead);                                                                                                                                                       
       document.getElementById(food.x+'+'+food.y).style.backgroundColor='#00F50A';
       food=dropfood();
        return ;
      } 
      weiba=snake.shift(); 
      snake.push(newHead);                                                                                                                                                       
      document.getElementById(weiba.x+'+'+weiba.y).style.backgroundColor='';
      document.getElementById(newHead.x+'+'+newHead.y).style.backgroundColor='#00F50A';
    };
 document.onkeydown=function(e){
  e.preventDefault();
       var dds=e.keyCode;
       if(Math.abs(dds-defaultDirection)!==2){
        defaultDirection=dds;
       }
  };
  var play=document.getElementById('play');
  var zhanting=document.getElementById('zhanting');
  var zouqi;
  play.onclick=function(){
    zouqi=setInterval(zou,200);
  }
 zhanting.onclick=function(){
  clearInterval(zouqi);
 }
	//while循环的一种方法
	// var isKongZuoWei=function(x,y){
	// 	if(x==0&&y==0){
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	// }
	// var dianming=function(){
	// 	var x=Math.floor(Math.random()*5);
	// 	var y=Math.floor(Math.random()*10);
	// 	while(x==2&&y==0){
	// 		x=Math.floor(Math.random()*5),
	// 		y=Math.floor(Math.random()*10);
	// 	}
	// 	return{x:x,y:y};
	// }
	// console.log(dianming());


// 	var da=[{a:1,b:2},{a:3,b:5},{a:5,b:4}];
// 	var aaa=function(x,y){
//        for(var i=0;i<da.length;i++ ){
//        	if(da[i].a==x&&da[i].b==y){
//        		return true;
//        	}
//      }
//      return false;
//  };
// console.log(aaa(3,5));

// var arr=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];

// arr.shift(arr[0]);
// var c={};
// c.x=0;
// c.y=3;
// arr.push(c);
// console.log(arr);
// var fn=function(){
// 	arr.shift();
// 	var c={};
// 	c.x=arr[arr.length-1].x;
// 	c.y=arr[arr.length-1].y+1;
// 	arr.push(c);
// };
// console.log(fn())


};