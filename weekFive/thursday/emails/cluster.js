const cluster = require('cluster')

function startWorker() 
{
    const worker = cluster.fork()
    console.log(`CLUSTER: Worker ${worker.id} started`)
}
if(cluster.isMaster)
{
    require('os').cpus().forEach(startWorker)
    // should then exit, so we'll wait for the exit event to spawn
    // a new worker to replace it
    cluster.on('disconnect', worker => console.log(
        `CLUSTER: Worker ${worker.id} disconnected from the cluster.`
        ))
        // when a worker dies (exits), create a worker to replace it
        cluster.on('exit', (worker, code, signal) => 
        {
            console.log(
            `CLUSTER: Worker ${worker.id} died with exit ` +
            `code ${code} (${signal})`
            )
            startWorker()
        })
} 
else 
{
    const port = process.env.PORT || 3000
    // start our app on worker; see meadowlark.js
    require('./meadowlark.js')(port)
}