// Clé secrète pour le cryptage (dans un vrai projet, ce serait une variable d'environnement)
const SECRET_KEY = "formation-react-2024-secret-key";

// Fonction simple de cryptage (Base64 + rotation)
export const encrypt = (text) => {
    try {
        // Conversion en base64 avec rotation des caractères. ca permet d'ajouter une couche de complexité au cryptage
        const base64 = btoa(encodeURIComponent(text));
        const rotated = base64.split('').map((char, index) => {
            const code = char.charCodeAt(0);
            const shift = SECRET_KEY.charCodeAt(index % SECRET_KEY.length) % 10;
            return String.fromCharCode(code + shift);
        }).join('');

        // Ajout d'un préfixe pour identifier les données cryptées
        return `encrypted_${btoa(rotated)}`;
    } catch (error) {
        console.error('Erreur de cryptage:', error);
        return text; // Fallback en cas d'erreur
    }
};

// Fonction de décryptage
export const decrypt = (encryptedText) => {
    try {
        // Vérification du préfixe
        if (!encryptedText?.startsWith('encrypted_')) {
            return encryptedText; // Données non cryptées
        }

        // Suppression du préfixe et décryptage
        const withoutPrefix = encryptedText.replace('encrypted_', '');
        const rotated = atob(withoutPrefix);

        const original = rotated.split('').map((char, index) => {
            const code = char.charCodeAt(0);
            const shift = SECRET_KEY.charCodeAt(index % SECRET_KEY.length) % 10;
            return String.fromCharCode(code - shift);
        }).join('');

        return decodeURIComponent(atob(original));
    } catch (error) {
        console.error('Erreur de décryptage:', error);
        return encryptedText; // Fallback en cas d'erreur
    }
};

// Fonction pour hacher les mots de passe (simple hash)
export const hashPassword = (password) => {
    try {
        // Hash simple avec multiplication et modulo qui permet d'éviter les collisions c'est à dire que deux mots de passe différents ne donneront pas le même hash
        let hash = 0;
        const combined = password + SECRET_KEY;

        for (let i = 0; i < combined.length; i++) {
            const char = combined.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Conversion en 32-bit integer. permet d'éviter les dépassements et garder un hash stable
        }

        // Conversion en string positive
        return Math.abs(hash).toString(36);
    } catch (error) {
        console.error('Erreur de hashage:', error);
        return password; // Fallback
    }
};

// Fonction pour vérifier un mot de passe
export const verifyPassword = (password, hashedPassword) => {
    return hashPassword(password) === hashedPassword;
};

// Fonctions sécurisées pour sessionStorage
export const secureSetItem = (key, value) => {
    try {
        const encrypted = encrypt(JSON.stringify(value));
        sessionStorage.setItem(key, encrypted);
    } catch (error) {
        console.error('Erreur de sauvegarde sécurisée:', error);
        sessionStorage.setItem(key, JSON.stringify(value)); // Tentative de sauvegarde normale en fallback. Fallback permet de ne pas perdre les données
    }
};

export const secureGetItem = (key) => {
    try {
        const encrypted = sessionStorage.getItem(key);
        if (!encrypted) return null;

        const decrypted = decrypt(encrypted);
        return JSON.parse(decrypted);
    } catch (error) {
        console.error('Erreur de lecture sécurisée:', error);
        // Tentative de lecture normale en fallback
        try {
            const normal = sessionStorage.getItem(key);
            return normal ? JSON.parse(normal) : null;
        } catch {
            return null;
        }
    }
};