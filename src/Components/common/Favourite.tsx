import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Rating } from "@mui/material";
import { useState } from "react";

interface FavoriteHeartProps {
  initialValue?: number;
}

const FavoriteHeart = ({ initialValue = 0 }: FavoriteHeartProps) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleClick = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex items-center justify-center">
      <Rating
        name="favorite-heart"
        value={value}
        onChange={(event, newValue) => handleClick(newValue as number)}
        max={1}
        icon={<FavoriteIcon fontSize="inherit" style={{ color: "red" }} />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </div>
  );
};

export default FavoriteHeart;
