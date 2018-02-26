var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    username: "corey@victoroladipo.com",
    password: "Rango32811!", // optional, prompted if none given 
    host: "gator4045.hostgator.com",
    port: 21,
    localRoot: __dirname + "/build",
    remoteRoot: "/public_html/",
    include: ['build/*'],
    exclude: ['.git', '.idea', 'tmp/*', '']
}
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});

ftpDeploy.on('uploading', function(data) {
    data.totalFileCount;       // total file count being transferred 
    data.transferredFileCount; // number of files transferred 
    data.percentComplete;      // percent as a number 1 - 100 
    data.filename;             // partial path with filename being uploaded 
});
ftpDeploy.on('uploaded', function(data) {
    console.log(data);         // same data as uploading event 
});