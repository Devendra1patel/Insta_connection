import styled from "@emotion/styled";
import { Box, Button, Dialog } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fatchUserInfoUsingLogin } from "../../redux/slices/user";


const DialogContainer = styled(Dialog)`
    width:50%;
    height:auto;
    margin:50%;
    display:block;
    border:2px solid black;
    padding:0;
    margin:0;
    background-color: rgba(23, 247, 7, 0.4);
`;

const FormContainer = styled.form`
     margin:auto;
     display:block;
     width:100%;
     height:100%;
    //  border:2px solid white;
    background-color: rgba(227, 3, 252, 0.5);

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

const LoginDialogue = ({dialog,setDialog}) => 
{

    const dispatch = useDispatch();

    const [sign,setSign] = useState({
        "Name":"",
        "Username":"",
        "Gmail":"",
        "Password":""
    })


    function handleClose(e)
    {
        e.preventDefault();
        setDialog({...dialog,logIn:false});
        console.log("hello-",dialog);
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        dispatch(fatchUserInfoUsingLogin(sign));
        console.log("Login Dispatch called-");
        setDialog({...dialog,present:true,signUp:false})
        
    }
    function handleChange(e){
        setSign({...sign,[e.target.name]:e.target.value});
    }
    // function recheck()
    // {
    //     console.log(sign);
    // }

    return (
        <>
            <DialogContainer open ={dialog.logIn}  >
                <FormContainer onSubmit={(e)=>handleSubmit(e)} >
                    <Box>
                        {/* <label htmlFor="Username">Username</label> */}
                        <input type="text" name="Username" onChange={(e)=>handleChange(e)}  placeholder="Username" style={{width:'20rem',height:'30px',marginTop:'7px'}} />
                    </Box>
                    <Box>
                        {/* <label htmlFor="Password">Password</label> */}
                        <input type="text" name="Password" onChange={(e)=>handleChange(e)}  placeholder="Password" style={{width:'20rem',height:'30px',marginTop:'7px'}}/>
                    </Box>
                   <Button type="submit"  onClick={(e)=>handleSubmit(e)} style={{width:'20rem',height:'30px',marginTop:'7px', backgroundColor:'black',color:'white'}} >Submit</Button>
                </FormContainer>
                <Button type="submit"  style={{height:'30px'}} onClick={(e)=>handleClose(e)} >X</Button>
            </DialogContainer>
        </>
    )
}

export default LoginDialogue;