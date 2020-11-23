import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import "./App.css";
import SimpleMap from "./SimpleMap";
function App() {
  const [open, setOpen] = useState(true);
  const [isReady, setStatus] = useState(false);

  useEffect(() => {
    fetch("https://arcane-ravine-24877.herokuapp.com")
      .then(() => setStatus(true))
      .catch(() => setStatus(false));
  }, []);

  return (
    <div className="App">
      <Dialog open={open}>
        <DialogContent>
          {!isReady
            ? "This server shut itself down due to inactivity, and it is rebooting now. Give it a few seconds and try it again."
            : "🎉 Server is ready! Click on the map to get wind detail on that location."}
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            variant="contained"
            onClick={() =>
              !isReady ? window.location.reload() : setOpen(false)
            }
          >
            {!isReady ? "Try it again" : "Got it"}
          </Button>
        </DialogActions>
      </Dialog>
      <SimpleMap />
    </div>
  );
}

export default App;
