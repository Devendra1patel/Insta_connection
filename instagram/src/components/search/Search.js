import styled from "@emotion/styled";
import { Box, Button, Dialog } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUserInfo } from "../../redux/slices/findUser";
import ShortShowProfile from "./ShortShowProfile";


const DialogContainer = styled('Box')`
    width:60%;
    height:auto;
    margin:0 auto; 
    display:block;
    border:1px solid #363636;
    padding:0;
    margin:0;
    background-color: rgba(0,0,0, 0.4);
`;

const FormContainer = styled.form`
     margin:auto;
     display:block;
    //  width:100vw;
     height:100%;
    //  border:2px solid red;
    // background-color: rgba(0,0,0, 0.9);

`;
// const InputBox = styled('Box')`
//     width:100%;
//     margin-top:7px;
// `;

// const signup = {
//     "Name":"",
//     "Username":"",
//     "Gmail":"",
//     "Password":""
// }
const inputBox = {
     display:'flex',
     justifyContent:'center',
     alignItems: 'center',
     height:'20%',
     backgroundColor:'#363636'

}
const showProfile =
{
  display:'flex',
  justifyContent:'center',
  width:'100%',
  height:'80%',
  backgroundColor:'red'

}
const Search = () => 
{
    const data = useSelector(state=>state.findUser);

    const dispatch = useDispatch();

    const [sign,setSign] = useState({
        "Username":""
    })


    function handleSubmit(e)
    {
        e.preventDefault();
        console.log("findUser Dispatch called-data-",sign);
        dispatch(findUserInfo(sign));
        console.log("findUser Dispatch called-");
        // setDialog({...dialog,present:true,signUp:false})
        
    }
    function handleChange(e){
        setSign({"Username":e.target.value});
    }
    

    return (
        <>
            <DialogContainer  >
                <FormContainer onSubmit={(e)=>handleSubmit(e)} >
                    <Box sx={inputBox} >
                        {/* <label htmlFor="Username">Username</label> */}
                        <input type="text" name="Username" onChange={(e)=>handleChange(e)}  placeholder="Username" style={{width:'75%',border:'2px solid #0ffc02',borderRadius:'10px',backgroundColor:'#fcc900',color:'black',height:'40px',margin:'5px'}} />
                        <Button type="submit"  onClick={(e)=>handleSubmit(e)} style={{width:'40px',height:'40px',marginTop:'', backgroundColor:'black',borderRadius:'10px',color:'#fcc900',margin:'5px'}} >X</Button>
                    </Box>
                    <Box sx={showProfile} >
                      {
                         !data ||  data.map((obj)=>{
                          return(
                            <>
                                <ShortShowProfile obj={obj}/>
                            </>
                          )
                        })
                      }
                    </Box>
                </FormContainer>
            </DialogContainer>
        </>
    )
}

export default Search;