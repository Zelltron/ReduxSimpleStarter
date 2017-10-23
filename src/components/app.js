import React, { Component } from 'react';
import $ from 'jquery';

import style from '../../style/style.scss';

import TweenMax from "gsap";
import SplitText from "gsap/SplitText";

function typingAnimation(text, timeline){
  text.each(function(){
    var mySplitText = new SplitText(this, {type:"words,chars"});
    var chars = mySplitText.chars;
    timeline.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");
    timeline.to(this, 0.6, {delay: 0.8, opacity: 0});
  });

}

export default class App extends Component {
  componentDidMount(){
    var tl =  new TimelineMax();
    typingAnimation($(".txt"), tl);
    tl.to($(".centerBox"), 0.6, {delay: 0.2, width: '100%', height: '100%'});
  }

  render() {
    return (
      <div className="body">
        <div className="centerBox">
          <div className="scanlines">
            <div className="boxText" id="textHolder">
              <h3 className="txt">{"Hello I'm Ryan"}</h3>
              <h3 className="txt">{"Whats up?"}</h3>
              <h3 className="txt">{"≧◡≦"}</h3>
              <h3 id="welcome" className="txt">{"Welcome!"}</h3>
            </div>
            {/*<img id="loading" src="../img/bun.gif"/>*/}
          </div>
        </div>
      </div>
    );
  }
}
