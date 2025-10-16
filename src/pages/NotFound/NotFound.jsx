import { Title, Paragraph } from "@/components";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="not-found">
      <Title title="Erreur 404" levelTitle={2} />
      <Paragraph>La ressource demandée est introuvable.</Paragraph>
      {(error?.statusText || error?.message) && (
        <Paragraph>
          <small>erreur: {error?.statusText || error?.message}</small>
        </Paragraph>
      )}
      <Link to="/">Retourner sur la page {"d'accueil"}</Link>
    </div>
  );
};

export default NotFound;
