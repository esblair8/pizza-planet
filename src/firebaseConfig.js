import Firebase from 'firebase'

// Initialize Firebase

var config = {
	apiKey: 'AIzaSyC6TGyggRkUU9fjFiL0OKwUXbsS8PNFHzg',
	authDomain: 'pizzaplanet-e6b0f.firebaseapp.com',
	databaseURL: 'https://pizzaplanet-e6b0f.firebaseio.com',
	projectId: 'pizzaplanet-e6b0f',
	storageBucket: 'pizzaplanet-e6b0f.appspot.com',
	messagingSenderId: '897256771675'
}

const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
export const dbOrdersRef = db.ref('orders')