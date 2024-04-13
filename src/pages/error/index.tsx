import { Link } from "react-router-dom";
import Minnie from "../../assets/minnie.png";
import Logo from "../../assets/iconeDisney.png";
import { Search } from "../../compenents/Search";

export default function Error() {
  return (
    <>
      <Search />
      <div className="bg-slate-400">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" style={{ background: "#000" }} />
        </Link>
        <p>Nenhum person encontrado</p>
        <img src={Minnie} alt="Nenhum person encontrado" />
      </div>
    </>
  );
}
