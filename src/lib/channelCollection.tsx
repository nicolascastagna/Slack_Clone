import { collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../firebase';

export const firestore = getFirestore(firebaseApp);

export const channelsCollections = collection(firestore, "rooms");