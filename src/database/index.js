import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("session.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT PRIMARY KEY NOT NULL,email TEXT NOT NULL,idToken TEXT NOT NULL)",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
