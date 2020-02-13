class FirebaseWrapper{
  constructor(db){
    this.db = db;
  }

  insert(collectionName, row){
    return this.db.collection(collectionName).add(row)
  }

  async getAll(collectionName){
    let  snapshots = await this.db.collection(collectionName).get()
    //.then((snapshots)=>{
      let rows = []
      snapshots.forEach((doc) => {
        let row = doc.data();
        rows.push(row)
      })
      return rows
    //})
  }
}
