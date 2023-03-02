import './palette.css';
import {useEffect, useRef, useState} from 'react';
import Img from "./bb1.jpeg"
// import {EditControl} from "react-leaflet-draw"
// import {FeatureGroup} from "react-leaflet"
// import Cursor from '../Cursor/Cursor';
import { Link } from "react-router-dom";

const DrawingCanvas = () => {
    const colors = [
        "#000000",
        "#464646",
        "#787878",
        "#980031",
        "#ed1d25",
        "#ff7d01",
        "#ffc30e",
        "#a7e71d",
        "#23b14c",
        "#03b8ef",
        "#4c6cf3",
        "#303699",
        "#6e3198",
        "#ffffff",
        "#dcdcdc",
        "#9c593c",
        "#ffa3b1",
        "#e5aa7a",
        "#f5e59c",
        "#fff9be",
        "#d3f9bc",
        "#9cbb60",
        "#99d9eb",
        "#6f99d2",
        "#d6c7bd",
        "#b8a68c"
      ];
      //const [background,setBackground] = useState("#0714115");
      const [selected, setSelected] = useState("#000000");

    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);
    const [isInitiating, setIsInitiating] = useState(true)
    const [option, setOption] = useState("")

    const canvasOffSetX = useRef(null);
    const canvasOffSetY = useRef(null);
    const startX = useRef(null);
    const startY = useRef(null);

    useEffect(() => {
        console.log("in use effect")
        console.log(selected)
        const canvas = canvasRef.current;
        if (!canvas) return ;
        // canvas.width = 1350;
        // canvas.height = 500;
        if (isInitiating) {
            let parentElement = canvas.parentElement;
            if (parentElement) {

                canvas.width = 1350;
                canvas.height = 500 ;
            }
            canvas.style.border = "solid black 1px";
            canvas.style.background = "white" ;
        }
        
        const context = canvas.getContext("2d");
        //if (context == null) return ;

        context.lineCap = "round";
        context.strokeStyle = selected;
        context.lineWidth = 5;
        contextRef.current = context;
        //if (!contextRef.current) alert("erreur useEffect" )

        setIsInitiating(false) ;
    }, [selected]);

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        if (!contextRef.current) console.log("erreur startDrawing")
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        setIsDrawing(true);
       //nativeEvent.preventDefault();
    };

    const draw = ({nativeEvent}) => {
        if(!isDrawing) 
            return;
        console.log("drawing")
        
        
        const {offsetX, offsetY} = nativeEvent;
        console.log({offsetX, offsetY});
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
       //nativeEvent.preventDefault();
    };

    const stopDrawing = () => {
        if (!contextRef.current) console.log("erreur finishDrawing")
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const setToDraw = () => {
        contextRef.current.globalCompositeOperation = 'source-over';
        
    };

    const setToErase = () => {
        contextRef.current.globalCompositeOperation = 'destination-out';
    };
    

    const startDrawingRectangle = ({nativeEvent}) => {
        // const {canvasOffSetX,canvasOffSetY } = nativeEvent;
         nativeEvent.preventDefault();
         nativeEvent.stopPropagation();
 
         startX.current = nativeEvent.clientX - canvasOffSetX.current;
         startY.current = nativeEvent.clientY - canvasOffSetY.current;
 
         setIsDrawing(true);
     };
 
     const drawRectangle = ({nativeEvent}) => {
         if (!isDrawing) {
             return;
         }
 
         nativeEvent.preventDefault();
         nativeEvent.stopPropagation();
 
         const newMouseX = nativeEvent.clientX - canvasOffSetX.current;
         const newMouseY = nativeEvent.clientY - canvasOffSetY.current;
 
         const rectWidht = newMouseX - startX.current;
         const rectHeight = newMouseY - startY.current;
 
         contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
 
         contextRef.current.strokeRect(startX.current, startY.current, rectWidht, rectHeight);
     };
 
     const stopDrawingRectangle = () => {
         setIsDrawing(false);
     };
// const _created = e => console.log(e);
    

    return (
        <div  className="Palette" style={{ width: "70%" , position:"relative" , alignItems:"center"}}>
             
            <canvas id="draw" className="canvas-container draw"
                ref={canvasRef}
                onMouseDown={option === "rect" ?startDrawingRectangle : startDrawing}
                onMouseMove={option === "rect"? drawRectangle :draw}
                onMouseUp={option === "rect"? stopDrawingRectangle:  stopDrawing}
                onMouseLeave={option === "rect"? stopDrawingRectangle : stopDrawing}
                //  style={{cursor: Cursor)}}
              
                // style={{cursor: 'url(C:\Users\DELL\Desktop\paint\CDAC-Final-main\src\Components\homecomponents\bb1.jpeg)'}}
                
                
                >
            </canvas>
            {/* <Cursor /> */}
            <div className='style' style={{width: "50px", height: "50px", backgroundColor: selected}}></div>
            <div className='contain'>
          
            {colors.map((color, index)=>(
                <div key={index} className="card">
                     
                    <div style={{
                        background:color,
                        filter: "brightness(85%)"
                    }}
                    
                    className="box" onClick={()=>setSelected(color)}/>
                    
            </div>
            
            ))}
          
            <div className='tools'>
                <button className='hi' onClick={setToDraw}>
                <img  src="brush.webp" width="45" height="35" alt="" />
                </button>
                <button className='hi' onClick={setToErase}>
                <img  src="erase-512.webp" width="35" height="35" alt="" />
                </button>
                <button className='hi'><Link to="/DrawRectangle">
                <img  src="rectangle.webp" width="35" height="35" alt="" /></Link>
                </button>
                <button className='hi'><Link to="/DrawRectangle">
                <img  src="Triangle.jpg" width="35" height="35" alt="" /></Link>
                </button>
                <button className='hi' onClick={()=>setOption('rect')}>
                <img  src="circle.png" width="35" height="35" alt="" />
                </button>
                {/* <a id="download_image_link" href="download_link" onClick={saveImageToLocal}>Download Image</a> */}
            </div>
          
            </div>
         {/* <FeatureGroup>
            <EditControl position="topright"/>
            </FeatureGroup>    */}
        </div>
        
    )
}

export default DrawingCanvas;