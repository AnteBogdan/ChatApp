import React, {useState} from "react";
function Input(props) {

    const [text, setText] = useState("");
  
  
    function handleSubmit(e) {
  
      e.preventDefault(); // kad je nema, ne šalje poruke
  
      setText("");
  
      props.onSendMessage(text);
    }
  
   
    function handleChange(e) {
  
      setText(e.target.value);
    }
  
    return (
      <div className="Input">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={text}
            type="text"
            placeholder="Unesi svoju poruku"
            autoFocus
          />
          <button>Pošalji</button>
        </form>
      </div>
    );
  }
  
  export default Input;