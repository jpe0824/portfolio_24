import "./About.css";
import {
  DownArrowButton,
  UpArrowButton,
} from "../../components/buttons/Buttons";
import { Box, Grid, Paper } from "@mui/material";
import styles from "../../styles/styles";

function About() {
  return (
    <div style={{ flexGrow: 1, height: "80%", width: "100vw" }}>
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
          <Grid item xs={12}>
            <Paper style={styles.paper}>
              <h2>Creative Developer and Life-Long Learner</h2>
              <p>
                I have always loved technology and creating things. When I was
                younger it came in the form of building Legos, then video games
                like Minecraft or some city builder. Now I enjoy the creativity
                and challenges of building, maintaining, and improving software.
              </p>
            </Paper>
          </Grid>

          {/* Bottom three containers */}
          <Grid item xs={12} sm={4}>
            <Paper style={styles.paper}>
              <h3>As a Developer</h3>
              <p>
                I pride myself in putting the best code forward. I take time to
                ensure my code is{" "}
                <b>
                  <i>readable</i>
                </b>{" "}
                and{" "}
                <b>
                  <i>maintainable</i>
                </b>
                . I am always willing to take feedback and use that to improve
                my skills.
              </p>
              <p>
                I am always excited to work on a project. I look to learn
                something new and am happy to lead the way when needed.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper style={styles.paper}>Bottom Center Container</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper style={styles.paper}>Bottom Right Container</Paper>
          </Grid>
        </Grid>
      </Box>
      <DownArrowButton page="/skills" direction="down" />
    </div>
  );
}

export default About;
