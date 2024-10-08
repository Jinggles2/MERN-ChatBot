import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Logo = () => {
    return (
    <div style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
        }}
        >
        <Link to={"/"}>
            <img src="openai.png"
            alt="openai"
            width={"30px"}
            height={"30px"}
            className="image-inverted"
            />
        </Link>
        <Typography sx={{display: {md:"block",sm:"block",xs:"block"}}}>
            <span style={{fontSize: "20px"}}>MERN</span>-GPT
        </Typography>
    </div>
    );
};

export default Logo;