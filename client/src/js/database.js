import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// PUT to database 

export const putDb = async (content) => {
  console.log('Getting data from the jateDB');

  console.error('putDb not implemented');

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readwrite');

  const objStore = tx.objectStore('jate');

  const req = objStore.put({ id: id, value: value })

  const res = await req;
  
  console.log('data saved to jateDB', res);
};

//GET content from db
export const getDb = async (id, value) => {

  console.log('PUT request to update the jateDB');

  console.error('getDb not implemented');

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readwrite');

  const objStore = tx.objectStore('jate');

  const req = objStore.getAll()

  const res = await req;

  console.log('data saved to the jateDB', res);
};

initdb();
