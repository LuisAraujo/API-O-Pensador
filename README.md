API O Pensador
=========================

![](https://github.com/LuisAraujo/API-O-Pensador/blob/master/favicon.png?raw=true)

>API para obtenção de frases do site O Pensador.

* Fonte: O Pensador (https://pensador.uol.com.br)
* Desenvolvido com: Jquery e Ajax (js e PHP)

### Versão
1.0
### Como Usar:

* Iniciar a API

> Passe como parámetro para a função "startAPI" o nome do autor (verifique se há cadastro desse autor e se o nome está corretamente escrito).

```sh
startAPI("steve jobs");
```

* Obtenha as frases

> Acesse as frase, em formato JSON, com "getPhrases".

```sh
var JSON = getPhrases();
console.log(JSON);
```
>Implemente sua lógica em "APIready".

```sh
function APIready(){
    $("body").html(getPhrases());
}
```

READE.md desenvolvido com http://dillinger.io/