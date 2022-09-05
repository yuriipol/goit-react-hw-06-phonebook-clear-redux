import { ADD_CONTACT, DEL_CONTACT } from './phone-book-items-types';

const initialStore = JSON.parse(localStorage.getItem('phoneList')) ?? [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [payload, ...store];
    case DEL_CONTACT:
      return store.filter(item => item.id !== payload);
    default:
      return store;
  }
};
export default itemsReducer;
