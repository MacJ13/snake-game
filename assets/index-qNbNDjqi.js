var w=Object.defineProperty;var S=(a,e,t)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var r=(a,e,t)=>(S(a,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const b="/snake-game/images/snake/apple.png",I="/snake-game/images/snake/head_up.png",P="/snake-game/images/snake/head_down.png",L="/snake-game/images/snake/head_left.png",C="/snake-game/images/snake/head_right.png",x="/snake-game/images/snake/tail_up.png",R="/snake-game/images/snake/tail_down.png",v="/snake-game/images/snake/tail_left.png",_="/snake-game/images/snake/tail_right.png",B="/snake-game/images/snake/body_vertical.png",M="/snake-game/images/snake/body_horizontal.png",T="/snake-game/images/snake/body_bottomleft.png",H="/snake-game/images/snake/body_bottomright.png",U="/snake-game/images/snake/body_topleft.png",A="/snake-game/images/snake/body_topright.png",F=a=>new Promise(e=>{const t=new Image;t.src=a.path,t.id=a.id,t.onload=()=>{e(t)}}),D=a=>a.reduce((e,t)=>(e[t.id]=t,e),{}),V=async a=>Promise.all(a.map(e=>F(e))),O=[{id:"food",path:b},{id:"headUp",path:I},{id:"headDown",path:P},{id:"headLeft",path:L},{id:"headRight",path:C},{id:"tailUp",path:x},{id:"tailDown",path:R},{id:"tailLeft",path:v},{id:"tailRight",path:_},{id:"bodyVertical",path:B},{id:"bodyHorizontal",path:M},{id:"bodyBottomLeft",path:T},{id:"bodyBottomRight",path:H},{id:"bodyTopLeft",path:U},{id:"bodyTopRight",path:A}],g=400,l=20,q=125;var s=(a=>(a.Up="up",a.Down="down",a.Left="left",a.Right="right",a))(s||{}),h=(a=>(a.Playing="playing",a.Start="start",a.End="end",a))(h||{});function k(){return Math.floor(Math.random()*g/l)*l}class z{constructor(){r(this,"pos");this.pos={x:0,y:0}}set position(e){this.pos=e}get position(){return this.pos}}class G{constructor(){r(this,"body",[]);r(this,"size",3);r(this,"startPosition",{x:200,y:200});this.initSnakePositions()}initSnakePositions(){this.body.length=0;for(let e=0;e<this.size;e++){const t=this.startPosition.x-e*l,n=this.startPosition.y;this.body[e]={x:t,y:n,direction:s.Right}}}get allBody(){return this.body}getLastPosition(){return this.body.pop()}addFirstPosition(e){this.body.unshift(e)}addLastPosition(e){this.body.push(e)}get bodyCollision(){const[e,...t]=this.body;return t.every(n=>e.x!==n.x||e.y!==n.y)}get borderCollision(){const e=this.body[0];return e.x<0||e.y<0||e.x>=g||e.y>=g}}class N{constructor(){r(this,"snake",new G);r(this,"food",new z);r(this,"_state",{dx:l,dy:0,direction:s.Right,score:0,changeDirection:!1,status:h.Start});this.generateRandomFoodPosition()}checkAvailablePosition(e,t){return this.snake.allBody.find(n=>n.x===e&&n.y===t)}get isSnakeCoveringFood(){return this.foodPosition.x===this.snakeHead.x&&this.foodPosition.y===this.snakeHead.y}get newSnakePosition(){const e=this.snakeHead.x+this.state.dx,t=this.snakeHead.y+this.state.dy;return{x:e,y:t,direction:this._state.direction}}increaseScore(){this.state.score++}initGameState(){this._state={dx:l,dy:0,direction:s.Right,score:0,changeDirection:!1,status:h.Start},this.snake.initSnakePositions(),this.generateRandomFoodPosition()}move(e){const t=this.snake.getLastPosition();this.snake.addFirstPosition(this.newSnakePosition),this.isSnakeCoveringFood&&(this.snake.addLastPosition(t),this.generateRandomFoodPosition(),this.increaseScore(),e(this.score))}generateRandomFoodPosition(){let e=k(),t=k();this.checkAvailablePosition(e,t)?this.generateRandomFoodPosition():this.food.position={x:e,y:t}}checkStatus(e){return this.isPlayingStatus&&e==="Enter"}settlePlayingStatus(){this.state.status=h.Playing}settleEndStatus(){this.state.status=h.End}blockChangingDirection(){this.state.changeDirection=!1}changeSnakeDirection(e){this.state.status===h.Start||this.state.status===h.End||this.state.changeDirection||(this.state.changeDirection=!0,e==="ArrowUp"&&this.state.dy===0?(this.state.dy=-l,this.state.dx=0,this.state.direction=s.Up):e==="ArrowRight"&&this.state.dx===0?(this.state.dy=0,this.state.dx=l,this.state.direction=s.Right):e==="ArrowDown"&&this.state.dy===0?(this.state.dy=l,this.state.dx=0,this.state.direction=s.Down):e==="ArrowLeft"&&this.state.dx===0&&(this.state.dy=0,this.state.dx=-l,this.state.direction=s.Left))}get snakeHead(){return this.snake.allBody[0]}get snakeBody(){return this.snake.allBody}get snakeTail(){const e=this.snake.allBody.length-1;return this.snake.allBody[e]}get snakeRestBody(){return this.snake.allBody.slice(1)}get foodPosition(){return this.food.position}get state(){return this._state}get collision(){return this.snake.borderCollision||!this.snake.bodyCollision}get isPlayingStatus(){return this.state.status===h.Start||this.state.status===h.End}get score(){return this.state.score}get playingStatus(){return this.state.status===h.Playing}}class K{constructor(){r(this,"then",Date.now());r(this,"now",0)}run(e){this.now=Date.now(),this.now-this.then>q&&(this.then=this.now,e())}requestAnimationFrame(e){window.requestAnimationFrame(e)}}class u{constructor(){r(this,"rootEl",document.querySelector("#app"))}static onKeyDown(e){document.addEventListener("keydown",e)}renderEl(e){typeof e=="string"?this.rootEl.insertAdjacentHTML("beforeend",e):this.rootEl.appendChild(e)}}class Y extends u{constructor(){super();r(this,"canvasEl");r(this,"context");r(this,"snakeCurrentImageEl",new Image);r(this,"imageSnakeEl",{});this.canvasEl=this.createCanvasElement(),this.context=this.createCanvasContext(),this.renderEl(this.canvasEl)}async createBoard(t){const n=await V(t),i=D(n);this.imageSnakeEl=i}createCanvasElement(){const t=document.createElement("canvas");return t.id="canvas",t.width=g,t.height=g,t}createCanvasContext(){return this.canvasEl.getContext("2d")}drawElement(t,n,i){this.context.drawImage(t,n,i,l,l)}drawHead(t){t.direction===s.Up?this.snakeCurrentImageEl=this.imageSnakeEl.headUp:t.direction===s.Right?this.snakeCurrentImageEl=this.imageSnakeEl.headRight:t.direction===s.Down?this.snakeCurrentImageEl=this.imageSnakeEl.headDown:t.direction===s.Left&&(this.snakeCurrentImageEl=this.imageSnakeEl.headLeft),this.drawElement(this.snakeCurrentImageEl,t.x,t.y)}setTailImage(t){t===s.Up?this.snakeCurrentImageEl=this.imageSnakeEl.tailDown:t===s.Right?this.snakeCurrentImageEl=this.imageSnakeEl.tailLeft:t===s.Down?this.snakeCurrentImageEl=this.imageSnakeEl.tailUp:t===s.Left&&(this.snakeCurrentImageEl=this.imageSnakeEl.tailRight)}setBodyImage(t){switch(t){case s.Right:case s.Left:this.snakeCurrentImageEl=this.imageSnakeEl.bodyHorizontal;break;case s.Up:case s.Down:this.snakeCurrentImageEl=this.imageSnakeEl.bodyVertical;break}}setCornerImage(t,n){switch(!0){case(n===s.Up&&t===s.Right):case(n===s.Left&&t===s.Down):this.snakeCurrentImageEl=this.imageSnakeEl.bodyTopLeft;break;case(n===s.Down&&t===s.Right):case(n===s.Left&&t===s.Up):this.snakeCurrentImageEl=this.imageSnakeEl.bodyBottomLeft;break;case(n===s.Right&&t===s.Down):case(n===s.Up&&t===s.Left):this.snakeCurrentImageEl=this.imageSnakeEl.bodyTopRight;break;case(n===s.Right&&t===s.Up):case(n===s.Down&&t===s.Left):this.snakeCurrentImageEl=this.imageSnakeEl.bodyBottomRight;break}}drawFood(t,n){this.drawElement(this.imageSnakeEl.food,t,n)}drawSnake(t){const n=t[0];for(let i=1;i<t.length;i++){const o=t[i],c=t[i-1];i===t.length-1?this.setTailImage(c.direction):o.direction===c.direction?this.setBodyImage(o.direction):this.setCornerImage(o.direction,c.direction),this.drawElement(this.snakeCurrentImageEl,o.x,o.y)}this.drawHead(n)}clearBoard(){this.context.clearRect(0,0,g,g)}}class j extends u{constructor(){super();r(this,"resultEl");this.renderHeaderElement("Snake Game"),this.resultEl=document.querySelector("#result")}renderHeaderElement(t){const n=`
    <div id="header">
        <h1 id="title">${t}</h1>
        <h2 id="score">Score: <span id="result">0</span></h2>
    </div>
    `;this.renderEl(n)}updateScore(t){this.resultEl.innerHTML=t.toString()}}class X extends u{constructor(){super();r(this,"modalEl");this.modalEl=this.createModalElement(),this.renderEl(this.modalEl)}createModalElement(){const t=document.createElement("div");return t.id="modal",t.innerHTML=this.renderModalInfo(),t}renderModalInfo(){return"<div id='modal__info'>Press <span id='enter'>enter</span> to start the game</div>"}renderModalResult(t){return`
      <div id='modal__info'>
        Your final score is ${t}.
        <br/>
        Press <span id="enter">enter</span> to try again.  
      </div>
    `}hideModalElement(){this.modalEl.classList.add("transparent"),setTimeout(()=>{this.modalEl.classList.add("hidden")},300)}showModalElement(t){this.modalEl.innerHTML=this.renderModalResult(t),this.modalEl.classList.remove("hidden"),setTimeout(()=>{this.modalEl.classList.remove("transparent")},0)}}const f=new j,m=new Y,p=new X,d=new N,y=new K,Z=()=>{if(d.blockChangingDirection(),!!d.playingStatus){if(d.collision){d.settleEndStatus(),p.showModalElement(d.score),d.initGameState();return}m.clearBoard(),m.drawFood(d.foodPosition.x,d.foodPosition.y),m.drawSnake(d.snakeBody),d.move(f.updateScore.bind(f))}},$=a=>{const{key:e}=a;d.checkStatus(e)?(d.settlePlayingStatus(),p.hideModalElement(),f.updateScore(0)):d.changeSnakeDirection(e)},E=()=>{y.run(Z),y.requestAnimationFrame(E)},J=async()=>{await m.createBoard(O),u.onKeyDown($),E()};J();