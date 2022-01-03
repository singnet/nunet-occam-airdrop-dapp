import React, { useMemo } from "react";
import GradientBox from "snet-ui/GradientBox";
import Typography from "@mui/material/Typography";
import FlipCountdown from "snet-ui/FlipClock/Countdown";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import moment from "moment";
type AirdropRegistrationMiniProps = {
  startDate: Date;
  totalTokens: number;
  tokenName: string;
  totalAirdropWindows: number;
  currentAirdropWindow: number;
  windowAction: string;
  onClickNotification: Function;
};
const DateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  // timeZone: "UTC",
  timeZoneName: "short",
});
export default function AirdropRegistrationMini({
  startDate,
  totalTokens,
  tokenName,
  totalAirdropWindows,
  currentAirdropWindow,
  windowAction,
  onViewNotification,
}: AirdropRegistrationMiniProps) {
  const formattedDate = useMemo(
    () => moment.utc(startDate).local().format("YYYY-MM-DD HH:mm:ss"),
    [startDate]
  );

  return (
    <GradientBox
      $background="bgGradientHighlight"
      sx={{ px: 2, pt: 2, pb: 2, borderRadius: 2 }}
    >
      <Typography color="text.secondary" variant="h4" align="center" mb={6}>
        OccamRazer vested unlock {currentAirdropWindow}/{totalAirdropWindows}{" "}
        {windowAction} {formattedDate}
      </Typography>
      <FlipCountdown endDate={startDate} />
      <Divider sx={{ mt: 4, mb: 3, borderColor: "text.secondary" }} />
      <Grid container>
        <Grid item xs={6} textAlign="center">
          <Typography variant="normal" color="text.secondary">
            Unlocks
          </Typography>
          <Typography variant="h3" color="text.secondary">
            {totalAirdropWindows}
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Typography variant="normal" color="text.secondary">
            Total Token Worth
          </Typography>
          <Typography variant="h3" color="text.secondary">
            5,000,000 {tokenName}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 3, borderColor: "text.secondary" }} />
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          onClick={onViewNotification}
          variant="contained"
          color="secondary"
          sx={{ textTransform: "capitalize", fontWeight: 600 }}
        >
          Get Notifications
        </Button>
      </Box>
    </GradientBox>
  );
}
