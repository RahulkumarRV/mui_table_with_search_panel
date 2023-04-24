import { ButtonBase, IconButton } from "@mui/material";

const CircleButton = ({ onClick, children, style, disable }) => {
  return (
    <ButtonBase
      sx={{
        ...style,
        opacity: disable ? 0.5 : 1
      }}
      onClick={onClick}
      disabled={disable}
    >
      <IconButton sx={{ color: "inherit" }}>{children}</IconButton>
    </ButtonBase>
  );
};

export default CircleButton;
