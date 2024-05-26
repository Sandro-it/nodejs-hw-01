import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const contacts = [];

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

await removeAllContacts();
