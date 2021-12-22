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
        NuNet sale on OccamRazer
      </Typography>
      <Typography color="textAdvanced.dark" variant="normal" sx={{ mt: 3, display: "block", textAlign: "left" }}>
        Welcome to the Airdrop Portal. This is the dApp where you can claim the last two 25% installments of the NuNet sale on OccamRazer
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
