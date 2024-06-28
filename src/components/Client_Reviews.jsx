import React from "react";
import Button from "./Button";
import WB from "../Images/WB_img.png";

function Client_Reviews() {
  let clientarr = [
    { name: "Planetly", subname: "Nina Walloch", lastname: "READ" },
    { name: "Workiz Easy", subname: "Tomer Levy", lastname: "READ" },
    { name: "Premium Blend", subname: "Ellen Kim", lastname: "READ" },
    { name: "Hypercare Systems", subname: "Brendan Goss", lastname: "READ" },
    { name: "Officevibe", subname: "Raff Labrie", lastname: "READ" },
    { name: "Orderlion", subname: "Stefan Strohmer", lastname: "READ" },
    { name: "Black Book", subname: "Jaci Smith", lastname: "READ" },
    { name: "Trawa Energy", subname: "David Budde", lastname: "READ" },
  ];
  return (
    <div className='font-["Neue_Montreal"] px-5 border-b-[0.5px] '>
      <div className=" pt-14 py-9 xl:px-7 text-4xl border-b border-gray-400">
        <h1>Clients’ reviews</h1>
      </div>
      <div className="cont1 lg:flex xl:px-7">
        <div id="cont1right" className="lg:w-1/2 lg:flex">
          <div className="box1 lg:w-1/2 py-5 mb-7 pl-2 text-base underline underline-offset-4">
            <h1>Karman Ventures</h1>
          </div>
          <div className="box2 pl-2 mb-6">
            <h1 className="lg:py-5">Services:</h1>
            <div className="my-3 flex lg:flex-col gap-2">
              <Button label="INVESTOR DECK" /> <Button label="INVESTOR DECK" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 cont1left pl-2 mb-6">
          <h1 className="lg:py-5">William Barnes</h1>
          <div className="my-3">
            <img src={WB} alt="" className="w-[100px] rounded-xl" />
          </div>
          <div className="para tracking-tight lg:tracking-normal my-5 lg:pr-[13vw] xl:pr-[18vw]">
            <p>
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
      </div>
      <div className="lastbox">
        {clientarr.map((item,index) => {
          return (
            <div key={index} className="sub border-t-[0.2px] border-gray-400 -mx-5">
              <div className="outer px-7 xl:px-12 flex py-4 underline underline-offset-4 decoration-1">
                <div className="right w-1/2">
                  <h1>{item.name}</h1>
                </div>
                <div className="left flex w-1/2 justify-between">
                  <div className="lright">
                    <h1 className="hidden lg:block">{item.subname}</h1>
                  </div>
                  <div className="rright uppercase">{item.lastname}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Client_Reviews;
