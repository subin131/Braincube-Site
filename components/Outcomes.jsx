import React from "react";

const Outcomes = () => {
  return (
    <div
      id="outcome"
      style={{ background: "#009970" }}
      className="mx-auto"
    >
      <div style={{display:"flex",msFlexDirection:"row",justifyContent:"space-around",padding:"50px"}}class="grid grid-cols-4 gap-4">
        <div>
            <div style={{display:"flex",flexDirection:"column",color:"white",alignItems:"center"}}>
            <h1 className="text-4xl">32</h1>
            <p>Patners</p>
            </div>
        </div>
        <div>
            <div style={{display:"flex",flexDirection:"column",color:"white",alignItems:"center"}}>
            <h1 className="text-4xl">35</h1>
            <p>Meetings/Events</p>
            </div>
        </div>
        <div>
            <div style={{display:"flex",flexDirection:"column",color:"white",alignItems:"center"}}>
            <h1 className="text-4xl">28</h1>
            <p>Project Done</p>
            </div>
        </div>
        <div>
            <div style={{display:"flex",flexDirection:"column",color:"white",alignItems:"center"}}>
            <h1 className="text-4xl">1250</h1>
            <p>Happy Beneficiary</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Outcomes;
