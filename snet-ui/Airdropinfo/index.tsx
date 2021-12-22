import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

type Props = {
  blogLink?: string;
};

export default function Airdropinfo({ blogLink }: Props) {
  return (
    <Box>
      <Typography align="left" fontWeight="bold" variant="h1" color="bgtext.main">
        Occam Distribution: Claim your remaining allocations
      </Typography>
      <Typography color="textAdvanced.dark" variant="normal" sx={{ mt: 3, display: "block", textAlign: "left" }}>
        OccamRazer hosted the pre-IDO round for NuNet and at this portal you will be able to claim the two remaining 25% allocations.
      </Typography>
      {blogLink ? (
        <Box mt={6}>
          <Button variant="outlined" color="secondary" href={blogLink} target="_blank" rel="noreferrer noopener">
            Read Whitepaper
          </Button>
        </Box>
      ) : null}
    </Box>
  );
}
