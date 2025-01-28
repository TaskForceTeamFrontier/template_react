"use client"

import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {

    const [valueText, setValueText] = useState<string>("");
    const [valueNumver, setValueNumber] = useState<number | "">("");
    const [valueCheckBox, setValueCheckBox] = useState<boolean | false>(false);
    const [valueRadio, setValueRadio] = useState<string>("");
    const [valueDropDown, setValueDropDown] = useState<string>("");
    const [valueTextArea, setValueTextArea] = useState<string>("");
    const [valueFile, setValueFile] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setValueFile(e.target.files[0]);
      }
    };
    const [valueDate, setValueDate] = useState<string>("");
    const [valueTime, setValueTime] = useState<string>('');
    const handleChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueTime(event.target.value);
      };
    const [valueRange, setValueRange] = useState<number>(50);
    const [valuePassword, setValuePassword] = useState<string>("");
    const [valueColor, setValueColor] = useState<string>('#000000');
    const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueColor(event.target.value);
    };
    const opts = {
        height: '390', width: '640',
        playerVars: { autoplay: 1, },
    };
    return (
        <>
            <div>
                <input type="text" value={valueText}
                    placeholder="Enter text"
                    className="border rounded px-2 py-1"
                    onChange={(e) => setValueText(e.target.value)}/>
            </div>
            <div>
                <input type="number" value={valueNumver}
                    placeholder="Enter number"
                    className="border rounded px-2 py-1"
                    onChange={(e) => setValueNumber(e.target.value === "" ? "" : Number(e.target.value))}/>
            </div>
            <div>
                <label className="flex items-center gap-2">
                    <input type="checkbox" checked={valueCheckBox}
                        className="cursor-pointer"
                        onChange={(e) => setValueCheckBox(e.target.checked)}/>
                    Check
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" value="Option 1"
                        checked={valueRadio === "Option 1"}
                        onChange={(e) => setValueRadio(e.target.value)}/>
                    Option 1
                </label>
                <label>
                    <input type="radio" value="Option 2"
                        checked={valueRadio === "Option 2"}
                        onChange={(e) => setValueRadio(e.target.value)}/>
                    Option 2
                </label>
            </div>
            <div>
                <select value={valueDropDown}
                    onChange={(e) => setValueDropDown(e.target.value)}
                    className="border rounded px-2 py-1">
                        <option value="">Choose an option</option>
                        <option value="Opt01">Option 1</option>
                        <option value="Opt02">Option 2</option>
                </select>
            </div>
            <div>
                <textarea value={valueTextArea}
                    placeholder="Enter your message"
                    rows={4}
                    className="border rounded px-2 py-1 w-full"
                    onChange={(e) => setValueTextArea(e.target.value)}/>
            </div>
            <div>
                <input type="file" onChange={handleFileChange} />
                {
                    valueFile && <p>Selected File: {valueFile.name}</p>
                }
            </div>
            <div>
                <input type="date" value={valueDate}
                    className="border rounded px-2 py-1"
                    onChange={(e) => setValueDate(e.target.value)}/>
            </div>
            <div>
                <input type="time" value={valueTime}
                    className="border rounded px-2 py-1"
                    onChange={handleChangeTime}/>
            </div>
            <div>
                <input type="range" value={valueRange}
                    min={0}
                    max={100}
                    className="w-full"
                    onChange={(e) => setValueRange(Number(e.target.value))}/>
                <p>Value: {valueRange}</p>
            </div>
            <div>
                <input type="password" value={valuePassword}
                    placeholder="Enter password"
                    className="border rounded px-2 py-1"
                    onChange={(e) => setValuePassword(e.target.value)}/>
            </div>
            <div>
                <input type="color" value={valueColor}
                    placeholder="Enter password"
                    className="border rounded px-2 py-1"
                    onChange={handleChangeColor}/>
            </div>
            <div>
                <Image src="https://i.pinimg.com/736x/a0/a8/46/a0a846db2c036d3a8fcf739bb5707e43.jpg"
                    width={500} height={500}
                    alt="프로필 이미지"></Image>
            </div>
            <div>
                <YouTube videoId="qiyTDxBjmIw" opts={opts}/>
            </div>
            <div>
                <ReactPlayer url='https://vimeo.com/49824162' controls />
            </div>
        </>
    );
}
