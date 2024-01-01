import React from 'react';
import colorNames from 'colornames';

const Content = ({newColor, setNewColor, handleSubmit, hexValue, setHexValue, isDarkText, setIsDarkText}) => {

  return (
    <main>
        <form 
            onSubmit={handleSubmit} 
            className='mainForm'
        >
            <div 
                className="showColor"
                style={{
                    backgroundColor: newColor,
                    color: isDarkText ? "#FFF" : "#000"
                }}
            >
            <p>{newColor ? newColor : "Empty Color Name"}</p>&nbsp;&nbsp;&nbsp;
            <p>{hexValue ? hexValue : null}</p>
            </div>
            <div className="writeColor" id='writeColor'>
                <input
                    id='itext'
                    autoFocus
                    type='text'
                    placeholder='Add Color'
                    required
                    onChange={(e)=>{
                    setNewColor(e.target.value);
                    setHexValue(colorNames(e.target.value));
                    }} 
                    value={newColor}
                ></input>
                <label htmlFor='wColor' id='ilabel'>Add Color</label>
            </div>
            <div className="fontColorChanger">
                <button 
                    type="button"
                    onClick={()=>setIsDarkText(!isDarkText)}
                >Toggle B/W</button>
            </div>
        </form>    
    </main>
  )
}

Content.defaultProps={
    newColor: "Empty Color Name"
}

export default Content;
