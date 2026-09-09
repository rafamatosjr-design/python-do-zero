# Módulo 8 — Redes

**Aulas:** 86–95

## Objetivo do módulo

Compreender os fundamentos de redes necessários para desenvolvimento, APIs, deploy, segurança e comunicação entre sistemas. O estudante deve entender modelos de rede, endereçamento IP, portas, protocolos e acesso remoto em nível introdutório e seguro.

## Regras pedagógicas

- explicar redes pelo ponto de vista de quem programa;
- usar exemplos simples e próximos do cotidiano;
- apresentar OSI como modelo conceitual de referência, não como sete programas reais executados separadamente;
- diferenciar OSI e TCP/IP sem tratá-los como equivalentes perfeitos;
- ensinar IPv4 como endereço de 32 bits e IPv6 como 128 bits;
- diferenciar IP público, IP privado, localhost, gateway e NAT;
- deixar claro que NAT não é firewall;
- ensinar CIDR e sub-redes em nível introdutório, incluindo /24;
- explicar portas e sockets sem confundir porta com aplicação;
- registrar que DNS pode usar UDP e TCP;
- explicar que ICMP/ping não usa TCP;
- não afirmar que UDP é sempre mais rápido;
- diferenciar SFTP de FTPS e explicar que SFTP funciona sobre SSH;
- indicar que Telnet é inadequado para administração sensível por não oferecer proteção moderna;
- quando não houver vídeo validado, mostrar: “Não há vídeo complementar selecionado para esta aula.”

## Aula 86 — Por que programadores precisam entender redes

Ensinar:
- comunicação entre máquinas;
- cliente e servidor em uma rede;
- aplicações distribuídas;
- API pela rede;
- deploy;
- diagnóstico básico de conectividade.

Ideia central: aplicações modernas raramente funcionam isoladas; front-end, back-end, banco, APIs e serviços precisam se comunicar por redes.

## Aula 87 — Modelo OSI

Ensinar as 7 camadas como referência conceitual:
1. Física;
2. Enlace;
3. Rede;
4. Transporte;
5. Sessão;
6. Apresentação;
7. Aplicação.

Regra conceitual: o modelo OSI ajuda a organizar funções de rede. Ele não significa que um computador execute literalmente sete programas separados para cada comunicação.

## Aula 88 — TCP/IP e relação com OSI

Ensinar:
- modelo TCP/IP;
- camadas de Acesso à Rede, Internet, Transporte e Aplicação;
- relação aproximada com OSI;
- protocolos em diferentes camadas.

Regra conceitual: OSI e TCP/IP são modelos diferentes; o mapeamento entre suas camadas é aproximado.

## Aula 89 — IPv4 e IPv6

Ensinar:
- endereço IP;
- IPv4 de 32 bits;
- representação decimal pontuada;
- IPv6 de 128 bits;
- representação hexadecimal;
- por que IPv6 existe;
- endereço não é a mesma coisa que domínio.

## Aula 90 — IP público, privado, localhost, gateway e NAT

Ensinar:
- IP público;
- IP privado;
- faixas privadas IPv4: 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16;
- localhost: 127.0.0.1 e ::1;
- gateway;
- NAT;
- rede local versus Internet.

Regra conceitual: NAT traduz endereços entre contextos de rede; NAT não deve ser tratado como sinônimo de firewall.

## Aula 91 — Máscara, CIDR e sub-redes

Ensinar máscara de rede, prefixo CIDR, rede/host e exemplo introdutório com /24.

## Aula 92 — Portas e sockets

Ensinar portas, sockets e portas conhecidas: 22 SSH, 53 DNS, 80 HTTP e 443 HTTPS. Explicar que DNS pode usar UDP e TCP.

## Aula 93 — TCP e UDP

Ensinar conexão, confiabilidade, ordem, retransmissão e diferenças de uso. Não afirmar que UDP é sempre mais rápido em qualquer cenário.

## Aula 94 — HTTP, HTTPS, DNS e ICMP

Revisar como esses protocolos participam de uma comunicação. Explicar que `ping` usa ICMP, não TCP.

## Aula 95 — SSH, FTP, SFTP e Telnet

Ensinar diferenças entre SSH, FTP, SFTP e Telnet. SFTP funciona sobre SSH e não é o mesmo que FTPS. Telnet não deve ser usado para administração sensível.

## Checkpoint final

Ao concluir a Aula 95, o estudante deve conseguir explicar modelos OSI/TCP-IP, IP público e privado, localhost, gateway, NAT, CIDR básico, portas, TCP/UDP e os principais protocolos estudados.

## Vídeos validados

- OSI: https://www.youtube.com/watch?v=bmgvIlvVAlc
- OSI vs TCP/IP: https://www.youtube.com/watch?v=c5vfwNBbl4g
