import { useState } from "react";

function App() {
  const [vlu, setVlu] = useState("");
  
  const handleClick = (e) => {
    setVlu(vlu.concat(e.target.value))

  }
  const calculate=()=>{
    setVlu(eval(vlu));
  }

  function allClear() {
   setVlu("")
  }
  const backSpace=()=>{
    setVlu(vlu.slice(0,vlu.length-1))
  }
  return (
    <>
      <div className="body">
        <div className="calculator">
          <div className="result-sec">
            <p className="w-[100%] h-[45%] text-[40px] font-bold text-white">
             {vlu}
            </p>
          </div>
          <div className="btn-sec">
            <button
              className="btn text-[#80ffdb] text-[30px]"
              onClick={allClear}
            >
              AC
            </button>
            <button className="btn text-[#80ffdb] text-[30px]" >+/-</button>
            <button className="btn text-[#80ffdb] text-[30px]" value="%">%</button>
            <button
              value="/"
              className="btn  text-[#f72585] text-[35px]"
              name="operator"
            >
              /
            </button>
            <button
              value="7"
              className="btn text-[25px] text-white"
              onClick={handleClick}
            >
              7
            </button>
            <button
              value="8"
              className="btn text-[25px] text-white"
              onClick={handleClick}
            >
              8
            </button>
            <button
              value="9"
              className="btn text-[25px] text-white"
              onClick={handleClick}
            >
              9
            </button>
            <button
              value="*"
              className="btn text-[#f72585] text-[35px]"
              name="operator"
              onClick={handleClick}
            >
              ×
            </button>
            <button
              value="4"
              className="btn text-[25px] text-white"
              onClick={handleClick}
            >
              4
            </button>
            <button
              value="5"
              className="btn text-[25px] text-white"
              onClick={handleClick}
            >
              5
            </button>
            <button
              value="6"
              className="btn text-[25px] text-white"
              onClick={handleClick}
            >
              6
            </button>
            <button
              value="-"
              className="btn text-[#f72585] text-[35px]"
              name="operator"
              onClick={handleClick}
            >
              -
            </button>
            <button
              value="1"
              className="btn text-[25px] text-white"
              onClick={handleClick}
            >
              1
            </button>
            <button
              value="2"
              className="btn text-[25px] text-white"
              onClick={handleClick}
            >
              2
            </button>
            <button
              value="3"
              className="btn text-[25px] text-white"
              onClick={handleClick}
            >
              3
            </button>
            <button
              value="4"
              className="btn text-[#f72585] text-[35px]"
              name="operator"
              onClick={handleClick}
            >
              +
            </button>
            <button className="btn text-[25px] text-white" onClick={backSpace}>⌫</button>
            <button
              value="0"
              className="btn text-[25px] text-white"
              onClick={handleClick}
            >
              0
            </button>
            <button
              value="."
              className="btn text-[35px] text-white"
              onClick={handleClick}
            >
              .
            </button>
            <button
              className="btn text-[#f72585] text-[35px]"
             onClick={calculate}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
