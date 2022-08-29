import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getMatches } from "./api";
import { Persona, Match } from "./types";
import PersonaComponent from "./components/PersonaComponent";
import SelectPersona from "./components/SelectPersona";
import "./App.css";

function App() {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(true);
  const [matches, setMatches] = useState<Array<Match>>([]);
  const [persona, setPersona] = useState<Persona>("organizer");

  useEffect(() => {
    getMatches()
      .then(({ matches }) => setMatches(matches))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Dialog
        open={isDialogOpen}
        BackdropProps={{ style: { backgroundColor: "white" } }}
      >
        <DialogContent>
          <DialogTitle sx={{ p: 0, mb: 2 }}>Select your role</DialogTitle>
          <SelectPersona
            persona={persona}
            changeHandler={(e) => setPersona(e.target.value as Persona)}
          />
          <DialogActions sx={{ p: 0 }}>
            <Button
              variant="contained"
              sx={{ mt: 4 }}
              onClick={() => setDialogOpen(false)}
            >
              Continue
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <PersonaComponent persona={persona} matches={matches} />
      </Box>
    </>
  );
}

export default App;
