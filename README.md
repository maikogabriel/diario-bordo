# 📘 Diário de Bordo PWA

##  Descrição

O **Diário de Bordo** é um Aplicativo Web Progressivo (PWA) desenvolvido para permitir o registro de atividades diárias.
A aplicação funciona offline, pode ser instalada na tela inicial e utiliza armazenamento local para persistência dos dados.

---

## Funcionalidades

* Criar entradas com título, descrição e data
* Listar entradas registradas
* Remover entradas
* Funcionamento offline (Service Worker)
* Instalação como aplicativo (PWA)

---

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* LocalStorage
* Service Worker

---

## Análise Inicial (Lighthouse)

###  Resultados:

* **Performance:** 100
* **Acessibilidade:** 77
* **Boas práticas:** 100
* **SEO:** 90

### Métricas:

* FCP: 0,3 s
* LCP: 0,3 s
* TBT: 0 ms
* CLS: 0
* Speed Index: 0,3 s

### Gargalos identificados:

* Arquivos JavaScript não otimizados
* Código não utilizado
* Falta de labels nos formulários
* Baixo contraste de cores
* Ausência de meta descrição

---

## Melhorias Aplicadas

* Adição de **labels nos formulários**
* Ajuste de **contraste de cores**
* Inclusão de **meta description (SEO)**
* Organização estrutural com `<main>`
* Limpeza de código e remoção de trechos desnecessários

---

## Reanálise (Após otimizações)

### Resultados:

* **Performance:** 100
* **Acessibilidade:** 92
* **Boas práticas:** 100
* **SEO:** 100

### Comparativo

| Métrica        | Antes | Depois |
| -------------- | ----- | ------ |
| Performance    | 100   | 100    |
| Acessibilidade | 77    | 92     |
| SEO            | 90    | 100    |

---

## Impacto das Melhorias

As principais melhorias impactaram diretamente:

* **Acessibilidade**, com a adição de labels e melhor contraste
* **SEO**, com a inclusão de meta description
* **Organização do código**, facilitando manutenção

O desempenho geral já era alto e foi mantido após as otimizações.

---

Evidências

Antes:
[lighthouse1.pdf](https://github.com/user-attachments/files/26558690/lighthouse1.pdf)

Depois:
[lighthouse2.pdf](https://github.com/user-attachments/files/26558694/lighthouse2.pdf)

---

## Como executar o projeto

1. Clone o repositório:

```bash
git clone <seu-repositorio>
```

2. Execute com servidor local (ex: Live Server)

3. Acesse no navegador:

```
http://localhost:porta
```

---

## PWA

A aplicação pode ser instalada como aplicativo em dispositivos compatíveis.

---

## 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos.
