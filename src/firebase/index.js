import firebase from 'firebase';
import 'firebase/firestore';

class FirebaseCore {
      firebaseApp = null;
      firebaseConfig = {
            apiKey: "AIzaSyC7tGBWOMD-BjNeQcG2CjKoeuHmXD0kkro",
            authDomain: "todolist-a3f39.firebaseapp.com",
            projectId: "todolist-a3f39",
            storageBucket: "todolist-a3f39.appspot.com",
            messagingSenderId: "609768108108",
            appId: "1:609768108108:web:d8218dcb955fd65a0444e9"
      };

      constructor() {
            if (!firebase.apps.length) {
                  this.firebaseApp = firebase.initializeApp(this.firebaseConfig);
            }
      }

      todoRef = () => {
            return firebase.firestore().collection("Todo")
      }
}

const firebaseCore = new FirebaseCore();
export default firebaseCore;