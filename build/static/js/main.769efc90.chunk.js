(this["webpackJsonpimpossible-game"]=this["webpackJsonpimpossible-game"]||[]).push([[0],{23:function(e,t,s){e.exports=s.p+"static/media/2C.066ae686.jpg"},24:function(e,t,s){e.exports=s.p+"static/media/3D.13159968.jpg"},25:function(e,t,s){e.exports=s.p+"static/media/4H.8fccba55.jpg"},26:function(e,t,s){e.exports=s.p+"static/media/5S.8fd39dd7.jpg"},27:function(e,t,s){e.exports=s.p+"static/media/6C.9d135342.jpg"},28:function(e,t,s){e.exports=s.p+"static/media/7D.3d5f6582.jpg"},29:function(e,t,s){e.exports=s.p+"static/media/8H.424248ab.jpg"},30:function(e,t,s){e.exports=s.p+"static/media/9S.70f9f396.jpg"},31:function(e,t,s){e.exports=s.p+"static/media/10C.354b7b1e.jpg"},32:function(e,t,s){e.exports=s.p+"static/media/JD.fea5118a.jpg"},33:function(e,t,s){e.exports=s.p+"static/media/QH.87f96511.jpg"},34:function(e,t,s){e.exports=s.p+"static/media/KS.d710f10c.jpg"},35:function(e,t,s){e.exports=s.p+"static/media/AC.fd0f054b.jpg"},36:function(e,t,s){e.exports=s.p+"static/media/blue_back.d9e0d11e.jpg"},37:function(e,t,s){e.exports=s.p+"static/media/purple_back.438c2e78.jpg"},44:function(e,t,s){},45:function(e,t,s){},57:function(e,t,s){"use strict";s.r(t);var i=s(3),a=s.n(i),n=s(12),r=s.n(n),o=(s(44),s(45),s(13)),c=s(14),h=s(8),l=s(16),d=s(15),p=s(58),u=s(59),b=s(67),g=s(60),j=s(61),v=s(62),f=s(63),x=(s(18),s(23)),k=s.n(x),S=s(24),m=s.n(S),O=s(25),y=s.n(O),C=s(26),M=s.n(C),B=s(27),w=s.n(B),I=s(28),G=s.n(I),U=s(29),T=s.n(U),A=s(30),P=s.n(A),J=s(31),q=s.n(J),L=s(32),F=s.n(L),K=s(33),Q=s.n(K),H=s(34),D=s.n(H),E=s(35),R=s.n(E),N=s(36),_=s.n(N),z=s(37),V=s.n(z),W=s(2),X=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={showSelector:!1,closed:!1},i.getCardImage=i.getCardImage.bind(Object(h.a)(i)),i.toggleSelector=i.toggleSelector.bind(Object(h.a)(i)),i.renderCardSelectorModal=i.renderCardSelectorModal.bind(Object(h.a)(i)),i}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return Object(W.jsx)("div",{style:{width:"30%",backgroundColor:"#a8a8a8",display:"inline-block",margin:"1%",border:this.getBorderStyle()},onClick:function(){return e.toggleSelector()},children:Object(W.jsxs)(p.a,{children:[this.renderCardSelectorModal(),Object(W.jsx)(u.a,{top:!0,width:"100%",src:this.getCardImage(),alt:"Could not find resource"}),Object(W.jsxs)("div",{style:{display:"inline-block"},children:[this.getAction(),"  ",this.getProbability()]})]})})}},{key:"renderCardSelectorModal",value:function(){var e=this;return Object(W.jsxs)(b.a,{isOpen:this.state.showSelector,children:[Object(W.jsx)(g.a,{toggle:function(){return e.toggleSelector()},children:" Select Result "}),Object(W.jsx)(j.a,{children:this.buildSelectionBody()}),Object(W.jsx)(v.a,{children:Object(W.jsx)(f.a,{style:{width:"100%"},color:"danger",onClick:function(){return e.handleUpdate("closed")},children:" Closed "})})]})}},{key:"buildSelectionBody",value:function(){var e=this,t=this.props.gameState(),s=[];return t.aces>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("A")},children:" Ace "})),t.kings>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("K")},children:" King "})),t.queens>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("Q")},children:" Queen "})),t.jacks>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("J")},children:" Jack "})),t.tens>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("10")},children:" 10 "})),t.nines>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("9")},children:" 9 "})),t.eights>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("8")},children:" 8 "})),t.sevens>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("7")},children:" 7 "})),t.sixes>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("6")},children:" 6 "})),t.fives>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("5")},children:" 5 "})),t.fours>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("4")},children:" 4 "})),t.threes>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("3")},children:" 3 "})),t.twos>0&&s.push(Object(W.jsx)(f.a,{style:{margin:"10px"},onClick:function(){return e.handleUpdate("2")},children:" 2 "})),s}},{key:"handleUpdate",value:function(e){this.props.updateBoard(this.props.pileIndex,e),this.toggleSelector()}},{key:"toggleSelector",value:function(){this.setState({showSelector:!this.state.showSelector})}},{key:"getCardImage",value:function(){return{2:k.a,3:m.a,4:y.a,5:M.a,6:w.a,7:G.a,8:T.a,9:P.a,10:q.a,J:F.a,Q:Q.a,K:D.a,A:R.a,"":_.a,closed:V.a}[this.props.card]}},{key:"getBorderStyle",value:function(){return this.props.pileIndex!==this.props.bestMove.pile?"":"5px solid green"}},{key:"getProbability",value:function(){if(this.props.pileIndex!==this.props.bestMove.pile)return"";if(""===this.props.bestMove.probability)return"";var e=(100*this.props.bestMove.probability).toFixed(2);return Object(W.jsxs)("small",{children:["(",e,"%)"]})}},{key:"getAction",value:function(){return this.props.pileIndex!==this.props.bestMove.pile?"":Object(W.jsx)("strong",{children:this.props.bestMove.action})}}]),s}(i.Component),Y=s(64),Z=s(65),$=s(66),ee={A:12,K:11,Q:10,J:9,10:8,9:7,8:6,7:5,6:4,5:3,4:2,3:1,2:0},te=["twos","threes","fours","fives","sixes","sevens","eights","nines","tens","jacks","queens","kings","aces"],se=function(){function e(t){Object(o.a)(this,e),this.state=t}return Object(c.a)(e,[{key:"getBestMove",value:function(){var e=[this.state.pile0,this.state.pile1,this.state.pile2,this.state.pile3,this.state.pile4,this.state.pile5,this.state.pile6,this.state.pile7,this.state.pile8];if(e.includes(""))return{pile:"",action:"",probability:""};var t=this.calculateTotalCards();if(0===t)return{pile:"",action:"",probability:""};for(var s=0,i=0,a="",n=0;n<e.length;n++){var r=this.getHigherProbability(e,n,t),o=this.getLowerProbability(e,n,t),c=this.getSameProbability(e,n,t);r>s&&(s=r,i=n,a="High"),o>s&&(s=o,i=n,a="Low"),c>s&&(s=c,i=n,a="Same")}return{pile:i,action:a,probability:s}}},{key:"getHigherProbability",value:function(e,t,s){var i=e[t];if("closed"===i)return 0;var a=ee[i];if(12===a)return 0;for(var n=0,r=a+1;r<te.length;r++)n+=this.state[te[r]];return n/s}},{key:"getLowerProbability",value:function(e,t,s){var i=e[t];if("closed"===i)return 0;var a=ee[i];if(0===a)return 0;for(var n=0,r=0;r<a;r++)n+=this.state[te[r]];return n/s}},{key:"getSameProbability",value:function(e,t,s){var i=e[t];if("closed"===i)return 0;var a=ee[i];return this.state[te[a]]/s}},{key:"calculateTotalCards",value:function(){for(var e=0,t=0;t<te.length;t++)e+=this.state[te[t]];return e}}]),e}(),ie=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={pile0:"",pile1:"",pile2:"",pile3:"",pile4:"",pile5:"",pile6:"",pile7:"",pile8:"",aces:4,kings:4,queens:4,jacks:4,tens:4,nines:4,eights:4,sevens:4,sixes:4,fives:4,fours:4,threes:4,twos:4,bestMove:{pile:"",action:"",probability:""},showCardCount:!1,gameResult:"loss",gameOver:!1,hideBestMove:!0},i.getGameState=i.getGameState.bind(Object(h.a)(i)),i.updateBoard=i.updateBoard.bind(Object(h.a)(i)),i.getBestMove=i.getBestMove.bind(Object(h.a)(i)),i.getGameState=i.getGameState.bind(Object(h.a)(i)),i.toggleCardCount=i.toggleCardCount.bind(Object(h.a)(i)),i}return Object(c.a)(s,[{key:"render",value:function(){var e=this,t=new se(this.state).calculateTotalCards();return Object(W.jsx)("div",{children:Object(W.jsxs)("div",{style:{marginLeft:"30%",marginRight:"30%"},children:[Object(W.jsxs)(Y.a,{style:{display:"flex",flexDirection:"row",marginLeft:"3%"},children:[Object(W.jsx)(Z.a,{style:{width:"25%"},children:Object(W.jsxs)(f.a,{style:{backgroundColor:"#8c8c8c",color:"white",padding:"20px"},onClick:function(){return e.toggleCardCount()},children:[" ",Object(W.jsxs)("h1",{children:[" ",t," "]})," "]})}),Object(W.jsxs)(Z.a,{style:{width:"90%"},children:[Object(W.jsxs)($.a,{isOpen:this.state.showCardCount,children:[" ",this.renderCardCount()," "]}),Object(W.jsxs)($.a,{isOpen:!this.state.showCardCount,children:[" ",Object(W.jsx)("h1",{style:{paddingLeft:"25px",color:"grey",fontSize:"50px",paddingTop:"10px"},children:"Impossible Game"})," "]})]})]}),Object(W.jsx)(X,{card:this.state.pile0,pileIndex:0,gameState:this.getGameState,updateBoard:this.updateBoard,bestMove:this.state.bestMove}),Object(W.jsx)(X,{card:this.state.pile1,pileIndex:1,gameState:this.getGameState,updateBoard:this.updateBoard,bestMove:this.state.bestMove}),Object(W.jsx)(X,{card:this.state.pile2,pileIndex:2,gameState:this.getGameState,updateBoard:this.updateBoard,bestMove:this.state.bestMove}),Object(W.jsx)(X,{card:this.state.pile3,pileIndex:3,gameState:this.getGameState,updateBoard:this.updateBoard,bestMove:this.state.bestMove}),Object(W.jsx)(X,{card:this.state.pile4,pileIndex:4,gameState:this.getGameState,updateBoard:this.updateBoard,bestMove:this.state.bestMove}),Object(W.jsx)(X,{card:this.state.pile5,pileIndex:5,gameState:this.getGameState,updateBoard:this.updateBoard,bestMove:this.state.bestMove}),Object(W.jsx)(X,{card:this.state.pile6,pileIndex:6,gameState:this.getGameState,updateBoard:this.updateBoard,bestMove:this.state.bestMove}),Object(W.jsx)(X,{card:this.state.pile7,pileIndex:7,gameState:this.getGameState,updateBoard:this.updateBoard,bestMove:this.state.bestMove}),Object(W.jsx)(X,{card:this.state.pile8,pileIndex:8,gameState:this.getGameState,updateBoard:this.updateBoard,bestMove:this.state.bestMove})]})})}},{key:"toggleCardCount",value:function(){this.setState({showCardCount:!this.state.showCardCount}),this.setState({hideBestMove:!this.state.hideBestMove})}},{key:"renderCardCount",value:function(){return Object(W.jsxs)("div",{children:[Object(W.jsxs)("strong",{children:["Aces: ",this.state.aces," "]})," \xa0\xa0\xa0 Kings: ",this.state.kings," \xa0\xa0\xa0",Object(W.jsxs)("strong",{children:["Queens: ",this.state.queens," "]})," \xa0\xa0\xa0 Jacks: ",this.state.jacks," \xa0\xa0\xa0",Object(W.jsxs)("strong",{children:["Tens:  ",this.state.tens," "]})," \xa0\xa0",Object(W.jsx)("hr",{}),"Nine: ",this.state.nines," \xa0\xa0\xa0",Object(W.jsx)("strong",{children:"Eights: "})," ",this.state.eights," \xa0\xa0\xa0 Sevens: ",this.state.sevens," \xa0\xa0\xa0",Object(W.jsxs)("strong",{children:["Sixes: ",this.state.sixes," "]})," \xa0 \xa0\xa0 Fives: ",this.state.fives," \xa0\xa0",Object(W.jsx)("hr",{}),"Fours: ",this.state.fours,"  \xa0\xa0\xa0\xa0",Object(W.jsxs)("strong",{children:["Threes: ",this.state.threes," "]})," \xa0\xa0\xa0\xa0 Twos: ",this.state.twos," \xa0\xa0\xa0\xa0"]})}},{key:"getBestMove",value:function(){if(this.gameOver());else{var e=new se(this.state).getBestMove();this.setState({bestMove:e})}}},{key:"gameOver",value:function(){if(0===new se(this.state).calculateTotalCards())return"win";for(var e=[this.state.pile0,this.state.pile1,this.state.pile2,this.state.pile3,this.state.pile4,this.state.pile5,this.state.pile6,this.state.pile7,this.state.pile8],t=0;t<e.length;t++)if("closed"!==e[t])return!1;return"loss"}},{key:"updateBoard",value:function(e,t){switch(e){case 0:this.setState({pile0:t});break;case 1:this.setState({pile1:t});break;case 2:this.setState({pile2:t});break;case 3:this.setState({pile3:t});break;case 4:this.setState({pile4:t});break;case 5:this.setState({pile5:t});break;case 6:this.setState({pile6:t});break;case 7:this.setState({pile7:t});break;case 8:this.setState({pile8:t});break;default:throw new Error("Invalid pile option")}switch(t){case"2":this.setState({twos:this.state.twos-1},this.getBestMove);break;case"3":this.setState({threes:this.state.threes-1},this.getBestMove);break;case"4":this.setState({fours:this.state.fours-1},this.getBestMove);break;case"5":this.setState({fives:this.state.fives-1},this.getBestMove);break;case"6":this.setState({sixes:this.state.sixes-1},this.getBestMove);break;case"7":this.setState({sevens:this.state.sevens-1},this.getBestMove);break;case"8":this.setState({eights:this.state.eights-1},this.getBestMove);break;case"9":this.setState({nines:this.state.nines-1},this.getBestMove);break;case"10":this.setState({tens:this.state.tens-1},this.getBestMove);break;case"J":this.setState({jacks:this.state.jacks-1},this.getBestMove);break;case"Q":this.setState({queens:this.state.queens-1},this.getBestMove);break;case"K":this.setState({kings:this.state.kings-1},this.getBestMove);break;case"A":this.setState({aces:this.state.aces-1},this.getBestMove);break;case"closed":this.setState({},this.getBestMove);break;default:throw new Error("Invalid card option")}}},{key:"getGameState",value:function(){return{aces:this.state.aces,kings:this.state.kings,queens:this.state.queens,jacks:this.state.jacks,tens:this.state.tens,nines:this.state.nines,eights:this.state.eights,sevens:this.state.sevens,sixes:this.state.sixes,fives:this.state.fives,fours:this.state.fours,threes:this.state.threes,twos:this.state.twos}}}]),s}(i.Component);var ae=function(){return Object(W.jsx)("div",{className:"App",style:{marginTop:"5%"},children:Object(W.jsx)(ie,{})})},ne=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,68)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),i(e),a(e),n(e),r(e)}))};r.a.render(Object(W.jsx)(a.a.StrictMode,{children:Object(W.jsx)(ae,{})}),document.getElementById("root")),ne()}},[[57,1,2]]]);
//# sourceMappingURL=main.769efc90.chunk.js.map