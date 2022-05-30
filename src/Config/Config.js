import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/firestore";

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyC0xogGSRUPTERPKlux_EmJtpymPpzGFR4",
    authDomain: "kelompok4-elibrary.firebaseapp.com",
    projectId: "kelompok4-elibrary",
    storageBucket: "kelompok4-elibrary.appspot.com",
    messagingSenderId: "426058616985",
    appId: "1:426058616985:web:89e6bc82a09f99eee86808"
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

export default fire;
