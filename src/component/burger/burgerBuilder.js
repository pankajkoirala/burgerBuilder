import React, { useState } from "react";

import { Table } from "reactstrap";
import "./burger.css";

let Cheese = () => {
  const [ches, setChes] = useState([]);
  const [meat, setMeat] = useState([]);
  const [salad, setSalad] = useState([]);
  const [beacon, setBeacon] = useState([]);
  const [chesCost, setChesCost] = useState(20);
  const [meatCost, setMeatCost] = useState(0);
  const [saladCost, setSaladCost] = useState(30);
  const [beaconCost, setBeaconCost] = useState(15);

  console.log(ches);

  let addCheese = () => {
    if (ches.length < 1) {
      let addTwo = [...ches, <div className="Cheese"></div>];
      setChes(addTwo);
    }
    if (chesCost < 40) {
      let cost = 20 + chesCost;
      setChesCost(cost);
    }
  };

  let deletCheese = () => {
    if (ches.length > 0) {
      let array = [...ches];
      array.pop();
      setChes(array);
    }
    if (chesCost > 20) {
      let cost = chesCost - 20;
      setChesCost(cost);
    }
  };

  let addSalad = () => {
    if (salad.length < 2) {
      let add = [...salad, <div className="Salad"></div>];
      setSalad(add);
    }
    if (saladCost < 90) {
      let cost = 30 + saladCost;
      setSaladCost(cost);
    }
  };

  let deletSalad = () => {
    if (salad.length > 0) {
      let array = [...salad];
      array.pop();
      setSalad(array);
    }
    if (saladCost > 30) {
      let cost = saladCost - 30;
      setSaladCost(cost);
    }
  };

  let addMeat = () => {
    if (meat.length < 3) {
      let add = [...meat, <div className="Meat"></div>];
      setMeat(add);
    }
    if (meatCost < 150) {
      let cost = 50 + meatCost;
      setMeatCost(cost);
    }
  };

  let deletMeat = () => {
    if (meat.length > 0) {
      let array = [...meat];
      array.pop();
      setMeat(array);
    }
    if (meatCost > 0) {
      let cost = meatCost - 50;
      setMeatCost(cost);
    }
  };

  let addBeacon = () => {
    if (beacon.length < 2) {
      let add = [...beacon, <div className="Bacon"></div>];
      setBeacon(add);
    }
    if (beaconCost < 45) {
      let cost = 15 + beaconCost;
      setBeaconCost(cost);
    }
  };

  let deletBeacon = () => {
    if (beacon.length > 0) {
      let array = [...beacon];
      array.pop();
      setBeacon(array);
    }
    if (beaconCost > 15) {
      let cost = beaconCost - 15;
      setBeaconCost(cost);
    }
  };

  return (
    <div className="container">
      <h1 className="m-4"> welcome to burger house</h1>
    <div className="row  container">
      <div className="col-md-6 mt-4 ">
        
          <div className="Bread-top"></div>
          <div className="Cheese"></div>
          {ches.map((arg, index) => {
            return <div key={index}>{arg}</div>;
          })}
          <div className="Salad"></div>
          {salad.map((arg, index) => {
            return <div key={index}>{arg}</div>;
          })}
          {meat.map((arg, index) => {
            return <div key={index}>{arg}</div>;
          })}
          {beacon.map((arg, index) => {
            return <div key={index}>{arg}</div>;
          })}
          <div className="Bacon"></div>
          <div className="Kechop"></div>
          <div className="Bread-button"></div>
        
      </div>
      <div className="col-md-6">
        <div className="">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM</th>
                <th> ADD ITEM</th>
                <th>DELET ITEM</th>
                <th> ITEM COST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <th> CHESES</th>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      addCheese();
                    }}
                  >
                    add chese
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      deletCheese();
                    }}
                  >
                    delet chese
                  </button>
                </td>
                <td>$ {chesCost}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <th> SALAD</th>
                <td>
                  <button
                    onClick={() => {
                      addSalad();
                    }}
                  >
                    add salad
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deletSalad();
                    }}
                  >
                    delet salad
                  </button>
                </td>
                <td>$ {saladCost}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <th> MEAT</th>
                <td>
                  <button
                    onClick={() => {
                      addMeat();
                    }}
                  >
                    add meat
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deletMeat();
                    }}
                  >
                    delet meat
                  </button>
                </td>
                <td>$ {meatCost}</td>
              </tr>
              <tr>
                <th scope="row">4</th>
               <th>BEACON</th>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      addBeacon();
                    }}
                  >
                    add beacon
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      deletBeacon();
                    }}
                  >
                    delet beacon
                  </button>
                </td>
                <td>$ {beaconCost}</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <th>total cost</th>
                <td></td>
                <td></td>
                <td className="font-weight-bold">
                  $ {chesCost + saladCost + meatCost + beaconCost}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cheese;
