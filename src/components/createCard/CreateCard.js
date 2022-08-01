import { useState } from 'react'
import axios from 'axios'

// A controlled form input -- form values are in state
export const PreviewForm = () => {
    const [bgColor, setBgColor] = useState('')
    const [borderColor, setBorderColor] = useState('')
    const [fontColor, setFontColor] = useState('')
    const [font, setFont] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const handleChangeBgColor = (event) => {
        console.log(event.target.value)
        setBgColor(event.target.value)
    }
    const handleChangeBorderColor = (event) => {
        console.log(event.target.value)
        setBorderColor(event.target.value)
    }
    const handleChangeFontColor = (event) => {
        console.log(event.target.value)
        setFontColor(event.target.value)
    }
    const handleChangeFont = (event) => {
        console.log(event.target.value)
        setFont(event.target.value)
    }
    const handleChangeTitle = (event) => {
        console.log(event.target.value)
        setTitle(event.target.value)
    }
    const handleChangeMessage = (event) => {
        console.log(event.target.value)
        setMessage(event.target.value)
    }
    const [error, setError] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(null)
        axios
            .post('https://quokka-cards.herokuapp.com/cards/new/', {

                title: title,
                message: message,
                font: font,
                font_color: fontColor,
                bg_color: bgColor,
                border_color: borderColor,
                border_style: "",
                img_src: ""
            })
            .then(() => {
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <div>
            <h1>Preview</h1>
            <div className="previewBox">
                <div>
                    <div className="input-field">
                        <label>Title</label><br></br>
                        <input type="text" onChange={handleChangeTitle} value={title} />
                    </div>
                    <div className="input-field">
                        <label>Message</label><br></br>
                        <div>
                            <textarea

                                onChange={handleChangeMessage} value={message} rows={10}
                                cols={50} wrap="hard"
                            />
                        </div>
                    </div>


                    <label for="Color">Border Color:</label><br></br>
                    <select onChange={handleChangeBorderColor} value={borderColor} id="color" name="color">
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="purple">Purple</option>
                        <option value="brown">Brown</option>
                    </select><br></br>
                    <label for="Color">Font Color:</label><br></br>
                    <select onChange={handleChangeFontColor} value={fontColor} id="color" name="color">
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="purple">Purple</option>
                        <option value="brown">Brown</option>
                    </select><br></br>
                    <label for="Color">Background Color:</label><br></br>
                    <select onChange={handleChangeBgColor} value={bgColor} id="color" name="color">
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="purple">Purple</option>
                        <option value="brown">Brown</option>
                    </select><br></br>


                    <label for="Color">Font:</label><br></br>
                    <select onChange={handleChangeFont} value={font} id="font" name="font">
                        <option value="roboto">Roboto</option>
                        <option value="spectral">Spectral</option>
                        <option value="dancing">Dancing</option>
                        <option value="julius">Julius</option>
                        <option value="righteous">Righteous</option>
                        <option value="bungee">Bungee</option>
                        <option value="amatic">Amatic</option>
                        <option value="kaushan">Kaushan</option>
                        <option value="cormorant">Cormorant</option>
                    </select></div>
                <div >

                    <div className="card">
                        <div className={`card-content bg-${bgColor} border-${borderColor}`}>
                            <div className={`${fontColor} ${font}`}>
                                {title}
                            </div>
                            <div className={`${fontColor} ${font} messageBox`}>
                                {message}
                            </div>
                        </div>

                    </div>

                </div><br></br>


            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}