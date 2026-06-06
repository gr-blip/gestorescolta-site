# Gestor Escolta — Site institucional (pronto para publicar)

Site de página única, **100% estático** (HTML + CSS + imagens). Funciona em
qualquer hospedagem — não precisa de servidor, PHP, banco de dados nem build.

## Conteúdo do pacote

```
index.html            → a página (ponto de entrada)
robots.txt            → libera indexação pelo Google
sitemap.xml           → mapa do site para buscadores
assets/
  style.css           → estilos
  main.js             → animações e interações
  shield.png          → escudo Gestor Escolta (nav, rodapé, app)
  hero-art.png        → arte do escudo grande (topo)
  favicon.png         → ícone da aba do navegador
  og-image.png        → prévia ao compartilhar o link (WhatsApp/LinkedIn)
  sys-dashboard.png   → tela real: Painel de Avisos
  sys-os.png          → tela real: Ordens de Serviço
  sys-map.png         → tela real: Rastreamento ao vivo
```

## Como publicar (escolha UMA opção)

### Opção A — Hospedagem tradicional (cPanel / Hostgator / Locaweb / Registro.br)
1. Acesse o Gerenciador de Arquivos da sua hospedagem.
2. Entre na pasta pública do domínio (geralmente `public_html`).
3. **Envie todo o conteúdo desta pasta** (o `index.html`, `robots.txt`,
   `sitemap.xml` e a pasta `assets/` inteira) para dentro de `public_html`.
   > Importante: o `index.html` precisa ficar na **raiz** de `public_html`,
   > não dentro de uma subpasta.
4. Acesse `https://gestorescolta.com.br` — pronto.

### Opção B — Netlify / Vercel / Cloudflare Pages (grátis, recomendado)
1. Crie uma conta gratuita.
2. Arraste esta pasta inteira na área de "deploy" (drag & drop).
3. Em "Domains", aponte `gestorescolta.com.br` (eles mostram os registros DNS
   a configurar no seu provedor de domínio).

## Apontar o domínio (gestorescolta.com.br)
No painel onde você registrou o domínio, ajuste o DNS conforme a hospedagem
escolhida (registro `A` para o IP do servidor, ou `CNAME` no caso de
Netlify/Vercel). A própria hospedagem informa os valores exatos.

## Já configurado para você
- **HTTPS / domínio:** todas as meta tags e links já usam
  `https://gestorescolta.com.br`.
- **WhatsApp:** os botões "Solicitar Demonstração" abrem
  `wa.me/5562991589649` com mensagem pronta.
- **E-mail:** o botão "Falar com um Especialista" usa
  `comercial@gestorescolta.com.br` (crie esse e-mail na sua hospedagem, ou me
  diga outro endereço para eu trocar).
- **Prévia de link:** ao compartilhar o site no WhatsApp/LinkedIn aparece a
  imagem `og-image.png` com a marca.

## Quer trocar algo antes de publicar?
- E-mail de contato, redes sociais (links do rodapé estão como `#`), textos,
  ou adicionar mais telas/seções — é só pedir.
