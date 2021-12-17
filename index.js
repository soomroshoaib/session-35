var faunadb = require('faunadb'),
 q = faunadb.query;

(async()=>{
    const adminClient = new faunadb.Client({ secret: 'fnAEaiGekyAAQn0Jax6zDdctnfgV_TQ12JGeVjKv' })

      try{
        const result = await adminClient.query( 
          // q.CreateDatabase({ name: 'temdb' }));

          q.CreateKey({
            database: q.Database('temdp'),
            role: 'admin',
          })
        )
          console.log(result);

      } catch(err){
          console.log(err)
      }
})();


