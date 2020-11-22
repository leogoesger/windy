import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { MdLocationOn, MdCancel } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  TextField,
  IconButton,
  CircularProgress,
} from "@material-ui/core";

const AnyReactComponent = ({ text }) => (
  <MdLocationOn size={42} style={{ color: "purple" }} />
);

const SimpleMap = function () {
  const [latLng, setLatLng] = useState();
  const [hours, setHours] = useState(10);
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (latLng?.length === 2) {
      setError(false);
      setLoading(true);
      fetch(
        `https://arcane-ravine-24877.herokuapp.com/v1/${latLng[0]},${latLng[1]}/${hours}`
      )
        .then((response) => {
          if (response.status === 400) {
            throw new Error("your error message here");
          }
          return response.json();
        })
        .then((d) => {
          setResponse(d);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }
  }, [latLng, hours]);

  const reset = () => {
    setLatLng();
    setError(false);
    setLoading(false);
  };

  return (
    <>
      <Dialog open={!!latLng} onClose={reset} fullScreen>
        <IconButton
          onClick={reset}
          size="small"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          <MdCancel size={40} style={{ color: "red" }} />
        </IconButton>
        <DialogContent style={{ padding: "2%" }}>
          {latLng?.length === 2 && (
            <h4>
              Lat: {latLng[0].toFixed(4)}, Lng: {latLng[1].toFixed(4)}, Hours:{" "}
              {hours}
            </h4>
          )}
          <TextField
            name="hours-input"
            value={hours}
            fullWidth
            type="number"
            min="10"
            max="100"
            step="10"
            variant="outlined"
            label="Change Hour Window"
            onChange={(e) => setHours(Number(e.target.value))}
          />
          <div
            style={{
              backgroundColor: "#dddbd4",
              padding: "10px",
              overflow: "scroll",
              marginTop: 10,
            }}
          >
            {error && (
              <p>
                Sorry, something went wrong! This could happen for a couple
                reasons. 1. This free server shuts down every 15 mins due to
                inactivity. 2. NOAA have not updated their hourly yet.{" "}
              </p>
            )}
            {loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <CircularProgress style={{ color: "white" }} />
              </div>
            )}
            {!loading && response?.AggregatedWind && (
              <div>
                <h3 style={{ margin: 0 }}>
                  Elevation: {response?.NOAAElevation?.value} m
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <Region info={response.AggregatedWind.N} direction="N" />
                  <Region info={response.AggregatedWind.E} direction="E" />
                  <Region info={response.AggregatedWind.S} direction="S" />
                  <Region info={response.AggregatedWind.W} direction="W" />
                  <Region info={response.AggregatedWind.NE} direction="NE" />
                  <Region info={response.AggregatedWind.NW} direction="NW" />
                  <Region info={response.AggregatedWind.SE} direction="SE" />
                  <Region info={response.AggregatedWind.SW} direction="SW" />
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCXrRQzsZ7FWq1zZcKlEWWv-QyNCst3z4g" }}
          defaultCenter={{ lat: 39.3438, lng: -119.9176 }}
          defaultZoom={11}
          onClick={(d) => {
            setLatLng([d.lat, d.lng]);
          }}
        >
          {latLng?.length === 2 && (
            <AnyReactComponent
              lat={latLng[0]}
              lng={latLng[1]}
              text="My Marker"
            />
          )}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default SimpleMap;

const Region = ({ info, direction }) => {
  return (
    <div style={{ margin: 4, overflow: "scroll" }}>
      <p style={{ margin: 0 }}>
        Direction: <b>{direction}</b>
      </p>
      {Object.keys(info).map(
        (k) =>
          k !== "Raw" && (
            <p key={k} style={{ margin: 0 }}>
              {k}: <b>{info[k]}</b>
            </p>
          )
      )}
    </div>
  );
};
