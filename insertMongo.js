const dbConnect = require('./Monogodb');






insertData = async () => {
    const data = await dbConnect();
    const result = await data.insert(
        [
            { name: 'S21', Company: 'Vivo' },
            { name: 'Note 10', Company: 'Samsung' }
        ]
    );
    if (result.acknowledged) {
        console.log("Data inserted");
    }


}
insertData();