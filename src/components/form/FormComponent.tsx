import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  Grid2,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

// Create a visually hidden input component
const VisuallyHiddenInput = styled("input")({
  display: "none",
});

const FormComponent = () => {
  return (
    <Card sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Upload File and Enter Number of Questions
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload files
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  multiple
                />
              </Button>
            </Grid2>
            <Grid2 size={12}>
              <TextField
                id="number-of-questions"
                label="Number of Questions"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid2>
            <Grid2 size={12}>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FormComponent;
