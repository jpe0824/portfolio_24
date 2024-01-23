import { DownArrowButton, UpArrowButton } from "../../components/Buttons";
import styles from "../../styles/styles";
import { Box, Grid, Paper, Typography } from "@mui/material";
import DynamicIcon from "../../components/Icons";

function Skills() {
  const skills = [
    {
      iconName: "FaPython",
      title: "Python",
      color: "#4B8BBE",
      date: "2021/01/01",
    },
    {
      iconName: "FaGitAlt",
      title: "Version Control",
      color: "#D95836",
      date: "2021/06/01",
    },
    {
      iconName: "BiLogoTypescript",
      title: "TS | JS",
      color: "#4671BB",
      date: "2021/09/01",
    },
    {
      iconName: "HiCodeBracket",
      title: "Full Stack Web Dev",
      color: "#6BA853",
      date: "2021/09/01",
    },
    {
      iconName: "PiCursorClickFill",
      title: "UI/UX",
      color: "#F7DF1E",
      date: "2021/09/01",
    },
    {
      iconName: "FaDocker",
      title: "Docker",
      color: "#0DB7ED",
      date: "2022/06/01",
    },
    {
      iconName: "PiBracketsCurlyBold",
      title: "C++",
      color: "#275293",
      date: "2022/06/01",
    },
    {
      iconName: "FaAngular",
      title: "Angular",
      color: "#C3002F",
      date: "2022/07/01",
    },
    {
      iconName: "FaReact",
      title: "React & React Native",
      color: "#5DCEF4",
      date: "2022/12/01",
    },
    {
      iconName: "FaServer",
      title: "FastAPI | Django",
      color: "#3E9288",
      date: "2023/01/01",
    },
    { iconName: "GrMysql", title: "SQL", color: "#00758F", date: "2023/01/01" },
    {
      iconName: "FaDatabase",
      title: "DB Management",
      color: "#426084",
      date: "2023/01/01",
    },
    {
      iconName: "AiOutlineRobot",
      title: "AI Tools",
      color: "#439C7E",
      date: "2023/01/01",
    },
    {
      iconName: "SiMongodb",
      title: "MongoDB",
      color: "#4DB33D",
      date: "2023/08/01",
    },
    { iconName: "FaRust", title: "Rust", color: "#E05416", date: "2024/01/01" },
    { iconName: "FaApple", title: "Mac", color: "#BAC9DF", date: "2014/06/01" },
    {
      iconName: "FaWindows",
      title: "Windows",
      color: "#0078D6",
      date: "2014/06/01",
    },
    {
      iconName: "FaLinux",
      title: "Linux",
      color: "#FCC624",
      date: "2021/06/01",
    },
  ];
  const getYOE = (startDateString: string | undefined): number | string => {
    if (!startDateString) return 0;
    const startDate = new Date(startDateString);
    const now = new Date();
    const years = now.getFullYear() - startDate.getFullYear();
    const months = now.getMonth() - startDate.getMonth();
    let totalMonths = years * 12 + months;

    // Round to nearest half year
    totalMonths = Math.round(totalMonths / 6) * 6;
    let yoe;
    if (totalMonths / 12 > 10) yoe = "10+";
    else if (totalMonths / 12 > 5) yoe = "5+";
    else if (totalMonths / 12 < 1) yoe = "<1";
    else yoe = totalMonths / 12;

    return yoe;
  };

  return (
    <Box style={styles.bodyContainer}>
      <UpArrowButton page="/about" direction="up" />
      <Typography variant="h2" style={styles.title}>
        Skills
      </Typography>
      <Box sx={styles.pageContainer}>
        <Paper>
          <Grid container spacing={2}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
                <Box sx={styles.iconContainer}>
                  <Typography variant="h3" color={skill.color}>
                    <DynamicIcon name={skill.iconName} />
                  </Typography>
                  <Typography variant="body1">{skill.title}</Typography>
                  <Typography variant="body2">
                    {getYOE(skill.date)} YOE
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
      <DownArrowButton page="/portfolio" direction="down" />
    </Box>
  );
}

export default Skills;
