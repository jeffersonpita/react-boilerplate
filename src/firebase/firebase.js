import * as firebase from 'firebase';


var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


/*
const onChange = database.ref('expenses').on('child_removed', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
});

const onChange2 = database.ref('expenses').on('child_changed', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
});

const onChange3 = database.ref('expenses').on('child_added', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
});
*/

/*
const onChange = database.ref('expenses').on('value', (snapshot)=>{

  const expenses = [];
  snapshot.forEach((childSnapshot)=>{
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });

  console.log(expenses);

});
*/

/*
database.ref('expenses')
  .once('value')
  .then((snapshot)=>{
    const expenses = [];
    snapshot.forEach((childSnapshot)=>{
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  });
  */

/*
const expenses = [{
    description: "Coffee",
    amount: 150
  },
  {
    description: "Water",
    amount: 1400
  },{
    description: "Electricity",
    amount: 3000
  }
];

setTimeout( function(){
  expenses.forEach( (expense)=>{
    database.ref('expenses').push(expense);
  });
}, 5000);
*/





/*
const onChange = database.ref().on('value', (snapshot)=>{
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  });

setTimeout(function(){
  console.log('time');
  database.ref().update({
    'job/company': 'Google1',
    'location/city': 'Boston'
  });
},5000);
*/
/*
database.ref()
  .once('value')
  .then((snapshot)=>{
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e)=>{
    console.log('Error fetching data.');
  })
*/
 /*
database.ref().set({
  name: 'Andrew Mead',
  age: 26,
  stressLevel: 6,
  isSingle: true,
  job: {
    title: 'Software Developer',
    company: 'Google'
  },
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(()=>{
  console.log('data is saved');
}).catch((e)=>{
  console.log('error', e);
});
*/

/*
database.ref('attributes').set({
  height: 171,
  weight: 75
}).then(()=>{
  console.log('second worked');
}).catch((e)=>{
  console.log('error', e);
});
*/
/*
database.ref('isSingle').remove().then(()=>{
  console.log('removed successfully');
}).catch((e)=>{
  console.log('error', e);
});
*/
/*
database.ref('isSingle').set(null).then(()=>{
  console.log('setremoved successfully');
}).catch((e)=>{
  console.log('error', e);
});*/
/*
database.ref().update({
  job: 'Manager',
  'location/city': 'Boston'
});
*/
/*
database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Boston'
});
*/
