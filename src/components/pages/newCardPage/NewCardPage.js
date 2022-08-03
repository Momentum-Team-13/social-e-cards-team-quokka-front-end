import { useState } from "react";
import axios from "axios";
import "./newCardPage.css";

// A controlled form input -- form values are in state
export default function NewCard(token) {
    const [bgColor, setBgColor] = useState("White");
    const [borderColor, setBorderColor] = useState("Black");
    const [fontColor, setFontColor] = useState("Black");
    const [font, setFont] = useState("roboto");

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleChangeBgColor = (event) => {
        console.log(event.target.value);
        setBgColor(event.target.value);
    };
    const handleChangeBorderColor = (event) => {
        console.log(event.target.value);
        setBorderColor(event.target.value);
    };
    const handleChangeFontColor = (event) => {
        console.log(event.target.value);
        setFontColor(event.target.value);
    };
    const handleChangeFont = (event) => {
        console.log(event.target.value);
        setFont(event.target.value);
    };
    const handleChangeTitle = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    };
    const handleChangeMessage = (event) => {
        console.log(event.target.value);
        setMessage(event.target.value);
    };
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        console.log(token.token);
        console.log(title, message, font, fontColor, bgColor, borderColor);
        axios
            .post(
                "https://quokka-cards.herokuapp.com/cards/new/",
                {
                    title: title,
                    message: message,
                    font: font,
                    font_color: fontColor,
                    bg_color: bgColor,
                    border_color: borderColor,
                },
                {
                    headers: {
                        Authorization: `Token ${token.token}`,
                    },
                }
            )
            .then(console.log)
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <>
            <div className="new-card-container">
                <div className="previewBox">
                    <div className="options">
                        <div className="input-field">
                            <label>Title</label>
                            <br></br>
                            <input
                                className="input "
                                type="text"
                                onChange={handleChangeTitle}
                                value={title}
                            />
                        </div>
                        <div className="input-field">
                            <label>Message</label>
                            <br></br>
                            <div>
                                <textarea
                                    className="input"
                                    onChange={handleChangeMessage}
                                    value={message}
                                    rows={10}
                                    cols={50}
                                    wrap="hard"
                                />
                            </div>
                        </div>

                        <div className="dropdown-box">
                            <div className="dropdown">
                                <label for="Color">Border Color:</label>
                                <br></br>
                                <select
                                    className="select"
                                    onChange={handleChangeBorderColor}
                                    value={borderColor}
                                    id="color"
                                    name="color"
                                >
                                    <option value="White">White</option>
                                    <option value="Black">Black</option>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Green">Green</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Orange">Orange</option>
                                    <option value="Purple">Purple</option>
                                    <option value="Brown">Brown</option>
                                </select>
                            </div>

                            <div className="dropdown">
                                <label for="Color">Font Color:</label>
                                <br></br>
                                <select
                                    className="select"
                                    onChange={handleChangeFontColor}
                                    value={fontColor}
                                    id="color"
                                    name="color"
                                >
                                    <option value="Black">Black</option>
                                    <option value="White">White</option>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Green">Green</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Orange">Orange</option>
                                    <option value="Purple">Purple</option>
                                    <option value="Brown">Brown</option>
                                </select>
                                <br></br>
                            </div>

                            <div className="dropdown">
                                <label for="Color">Background Color:</label>
                                <br></br>
                                <select
                                    className="select"
                                    onChange={handleChangeBgColor}
                                    value={bgColor}
                                    id="color"
                                    name="color"
                                >
                                    <option value="White">White</option>
                                    <option value="Black">Black</option>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Green">Green</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Orange">Orange</option>
                                    <option value="Purple">Purple</option>
                                    <option value="Brown">Brown</option>
                                </select>
                                <br></br>
                            </div>

                            <div className="dropdown">
                                <label for="Color">Font:</label>
                                <br></br>
                                <select
                                    className="select"
                                    onChange={handleChangeFont}
                                    value={font}
                                    id="font"
                                    name="font"
                                >
                                    <option value="roboto">Roboto</option>
                                    <option value="spectral">Spectral</option>
                                    <option value="dancing">Dancing</option>
                                    <option value="julius">Julius</option>
                                    <option value="righteous">Righteous</option>
                                    <option value="bungee">Bungee</option>
                                    <option value="amatic">Amatic</option>
                                    <option value="kaushan">Kaushan</option>
                                    <option value="cormorant">Cormorant</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={handleSubmit}
                                className="button submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="preview">
                        <div className="card">
                            <div >
                                <div
                                    className={`card-text preview-border bg-${bgColor} border-${borderColor}`}
                                >
                                    <div
                                        className={`card-title has-text-centered  ${fontColor} ${font}`}
                                    >
                                        {title}
                                    </div>
                                    <div
                                        className={`card-message has-text-centered ${fontColor} ${font} messageBox`}
                                    >
                                        {message}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    <br></br>
                </div>
                <div></div>
            </div>
        </>
    );
}
