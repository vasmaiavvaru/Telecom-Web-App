import React from "react";
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

export const PaymentSuccess = ()=>{

    return(
        <div>
            <h3 style={{minHeight:"75vh", display:"grid",placeContent:"center",gridAutoFlow:"column",gap:"5px"}}>
                <div style={{color:"green"}}><VerifiedRoundedIcon/></div><div style={{fontSize:"19px"}}>Payment Successful</div>
            </h3>
            
        </div>
    )
}