import React from 'react';

export default function SwordClash() {
  return (
    <div id="warrior-animation" className="relative w-[120px] h-[120px]">
      <div className="sword sword-left"></div>
      <div className="sword sword-right"></div>
      <div className="spark spark-1" style={{"--tx": "20px", "--ty": "-20px"} as React.CSSProperties}></div>
      <div className="spark spark-2" style={{"--tx": "-15px", "--ty": "-25px"} as React.CSSProperties}></div>
      <div className="spark spark-3" style={{"--tx": "10px", "--ty": "-30px"} as React.CSSProperties}></div>
    </div>
  );
}