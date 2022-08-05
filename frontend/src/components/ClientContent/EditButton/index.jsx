import { MdOutlineEdit } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./styles";


export const EditButton = () => {

  const path = useLocation().pathname.split('/')[2];

  return (
    <Container>
      <Link
        to={"/client/edit/" + path}
      >
        <MdOutlineEdit />
      </Link>
    </Container>
  );
};