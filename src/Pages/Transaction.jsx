import React from "react";
import AdminNavbar from "../Components/Sidebar";

import { Box, Text ,Button} from "@chakra-ui/react";
import {GiSandsOfTime} from "react-icons/gi"
import {HiOutlineReceiptRefund} from "react-icons/hi"
const djdata=[{
    event:"RJB345",
    name:"Thomas",
    date:"12 Mar 2023",
    status:"Pending"
},
{
    event:"RJB345",
    name:"Thomas",
    date:"12 Mar 2023",
    status:"Pending"
},
{
    event:"RJB345",
    name:"Thomas",
    date:"12 Mar 2023",
    status:"Delivered"
},
{
    event:"RJB345",
    name:"Thomas",
    date:"12 Mar 2023",
    status:"Pending"
},
{
    event:"RJB345",
    name:"Thomas",
    date:"12 Mar 2023",
    status:"Refund"
}]

const Transaction = () => {
  return (
    <Box>
      <AdminNavbar>
        <Box>
          <Text
            textAlign={"left"}
            fontFamily={"Poppins"}
            fontWeight={600}
            lineHeight={"63px"}
            fontSize={"42px"}
            fontStyle={"normal"}
            
          >
            Transaction
          </Text>

          <hr style={{ border: "0.5px solid #787878", marginTop: "10px" }} />

          <Box
            w={"100%"}
            h={"40px"}
            border="0.5px solid black"
            mt={"30px"}
            fontSize={"18px"}
            display={"flex"}
            justifyContent={"space-between"}
            textAlign={"center"}
            alignItems={"center"}
            
          >
            <Text
              marginLeft={"10px"}
              fontFamily={"Poppins"}
              fontWeight={600}
              lineHeight={"63px"}
              fontSize={"18px"}
              fontStyle={"normal"}
              color= {"#787878"}
            >
              Event
            </Text>
            <Text
           marginLeft={"10px"}
           fontFamily={"Poppins"}
           fontWeight={600}
           lineHeight={"63px"}
           fontSize={"18px"}
           fontStyle={"normal"}
           color= {"#787878"}>DJ Name</Text>
            <Text
            marginLeft={"10px"}
            fontFamily={"Poppins"}
            fontWeight={600}
            lineHeight={"63px"}
            fontSize={"18px"}
            fontStyle={"normal"}
            color= {"#787878"}>Date</Text>
            <Text 
            marginLeft={"10px"}
            fontFamily={"Poppins"}
            fontWeight={600}
            lineHeight={"63px"}
            fontSize={"18px"}
            fontStyle={"normal"}
            color= {"#787878"}
            marginRight={"50px"}>Status</Text>
          </Box>
          <Box>
            {djdata&&djdata.map(({event,name,status,date})=>(
                <Box
                w={"100%"}
                h={"40px"}
                borderBottom="0.5px solid black"
                mt={"30px"}
                display={"flex"}
                justifyContent={"space-between"}
                textAlign={"center"}
                alignItems={"center"}
                  >
                 <Text
              marginLeft={"10px"}
              fontFamily={"Poppins"}
              fontWeight={600}
              lineHeight={"63px"}
              fontSize={"18px"}
              fontStyle={"normal"}
              color= {"#787878"}
            >
              {event}
            </Text>
            <Text
           marginLeft={"10px"}
           fontFamily={"Poppins"}
           fontWeight={600}
           lineHeight={"63px"}
           fontSize={"18px"}
           fontStyle={"normal"}
           color= {"#787878"}>{name}</Text>
            <Text
            marginLeft={"10px"}
            fontFamily={"Poppins"}
            fontWeight={600}
            lineHeight={"63px"}
            fontSize={"18px"}
            fontStyle={"normal"}
            
            color= {"#787878"}>{date}</Text>
            <Button 
           w={"100px"}
            h={"30px"}

            color="white"
            bg={
                status === "Pending"
                  ? '#9A4A4D'
                  : status === "Delivered"
                  ? '#63D471'
                  : '#FB9847'
              }
            alignItems={"center"}
            borderRadius={"10px"}
            marginRight={"30px"}>
                {status=="Pending"?<GiSandsOfTime/>:
                status === "Refund"? <HiOutlineReceiptRefund/>:
                    
                    <HiOutlineReceiptRefund/>
                } {status}</Button>
                </Box>
            ))}
          </Box>
        </Box>
        <Box >
            <Text mt={"60px"} fontSize="16px">Rows Per page 10</Text>
        </Box>
      </AdminNavbar>
    </Box>
  );
};

export default Transaction;
