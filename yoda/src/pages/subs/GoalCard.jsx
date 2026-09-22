import React, { useContext } from "react";
import { Paper, Typography, Button, Grid } from "@mui/material";
import { PeopleContext } from "../../context/PeopleContext";
import finance from "../../assets/images/finance.png";
const GoalCard = () => {
    const { currentUserGoals } = useContext(PeopleContext);

    if (!Array.isArray(currentUserGoals) || currentUserGoals.length === 0) {
        return <p>No goals found.</p>;
    }
    const colors = [
        "#9c89b8",
        "#f0a6ca",
        "#EFC3E6",
        "#F0E6EF",
        "#B8BEDD",
        "#ffb5a7",
        "#b7e4c7",
    ];

    return (
        <div>
            {currentUserGoals.map((goal, index) => (
                <Paper
                    key={index}
                    elevation={0}
                    sx={{
                        position: "relative",
                        borderRadius: "10px",
                        backgroundColor: colors[index % colors.length],
                        padding: 2,
                        margin: 1,
                        maxHeight: 200,
                        maxWidth: "100vw",
                        overflowX: "hidden",
                    }}
                >
                    <Grid container>
                        <Grid size={{ xs: 8, sm: 8, md: 8 }}>
                            <Typography variant="body1" color="text.primary">
                                {goal.sublabel}
                            </Typography>
                            <Typography variant="h4" color="text.primary">
                                {goal.description}
                            </Typography>
                            <Button
                                variant="contained"
                                href={goal.link}
                                target="_blank"
                                sx={{ marginTop: 5, borderRadius: "10px" }}
                            >
                                Complete
                            </Button>
                        </Grid>
                        <Grid key={index} size={{ xs: 4, sm: 4, md: 4 }}>
                            <img src={finance} alt="" height={150}></img>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div>
    );
};

export default GoalCard;
