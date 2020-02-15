class FirebaseWrapper{
  constructor(){
    let firebaseConfig = {
      apiKey: "AIzaSyCgxanprg7ChdLXDuRzW9iD-JPru3WhDAM",
      authDomain: "dailyhishab.firebaseapp.com",
      databaseURL: "https://dailyhishab.firebaseio.com",
      projectId: "dailyhishab",
      storageBucket: "dailyhishab.appspot.com",
      messagingSenderId: "900223792040",
      appId: "1:900223792040:web:a6f6d4ce0ed6ec367ba39d",
      measurementId: "G-XTBS2QPP0W"
    };

    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();
  }

  async insert(collectionName, row){
    let insert = await  this.db.collection(collectionName).add(row)
    return insert
  }

  async getAll(collectionName){
    let  snapshots = await this.db.collection(collectionName).get()
    let rows = []
    snapshots.forEach((doc) => {
      let row = doc.data();
      rows.push(row)
    })
    return rows
  }

  async delete(collectionName, docId){
    return await this.db.collection(collectionName).doc(docId).delete()
  }

  async update(collectionName, docId, doc){
    return this.db.collection(collectionName).doc(docId).update(doc)
  }
}

const firebaseWrapper = new FirebaseWrapper()
