class FirebaseWrapper{
  constructor(db){
    this.db = db;
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
