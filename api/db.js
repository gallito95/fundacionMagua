import { createPool } from "mysql2";

export const db = createPool({
    host: "mysql.ecomagua.org",
    user: "gallito95",
    password: "#Baphomet88",
    database: "maguablogposts",
    waitForConnections: true,
    connectionLimit: 10, // Anzahl der Verbindungen im Pool
    queueLimit: 0 // Keine Begrenzung der Warteschlange
});

// Event-Listener für Verbindungsprobleme
db.on("error", (err) => {
    console.error(`[${new Date().toISOString()}] Database error:`, err.code);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
        console.error("Attempting to reconnect...");
        // Automatisches Reconnect-Handling ist bei Pools meist nicht nötig
    }
});

console.log(`[${new Date().toISOString()}] Database pool created.`);
