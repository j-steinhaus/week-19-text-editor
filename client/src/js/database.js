import { openDB } from 'idb';

const initdb = async () =>
//create new database
  openDB('jate', 1, {
    //add database schema
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      //object store creation for data
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // connect to DB and the version being used
  const jateDb = await openDB('jate', 1);
  // create new transaction
  const tx = jateDb.transaction('jate', 'readwrite');
  // object store opening
  const store = tx.objectStore('jate');
  // content being passed through
  const request = store.put({ id: 1, value: content });
  // confirmation of data being added
  const result = await request;
  console.log('Data saved to the database', result);
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  // connect to DB 
  const jateDB = await openDB('jate', 1);
  // create new transaction
  const tx = jateDB.transaction('jate', 'readonly');
  // object store opening
  const store = tx.objectStore('jate');
  // show all data in the database
  const request = store.getAll();
  // confirming the request
  const result = await request;
  console.log(result);
  return result;
};

initdb();
