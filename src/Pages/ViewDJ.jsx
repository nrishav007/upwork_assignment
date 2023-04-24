import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import AdminNavbar from "../Components/Sidebar";
const ViewDJ = () => {
  let calender = [
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
  ];
  const rating = [
    {
      name: "Robert Smith",
      comment:
        "Aliquam vitae dolor eu quam suscipit sodales. Curabitur metus leo, gravida eleifend magna in, fringilla finibus purus. Pellentesque quis lorem massa. Suspendisse eget nulla vel dolor rhoncus..",
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
    {
      name: "Robert Smith",
      comment:
        "Aliquam vitae dolor eu quam suscipit sodales. Curabitur metus leo, gravida eleifend magna in, fringilla finibus purus. Pellentesque quis lorem massa. Suspendisse eget nulla vel dolor rhoncus..",
      image:
        "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
    },
  ];
  return (
    <Box>
      <AdminNavbar>
        <SimpleGrid columns={[1, 1, 2, 2]}>
          <Flex direction={"column"} textAlign={"left"}>
            <Image
              w={["100px","200px","300px","414px"]}
              src={
                "https://st.depositphotos.com/1026550/4167/i/600/depositphotos_41679805-stock-photo-dj-silhouette.jpg"
              }
            />
            <Text fontSize={"40px"}>DJ Khalid</Text>
            <Text w={["100%", "70%", "50%", "40%"]}>
              Aliquam vitae dolor eu quam suscipit sodales. Curabitur metus leo,
              gravida eleifend magna in, fringilla finibus purus. Pellentesque
              quis lorem massa. Suspendisse eget nulla vel dolor rhoncus..
            </Text>
            <Text>Specialties</Text>
            <Flex
              gap={"20px"}
              fontSize={"12px"}
              direction={["column", "row", "row", "row"]}
            >
              <Box
                p={"10px 20px"}
                bgColor={"#63D471"}
                color={"white"}
                borderRadius={"18px"}
              >
                Hiphop
              </Box>
              <Box
                p={"10px 20px"}
                bgColor={"#63D471"}
                color={"white"}
                borderRadius={"18px"}
              >
                Afrobeats
              </Box>
              <Box
                p={"10px 20px"}
                bgColor={"#63D471"}
                color={"white"}
                borderRadius={"18px"}
              >
                Souls
              </Box>
            </Flex>
          </Flex>
          <Flex direction={"column"} textAlign={"left"}>
            <Text fontSize={"32px"}>Upcoming Events</Text>
            <Text>April,2023</Text>
            <SimpleGrid columns={"7"}>
              <Box>Sat</Box>
              <Box>Sun</Box>
              <Box>Mon</Box>
              <Box>Tue</Box>
              <Box>Wed</Box>
              <Box>Thu</Box>
              <Box>Fri</Box>
            </SimpleGrid>
            <SimpleGrid columns={"7"} gap={"20px"} textAlign={"left"}>
              {calender.map(({ image }) => {
                return <Image src={image} w={"100px"} />;
              })}
            </SimpleGrid>
            <Text fontSize={"32px"}>Rating</Text>
            <Flex direction={"column"}>
            {rating.map(({ image, name, comment }) => {
              return (
                <Flex mb={"30px"} gap={"10px"} direction={["column","column","row","row"]}>
                  <Box>
                    <Image
                      src={image}
                      w={["100px","100px","200px","200px"]}
                      h={"75px"}
                      borderRadius={"50%"}
                      border={"1px solid blue"}
                    />
                  </Box>
                  <Box>
                    <Flex direction={"column"} textAlign={"left"}>
                      <Text fontSize={"18px"} fontWeight={"bold"}>{name}</Text>
                      <Text>{comment}</Text>
                    </Flex>
                  </Box>
                </Flex>
              );
            })}
            </Flex>
          </Flex>
        </SimpleGrid>
      </AdminNavbar>
    </Box>
  );
};

export default ViewDJ;
