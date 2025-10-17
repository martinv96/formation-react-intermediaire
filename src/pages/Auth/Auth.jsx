import { Section, Article, Title, Paragraph } from "@/components";
import { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  // const [isSend, setIsSend] = useState(false); // pour gérer l'état de chargement du formulaire
  const [isSend, setIsSend] = useState(false);

  const formValidation = () => {
    let newErrors = {};
    if (!email) {
      newErrors.email = "L'email est requis.";
    } else if (!email.includes("@")) {
      newErrors.email = "L'email doit être valide.";
    }

    if (!password || password.length < 8) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères.";
    }
    // ici on met à jour l'état des erreurs avec setErrors. ca permet de les afficher dans le formulaire.
    setErrors(newErrors);
    // ici on retourne true si toutes les erreurs sont valides, c'est à dire si l'objet newErrors est vide
    return Object.keys(newErrors).length === 0;
  };

  // ici on ajoute async si on a besoin de faire un appel asynchrone à une API par la suite
  const handleSubmit = async (e) => {
    // e.preventDefault empêche le rechargement de la page lors de la soumission du formulaire. on bloque le comportement par défaut du navigateur
    e.preventDefault();
    setIsSend(true);
    // si la validation du formulaire échoue, on arrête la soumission
    if (!formValidation()) {
      setIsSend(false);
      return;
    }

    // TODO formulaire en commentaire pour l'instant
    /**
      // ! ici on crée un objet contenant les données du formulaire :
     * const datas = {
     *   email,
     *   password
     * };
     * 
     * try {
     *   ici on fait un appel à une API avec fetch
     *   const response = await fetch("https://monapi.com/connexion", {
     *     method: "POST",
     *     headers: {
     *       "Content-Type": "application/json",
     *     },
     *     pour applatir les données en JSON on utilise JSON.stringify
     *     body: JSON.stringify(datas)
     *   });
     * 
     *   on vérifie si la réponse n'est pas ok (statut d'erreur)
     *   if (!response.ok) {
     *     const errorAPI = await response.json();
     *     setErrors({
     *       ...errors,
     *       global: errorAPI?.message || "Erreur lors de la connexion",
     *     });
     *     throw new Error("Erreur lors de la connexion");
     *   }
     * 
     *   si tout s'est bien passé, on récupère les données de succès
     *   const successData = await response.json();
     *   console.log("Connexion réussie:", successData);
     * 
     *   on réinitialise le formulaire en cas de succès
     *   setEmail("");
     *   setPassword("");
     *   setErrors(null);
     * 
     * } catch (err) {
     *   gestion des erreurs de réseau ou autres erreurs inattendues
     *   console.error("Erreur lors de la connexion:", err);
     *   setErrors({
     *     ...errors,
     *     global: "Une erreur est survenue lors de la connexion",
     *   });
     * } finally {
     *    setIsSend(false);
     * }
     */

    // ! ici on crée un objet contenant les données du formulaire :
    const datas = {
      email,
      password,
    };

    try {
      // ! ici on fait un appel à une API avec fetch
      const response = await fetch("https://monapi.com/connexion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // ! pour applatir les données en JSON on utilise JSON.stringify
        body: JSON.stringify(datas),
      });

      // ! on vérifie si la réponse n'est pas ok (statut d'erreur)
      if (!response.ok) {
        const errorAPI = await response.json();
        setErrors({
          ...errors,
          global: errorAPI?.message || "Erreur lors de la connexion",
        });
        throw new Error("Erreur lors de la connexion");
      }

      // si tout s'est bien passé, on récupère les données de succès
      const successData = await response.json();
      console.log("Connexion réussie:", successData);

      // ! on réinitialise le formulaire en cas de succès
      setEmail("");
      setPassword("");
      setErrors(null);
    } catch (err) {
      // ! gestion des erreurs de réseau ou autres erreurs inattendues
      console.error("Erreur lors de la connexion:", err);
      setErrors({
        ...errors,
        global: "Une erreur est survenue lors de la connexion",
      });
    } finally {
      setIsSend(false);
    }
  };

  return (
    <div className="se-connecter">
      <Section sectionTitle="Inscription">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email:</label>
          {/* onChange permet de récupérer la valeur de l'input lors de la modification, e représente l'élément HTML, la valeur se met à jour dans le state avec setEmail */}
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            // ! ici onBlur permet de valider le champ quand l'utilisateur quitte l'input
            onBlur={formValidation}
            // ! ici aria-invalid permet d'indiquer si l'input est invalide pour les lecteurs d'écran. On utilise l'optional chaining (?.) pour éviter l'erreur si errors est null
            aria-invalid={!!errors?.email}
          />
          {/* Affichage conditionnel de l'erreur email avec optional chaining pour éviter les erreurs si errors est null */}
          {errors?.email && <p className="error">{errors.email}</p>}
          <label htmlFor="password">Mot de passe:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            // ! ici aria-invalid permet d'indiquer si l'input est invalide pour les lecteurs d'écran. !!errors?.password convertit en booléen : true s'il y a une erreur, false sinon
            aria-invalid={!!errors?.password}
            required
          />
          {/* ici on gere l'affichage conditionnel de l'erreur password : le message ne s'affiche que si errors.password existe. l'optional chaining évite les erreurs si errors est null */}
          {errors?.password && <p className="error">{errors.password}</p>}

          {/* Affichage conditionnel de l'erreur globale d'API */}
          {errors?.global && (
            <div className="error-global">
              <p>{errors.global}</p>
            </div>
          )}

          <button type="submit" disabled={isSend}>
            {isSend ? "Envoi en cours..." : "s'inscrire"}
          </button>
        </form>
      </Section>
    </div>
  );
};

export default Auth;
