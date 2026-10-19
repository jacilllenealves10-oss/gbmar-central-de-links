/* Geometria do painel na área visível, inclusive com teclado virtual. */
(function(root){
  'use strict';
  function calculate({width,height,offsetTop=0,layoutHeight=height,scale=1}){
    if(!Number.isFinite(width)||!Number.isFinite(height)||width>600||scale!==1||height<160)return null;
    const compact=height<480||layoutHeight-height>140;
    const bottom=compact?8:68,topGap=8,panelHeight=Math.min(670,Math.max(0,height-bottom-topGap));
    return {top:Math.round(offsetTop+height-bottom-panelHeight),height:Math.round(panelHeight),width:Math.round(width-16),compact};
  }
  const api={calculate};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.GBMarLayout=api;
})(typeof globalThis!=='undefined'?globalThis:this);
