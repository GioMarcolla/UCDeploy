import React, { FC } from "react";
import { Link } from "react-router-dom";

// Type ALL props, this helps reduce the need for smoke tests and prevents datartype errors ont he app.
// Typing the props also allows Editors to provide better suggestions.
type Props = {
  name: string;
  path: string;
};

// NO Class Components unless 1000% needed!
let MenuItem: FC<Props> = ({ name, path }: Props) => {
  return (
    <div>
      <Link to={path}>{name}</Link>
    </div>
  );
};

export default MenuItem;
