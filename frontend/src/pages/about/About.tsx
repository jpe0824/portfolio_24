import "./About.css";
import {
  DownArrowButton,
  UpArrowButton,
} from "../../components/buttons/Buttons";
import { Box, Grid, Paper } from "@mui/material";
import styles from "../../styles/styles";
import { useState } from "react";

function About() {
  const [isHovered1, setIsHovered1] = useState<boolean>(false);
  const [isHovered2, setIsHovered2] = useState<boolean>(false);
  const [isHovered3, setIsHovered3] = useState<boolean>(false);
  const [isHovered4, setIsHovered4] = useState<boolean>(false);

  const titleStyle1 = isHovered1 ? { marginBottom: 0 } : {};
  const titleStyle2 = isHovered2 ? { marginBottom: 0 } : {};
  const titleStyle3 = isHovered3 ? { marginBottom: 0 } : {};
  const titleStyle4 = isHovered4 ? { marginBottom: 0 } : {};

  return (
    <div
      style={{ flexGrow: 1, height: "90vh", width: "100vw", overflow: "auto" }}
    >
      <UpArrowButton page="/" direction="up" />
      <h1 style={styles.title}>About</h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "5vw", // Centers the Box itself
          marginRight: "5vw", // Centers the Box itself
          marginTop: "5vh", // Centers the Box itself
          marginBottom: "5vh", // Centers the Box itself
          width: "90%", // Adjust as needed
        }}
      >
        <Grid container spacing={2}>
          {/* Top container */}
          <Grid
            item
            xs={12}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <Paper style={styles.paper}>
              <h2 style={titleStyle1}>
                Creative Developer and Life-Long Learner
              </h2>
              {isHovered1 && (
                <p>
                  I have always loved technology and creating things. When I was
                  younger it came in the form of building Legos, then video
                  games like Minecraft or some city builder. Now I enjoy the
                  creativity and challenges of building, maintaining, and
                  improving software.
                </p>
              )}
            </Paper>
          </Grid>

          {/* Bottom three containers */}
          <Grid
            item
            xs={12}
            sm={4}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <Paper style={styles.bottomPaper}>
              <h2 style={titleStyle2}>As a Developer</h2>
              {isHovered2 && (
                <>
                  <p>
                    I pride myself in putting the best code forward. I take time
                    to ensure my code is{" "}
                    <b>
                      <i>readable</i>
                    </b>{" "}
                    and{" "}
                    <b>
                      <i>maintainable</i>
                    </b>
                    . I am always willing to take feedback and use that to
                    improve my skills.
                  </p>
                  <p>
                    I am always excited to work on a project. I look to learn
                    something new and am happy to lead the way when needed.
                  </p>
                </>
              )}
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <Paper style={styles.bottomPaper}>
              <h2 style={titleStyle3}>As a Colleague</h2>
              {isHovered3 && (
                <>
                  <p>
                    Communication is key. With my background in sales I have
                    learned to communicate with{" "}
                    <b>
                      <i>every</i>
                    </b>{" "}
                    type of person. I am always happy to voice my opinion or
                    welcome others' as well.
                  </p>
                  <p>
                    I am a team player and happy to help my peers when needed. I
                    prefer to go into what I call code mode (blast music for a
                    couple hours and vigorously type away) but when needed,
                    jumping on a call to break down a complicated problem can be
                    just as fun.
                  </p>
                </>
              )}
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            <Paper style={styles.bottomPaper}>
              <h2 style={titleStyle4}>As a Person</h2>
              {isHovered4 && (
                <>
                  <p>
                    Work life balance is very important to me. I gravitated to
                    this career because of just that.
                  </p>
                  <p>
                    I make sure to take time for my family and myself. I love
                    spending time with my kids, whether we are hiking, playing
                    games or cozied up to a movie.
                  </p>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <DownArrowButton page="/skills" direction="down" />
    </div>
  );
}

export default About;
