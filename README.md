# Chat-XMPP-Node

Extensible Messaging and Presence Protocol é um protocolo aberto, extensível, baseado em XML, para sistemas de mensagens instantâneas, desenvolvido originalmente para mensagens instantâneas e informação de presença formalizado pelo IET

#Passos
1) Instalar docker
2) sudo docker run --name ejabberd -p 5222:5222 ejabberd/ecs
3) sudo docker exec -it ejabberd bin/ejabberdctl register admin localhost password
4) sudo docker exec -it ejabberd bin/ejabberdctl register hussein localhost password
5) npm install simple-xmpp
