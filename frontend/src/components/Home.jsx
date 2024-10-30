import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import {
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Image,
  HStack,
  Box,
} from "@chakra-ui/react";
import { SiUdemy } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";
import { SiCoursera } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import introVideo from "../assets/videos/intro.mp4"

import vg from "../assets/images/bg.png";
function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-around"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
          <VStack width={"full"} alignItems={["center", "flex-end"]}>
            <Heading children="Learn from expert" />
            <Text children="Find valuable content at reasonable price" />
            <Link to="/courses">
              <Button size={"lg"} colorScheme="yellow">
                Explore more
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={"md"}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Box padding={"10"} bg="blackAlpha.800">
        <Heading
          textAlign="center"
          fontFamily="body"
          color={"yellow.400"}
          children="OUR BRANDS"
        />
        <HStack
          className="brandsBanner"
          spacing={8}
          sx={{ "& svg": { color: "white", fontSize: "3rem" } }}
          justifyContent={"space-evenly"}
          marginTop="4"
        >
          <SiUdemy />
          <CiYoutube />
          <SiCoursera />
          <FaLinkedin />
          <FaFacebook />
        </HStack>
      </Box>
      <div className="container2">
        <video
        //  autoPlay
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}>
         
        </video>
      </div>
    </section>
  );
}

export default Home;
