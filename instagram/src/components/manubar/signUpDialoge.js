import styled from "@emotion/styled";
import { Box, Button, Dialog } from "@mui/material";
import { useState } from "react";
// import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux'
import { fatchUserInfo } from "../../redux/slices/user";


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
const InputBox = styled('Box')`
    width:100%;
    margin-top:7px;
`;

// const signup = {
//     "Name":"",
//     "Username":"",
//     "Gmail":"",
//     "Password":""
// }

const SignUpDialogue = ({dialog,setDialog}) => 
{
    const dispatch = useDispatch();
    const data = useSelector(state=>state.userInfo);

    const [sign,setsign] = useState({
        "Name":"",
        "Username":"",
        "Gmail":"",
        "Password":""
    })


    function handleClose(e)
    {
        e.preventDefault();
        setDialog({...dialog,signUp:false});
        console.log("hello-",dialog);
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        dispatch(fatchUserInfo(sign));
        setDialog({...dialog, present:true,signUp:false})
        // axios.post('http://localhost:5500/user', sign)
        // .then((res)=>{
        //     console.log(res);
        // })
        // .catch(error=>{
        //     console.log(error.massege);
        // })
        
    }
    function handleChange(e){
        setsign({...sign,[e.target.name]:e.target.value});
        console.log("selector call by X-",data);
    }
    // function handleSubmit()
    // {
    // }

    return (
        <>
            <DialogContainer open ={dialog.signUp}  >
                <FormContainer onSubmit={(e)=>handleSubmit(e)} >
                    <InputBox>
                        <input type="text"  name="Name"  onChange={(e)=>handleChange(e)}  placeholder="Name" style={{width:'20rem',height:'30px',marginTop:'7px'}} />
                    </InputBox>
                    <Box>
                        {/* <label htmlFor="Username">Username</label> */}
                        <input type="text" name="Username" onChange={(e)=>handleChange(e)}  placeholder="Username" style={{width:'20rem',height:'30px',marginTop:'7px'}} />
                    </Box>
                    <Box>
                        
                        <input type="text" name="Gmail" onChange={(e)=>handleChange(e)}  placeholder="Gmail" style={{width:'20rem',height:'30px',marginTop:'7px'}} />
                    </Box>
                    <Box>
                        {/* <label htmlFor="Password">Password</label> */}
                        <input type="text" name="Password" onChange={(e)=>handleChange(e)}  placeholder="Password" style={{width:'20rem',height:'30px',marginTop:'7px'}}/>
                    </Box>
                   <Button type="submit"  style={{width:'20rem',height:'30px',marginTop:'7px', backgroundColor:'black',color:'white'}} >Submit</Button>
                </FormContainer>
                <Button type="submit"  style={{height:'30px'}} onClick={(e)=>handleClose(e)} >X</Button>
            </DialogContainer>
        </>
    )
}

export default SignUpDialogue;