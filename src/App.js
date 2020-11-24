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
          {!isReady ? (
            "The server shut itself down due to inactivity, and it is rebooting now. Give it a few seconds and try it again."
          ) : (
            <div>
              🎉 Click on the map to get aggragated wind forecast at that
              location.
              <ul>
                <li>Data is from NOAA forecast, NOT history data</li>
                <li>You can change hour window</li>
              </ul>
            </div>
          )}
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
