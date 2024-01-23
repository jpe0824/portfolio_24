import { DownArrowButton, UpArrowButton } from "../../components/Buttons";
import styles from "../../styles/styles";
import { Box, Grid, Paper, Typography } from "@mui/material";
import DynamicIcon from "../../components/Icons";

function Skills() {
  const skills = [
    { iconName: "BiLogoTypescript", title: "TS | JS", color: "#4671BB" },
    { iconName: "PiBracketsCurlyBold", title: "C++", color: "#275293" },
    { iconName: "FaRust", title: "Rust", color: "#E05416" },
    { iconName: "FaReact", title: "React & React Native", color: "#5DCEF4" },
    { iconName: "FaServer", title: "FastAPI | Django", color: "#3E9288" },
    { iconName: "FaAngular", title: "Angular", color: "#C3002F" },
    { iconName: "SiMongodb", title: "MongoDB", color: "#4DB33D" },
    {
      iconName: "HiCodeBracket",
      title: "Full Stack Web Dev",
      color: "#6BA853",
    },
    { iconName: "GrMysql", title: "SQL", color: "#00758F" },
    { iconName: "FaDatabase", title: "DB Management", color: "#426084" },
    { iconName: "AiOutlineRobot", title: "AI Tools", color: "#439C7E" },
    { iconName: "FaGitAlt", title: "Version Control", color: "#D95836" },
    { iconName: "FaDocker", title: "Docker", color: "#0DB7ED" },
    { iconName: "FaApple", title: "Mac", color: "#BAC9DF" },
    { iconName: "FaLinux", title: "Linux", color: "#FCC624" },
    { iconName: "FaWindows", title: "Windows", color: "#0078D6" },
  ];

  return (
    <div style={styles.bodyContainer}>
      <UpArrowButton page="/about" direction="up" />
      <h1 style={styles.title}>Skills</h1>
      <Box sx={styles.pageContainer}>
        <Paper>
          <Grid container spacing={2}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
                <Box sx={styles.pageContainer}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h3" color={skill.color}>
                      <DynamicIcon name={skill.iconName} />
                    </Typography>
                    <Typography variant="body1">{skill.title}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
      <DownArrowButton page="/portfolio" direction="down" />
    </div>
  );
}

export default Skills;
