import { Section, Article, Title, Paragraph } from "@/components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";
import { secureGetItem, secureSetItem } from "@/utils/CryptoUtils";
import "./Compte.css";

const Compte = () => {
  // ici on récupère le thème depuis le contexte
  const { theme } = useContext(ThemeContext);
  // Hook de navigation React Router
  const navigate = useNavigate();
  // ici on stocke les informations de l'utilisateur connecté
  const [currentUser, setCurrentUser] = useState(null);
  // ici on stocke tous les utilisateurs pour affichage
  const [allUsers, setAllUsers] = useState([]);

  // ici on charge les données utilisateur au démarrage avec décryptage
  useEffect(() => {
    const userData = secureGetItem("currentUser");
    if (userData) {
      setCurrentUser(userData);
    }

    const usersData = secureGetItem("users");
    if (usersData) {
      // on masque les mots de passe pour l'affichage
      const safeUsers = usersData.map((user) => ({
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
      }));
      setAllUsers(safeUsers);
    }
  }, []);

  // ici fonction pour se déconnecter (sécurisée)
  const handleLogout = () => {
    sessionStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/inscription"); // redirection vers la page de connexion
  };

  // ici fonction pour supprimer son compte (sécurisée)
  const handleDeleteAccount = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ?")) {
      const usersData = secureGetItem("users") || [];
      const updatedUsers = usersData.filter(
        (user) => user.email !== currentUser.email
      );

      secureSetItem("users", updatedUsers);
      sessionStorage.removeItem("currentUser");

      alert("Compte supprimé avec succès");
      navigate("/inscription");
    }
  };

  return (
    <div className={`compte ${theme}`}>
      <h1>Mon Compte</h1>

      {/* ici on vérifie si l'utilisateur est connecté */}
      {!currentUser ? (
        <Section sectionTitle="Accès refusé">
          <Article>
            <Title title="Non connecté" levelTitle={2} />
            <Paragraph>
              Vous devez être connecté pour accéder à cette page.
            </Paragraph>
            <div className="account-actions">
              <button
                onClick={() => navigate("/inscription")}
                className="btn-primary"
              >
                Se connecter
              </button>
            </div>
          </Article>
        </Section>
      ) : (
        <>
          {/* ici on affiche les informations du compte */}
          <Section sectionTitle="Informations du compte">
            <Article>
              <Title title="Profil utilisateur" levelTitle={2} />

              <div className="user-info">
                <Paragraph>
                  <strong>Email :</strong> {currentUser.email}
                </Paragraph>
                <Paragraph>
                  <strong>ID :</strong> {currentUser.id}
                </Paragraph>
                <Paragraph>
                  <strong>Statut :</strong> Connecté
                </Paragraph>
              </div>

              <div className="account-actions">
                <button onClick={handleLogout} className="btn-secondary">
                  Se déconnecter
                </button>

                <button onClick={handleDeleteAccount} className="btn-danger">
                  Supprimer le compte
                </button>
              </div>
            </Article>
          </Section>

          {/* ici on affiche les statistiques */}
          <Section sectionTitle="Statistiques">
            <Article>
              <Title title="Informations système" levelTitle={2} />

              <Paragraph>
                <strong>Nombre total d'utilisateurs :</strong> {allUsers.length}
              </Paragraph>
              <Paragraph>
                <strong>Dernière connexion :</strong> Maintenant
              </Paragraph>
            </Article>
          </Section>

          {/* ici on affiche la liste des utilisateurs (pour demo) */}
          <Section sectionTitle="Utilisateurs enregistrés">
            <Article>
              <Title title="Liste des comptes" levelTitle={2} />

              {allUsers.length > 0 ? (
                <div className="users-list">
                  {allUsers.map((user, index) => (
                    <div key={user.id} className="user-item">
                      <Paragraph>
                        <strong>#{index + 1}</strong> - {user.email}
                        {user.email === currentUser.email && (
                          <span className="current-user"> (Vous)</span>
                        )}
                      </Paragraph>
                    </div>
                  ))}
                </div>
              ) : (
                <Paragraph>Aucun utilisateur trouvé.</Paragraph>
              )}
            </Article>
          </Section>
        </>
      )}
    </div>
  );
};

export default Compte;
