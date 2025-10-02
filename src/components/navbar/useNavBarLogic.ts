import { useState } from "react";

const useNavBarLogic = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const OpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  const CloseMenu = () => {
    setMenuAnchor(null);
  };

  return { menuAnchor, OpenMenu, CloseMenu };
};

export default useNavBarLogic;
