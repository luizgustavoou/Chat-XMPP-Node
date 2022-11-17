//Arquivo para ser o cliente que ira conectar
process.stdin.setEncoding("utf8");

const { stdout } = require("process");
const xmpp = require("simple-xmpp");

xmpp.on("online", (data) => {
  console.log("Hey you are online!");
  console.log(`Connected as ${data.jid.user}`);
  stdout.write("Enviar mensagem: ");
});

process.stdin.on("readable", function () {
  while ((input = process.stdin.read()) !== null) {
    stdout.write("Enviar mensagem: ");
    var command = input.trim();
    if (command != "") send(command);
  }
});

xmpp.on("error", (error) => console.log(`something went wrong!${error}`));

xmpp.on("chat", (from, message) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  let [user, domain] = from.split("@");
  console.log(`${user} diz: ${message}`);
  stdout.write("Enviar mensagem: ");
});

function send(message) {
  xmpp.send("admin@localhost", message);
}
xmpp.connect({
  jid: "hussein@localhost", //user e dominio
  password: "password",
  host: "localhost",
  port: 5222,
});
