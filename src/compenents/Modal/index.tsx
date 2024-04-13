import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalPersonProps {
  _id: number;
  imageUrl: string;
  name: string;
  onClose: () => void;
  film: string;
  videoGames: string;
  tvShows: string;
}

export default function ModalPerson({
  _id,
  name,
  imageUrl,
  film,
  videoGames,
  tvShows,
  onClose,
}: ModalPersonProps) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    handleOpen();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Box sx={style}>
      <Modal
        key={_id}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={imageUrl} alt={name} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              FILMES
            </Typography>
            {film ? (
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {film}
              </Typography>
            ) : (
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Nenhum filme
              </Typography>
            )}
          </div>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              VIDEO GAMES
            </Typography>

            {videoGames ? (
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {videoGames}
              </Typography>
            ) : (
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Nenhum Video Game
              </Typography>
            )}
          </div>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              SHOW DE TV
            </Typography>

            {tvShows ? (
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {tvShows}
              </Typography>
            ) : (
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Nenhum Show de TV
              </Typography>
            )}
          </div>
          <Button onClick={() => handleClose()}>Fechar</Button>
        </Box>
      </Modal>
    </Box>
  );
}
