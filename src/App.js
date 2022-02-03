import Container from "@mui/material/Container";
import "./App.css";
import {
  Stack,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
// img import
import WebLogo from "./technologies/c1.PNG";
import c2 from "./technologies/c2.PNG";
import c3 from "./technologies/c3.PNG";
import c4 from "./technologies/c4.PNG";
import c5 from "./technologies/c5.PNG";
import c6 from "./technologies/c6.PNG";

import web1 from "./technologies/web1.PNG";
import web2 from "./technologies/web2.PNG";
import web3 from "./technologies/web3.PNG";
import web4 from "./technologies/web4.PNG";

import mb1 from "./technologies/mb1.PNG";
import mb2 from "./technologies/mb2.PNG";
import mb3 from "./technologies/mb3.PNG";

import ui1 from "./technologies/ui1.PNG";
import ui2 from "./technologies/ui2.PNG";
import ui3 from "./technologies/ui3.PNG";
import ui4 from "./technologies/ui4.PNG";
import ui5 from "./technologies/ui5.PNG";
import ui6 from "./technologies/ui6.PNG";

import soft1 from "./technologies/soft1.PNG";
import soft2 from "./technologies/soft2.PNG";
import soft3 from "./technologies/soft3.PNG";

import block1 from "./technologies/block1.PNG";
import block2 from "./technologies/block2.PNG";
import block3 from "./technologies/block3.PNG";
import block4 from "./technologies/block4.PNG";
import block5 from "./technologies/block5.PNG";

import iot1 from "./technologies/iot1.PNG";
import iot2 from "./technologies/iot2.PNG";
import iot3 from "./technologies/iot3.PNG";
import iot4 from "./technologies/iot4.PNG";
import { useState } from "react";

function App() {
  const [index, setIndxe] = useState(0);
  const matches = useMediaQuery("(max-width:760px)");

  const data = [
    {
      title: "Web Design & Development",
      info: "Scalable web product development at any stage and ongoing support after launch.",
      imgs: [web1, web2, web3, web4],
    },
    {
      title: "Mobile App Development",
      info: "Consultation on updating existing mobile applications and development of apps that look and perform great on both iOS and Android.",
      imgs: [mb1, mb2, mb3],
    },
    {
      title: "UI/UX Design",
      info: "Award-winning UI/UX consultation and development services to design software products that win the hearts of your customers.",
      imgs: [ui1, ui2, ui3, ui4, ui5, ui6],
    },
    {
      title: "Software Testing Consulting",
      info: "In-depth software QA testing and consultation to develop bug-free software products and meet quality standards.",
      imgs: [soft1, soft2, soft3],
    },
    {
      title: "Blockchain Development",
      info: "Wide range of reliable and tailored blockchain software application development services at your disposal.",
      imgs: [block1, block2, block3, block4, block5],
    },
    {
      title: "IoT App Development",
      info: "Proficient IoT app developers to build world-class, scalable, and future-ready IoT applications.",
      imgs: [iot1, iot2, iot3, iot4],
    },
  ];

  return (
    <div className="App">
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box fontSize="36px" fontWeight="bold">
            <h2>
              Softwear
              <span style={{ color: " #2176ff" }}>
                {" "}
                Consulting &
                <br />
                Devoloment and Services...
              </span>
            </h2>
          </Box>

          <Box>
            <Typography>
              ...with the perfect blend of technology, expertise and innovation.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid
              mt={3}
              item
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "wrap",
              }}
              xs={12}
              md={6}
              spacing={3}
            >
              <Card
                onClick={() => setIndxe(0)}
                p={2}
                sx={{
                  alignItems: "center",
                  background: "#fff",
                  "&:focus": {
                    background: "#2176ff",
                  },

                  border: "1px solid #f7f7f7",
                  borderRadius: "12px",
                  boxShadow: "16px 16px 84px 0 rgb(0 0 0 / 3%)",
                  "&:hover": {
                    boxShadow: "0 0 11px 4px rgb(143, 139, 139)",
                  },
                  cursor: "pointer",
                  display: "flex",
                  height: "100px",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "20px",
                  width: { xs: "90%", md: "120px" },
                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <img src={WebLogo} alt="" />

                <CardContent>
                  <Box
                    fontSize="14px"
                    lineHeight="22px"
                    marginBottom="0"
                    paddingTop="10px"
                  >
                    Web Design & Development
                  </Box>
                </CardContent>
              </Card>
              <Card
                onClick={() => setIndxe(1)}
                p={2}
                sx={{
                  alignItems: "center",
                  background: "#fff",
                  "&:focus": {
                    background: "#2176ff",
                  },
                  border: "1px solid #f7f7f7",
                  borderRadius: "12px",
                  boxShadow: "16px 16px 84px 0 rgb(0 0 0 / 3%)",
                  "&:hover": {
                    boxShadow: "0 0 11px 4px rgb(143, 139, 139)",
                  },
                  cursor: "pointer",
                  display: "flex",
                  height: "100px",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "20px",

                  width: { xs: "90%", md: "120px" },

                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <img src={c2} alt="" />

                <CardContent>
                  <Box
                    fontSize="14px"
                    lineHeight="22px"
                    marginBottom="0"
                    paddingTop="10px"
                  >
                    Mobile App Development
                  </Box>
                </CardContent>
              </Card>
              <Card
                onClick={() => setIndxe(2)}
                p={2}
                sx={{
                  alignItems: "center",
                  background: "#fff",
                  "&:focus": {
                    background: "#2176ff",
                  },
                  border: "1px solid #f7f7f7",
                  borderRadius: "12px",
                  boxShadow: "16px 16px 84px 0 rgb(0 0 0 / 3%)",
                  "&:hover": {
                    boxShadow: "0 0 11px 4px rgb(143, 139, 139)",
                  },
                  cursor: "pointer",
                  display: "flex",
                  height: "100px",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "20px",

                  width: { xs: "90%", md: "120px" },

                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <img src={c3} alt="" />

                <CardContent>
                  <Box
                    fontSize="14px"
                    lineHeight="22px"
                    marginBottom="0"
                    paddingTop="10px"
                  >
                    UI/UX Design
                  </Box>
                </CardContent>
              </Card>
              <Card
                onClick={() => setIndxe(3)}
                p={2}
                sx={{
                  alignItems: "center",
                  background: "#fff",
                  "&:focus": {
                    background: "#2176ff",
                  },
                  border: "1px solid #f7f7f7",
                  borderRadius: "12px",
                  boxShadow: "16px 16px 84px 0 rgb(0 0 0 / 3%)",
                  "&:hover": {
                    boxShadow: "0 0 11px 4px rgb(143, 139, 139)",
                  },
                  cursor: "pointer",
                  display: "flex",
                  height: "100px",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "20px",

                  width: { xs: "90%", md: "120px" },

                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <img src={c4} alt="" />

                <CardContent>
                  <Box
                    fontSize="14px"
                    lineHeight="22px"
                    marginBottom="0"
                    paddingTop="10px"
                  >
                    Software Testing Consulting
                  </Box>
                </CardContent>
              </Card>
              <Card
                onClick={() => setIndxe(4)}
                p={2}
                sx={{
                  alignItems: "center",
                  background: "#fff",
                  "&:focus": {
                    background: "#2176ff",
                  },
                  border: "1px solid #f7f7f7",
                  borderRadius: "12px",
                  boxShadow: "16px 16px 84px 0 rgb(0 0 0 / 3%)",
                  "&:hover": {
                    boxShadow: "0 0 11px 4px rgb(143, 139, 139)",
                  },
                  cursor: "pointer",
                  display: "flex",
                  height: "100px",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "20px",

                  width: { xs: "90%", md: "120px" },

                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <img src={c5} alt="" />

                <CardContent>
                  <Box
                    fontSize="14px"
                    lineHeight="22px"
                    marginBottom="0"
                    paddingTop="10px"
                  >
                    Blockchain Development
                  </Box>
                </CardContent>
              </Card>
              <Card
                onClick={() => setIndxe(5)}
                p={2}
                sx={{
                  alignItems: "center",
                  background: "#fff",
                  "&:focus": {
                    background: "#2176ff",
                  },
                  border: "1px solid #f7f7f7",
                  borderRadius: "12px",
                  boxShadow: "16px 16px 84px 0 rgb(0 0 0 / 3%)",
                  "&:hover": {
                    boxShadow: "0 0 11px 4px rgb(143, 139, 139)",
                  },
                  cursor: "pointer",
                  display: "flex",
                  height: "100px",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "20px",

                  width: { xs: "90%", md: "120px" },

                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <img src={c6} alt="" />

                <CardContent>
                  <Box
                    fontSize="14px"
                    lineHeight="22px"
                    marginBottom="0"
                    paddingTop="10px"
                  >
                    IoT App Development
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box mb={1} m="20px 0px">
                <Typography variant="h5">{data[index].title}</Typography>

                <Box mb={1}>
                  <Typography>{data[index].info}</Typography>
                </Box>

                {/* images here  */}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {data[index].imgs.map((item) => (
                    <img src={item} style={{ padding: "10px" }} />
                  ))}
                </Box>
              </Box>

              <Box p={2}>
                <Button className="btn_black_border" variant="contained">
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
