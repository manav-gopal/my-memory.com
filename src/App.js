import React from "react";
import newTask, { getData } from "./Func1";

function App() {
  // Counting NUM of List

    
  setInterval(function () {
    // To Delete The LI tag from Unorder List....

    var myToDoList = document.getElementsByTagName("li");
    var close = document.getElementsByClassName("close");
    var mylist = document.getElementById("myList");
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var Line = this.parentElement;
        mylist.removeChild(Line);
        console.log(myToDoList.length);
      }
    }
    //for counting compleated tasks
    //======================================>
    var myToDoList = document.getElementsByTagName("li");
    var c = 0;
    var d = 0;
    var listNull = document.getElementsByTagName("LI");
    for ( i = 0; i < myToDoList.length; i++) {
      if (listNull[i].style.display === "none") {
        c--;
      }
      if (
        listNull[i].className === "checked" &&
        listNull[i].style.display !== "none"
      ) {
        d++;
      }
      c++;
    }

    document.getElementById("numOfListRemain").innerHTML ="Task Left : " + (c - d);

    //==========X=========X===========X========>

    // Cheaked mark
    var list = document.querySelector("ul");
    list.addEventListener(
      "click",
      function (ev) {
        if (ev.target.tagName === "LI") {
          ev.target.classList.toggle("checked");
          console.log("Checked");
        }
      },
      false
    );
  }, 1000);

  function clear() {
    localStorage.clear();
    document.getElementById("myList").innerHTML = "";
  }

  return (
    <>
      <div className="container">
        <div id="myDIV" className="header">
          <h2> My Memory</h2>
          <form onSubmit={newTask} id="myForm">
            <input type="text" id="myInput" placeholder="Title..." />
            <button type="submit" className="addBtn">
              Add
            </button>
          </form>
        </div>

        <div className="myUL">
          <ul id="myList">
            <li>Eggs<span className="close">x</span></li>
            <li>Maggi<span className="close">x</span></li>
          </ul>
          <ul className="someBtns">
            <button className="getBtn" onClick={getData}>
              Get Previous saved list
            </button>
            <button className="clearBtn" onClick={clear}>
              Clear All
            </button>
            <p id="numOfListRemain" />
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
