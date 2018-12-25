// usage: https://www.npmjs.com/package/node-ssh
let path; let node_ssh; let ssh; let fs; let opn; let
  host;

fs = require('fs');
path = require('path');
node_ssh = require('node-ssh');

opn = new require('opn');
ssh = new node_ssh();
host = 'localhost';
const localDir = './dist';
const remoteDir = '/opt/frontend/new';
const removeCommand = 'rm -rf ./*';
const pwdCommand = 'pwd';

ssh
  .connect({
    host,
    username: 'root',
    port: 22,
    // password,
    privateKey: './.ssh/id_rsa',
  })
  /*
 Or
 ssh.connect({
   host: 'localhost',
   username: 'steel',
   privateKey: fs.readFileSync('/home/steel/.ssh/id_rsa')
 })
 if you want to use the raw string as private key
 */
  .then(() => {
    ssh.execCommand(removeCommand, { cwd: remoteDir }).then((result) => {
      console.log(`STDOUT: ${result.stdout}`);
      console.log(`STDERR: ${result.stderr}`);
      ssh.putDirectory(localDir, remoteDir).then(
        () => {
          console.log('The File thing is done');
          ssh.dispose();
          opn(`http://${host}`, { app: ['chrome'] });
        },
        (error) => {
          console.log("Something's wrong");
          console.log(error);
          ssh.dispose();
        },
      );
    });
  });
