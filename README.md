# Installation on NixOS (Firefox)

```sh
git clone https://github.com/FosioDev/remove-youtube-suggestions
cd remove-youtube-suggestions
nix-shell -p nodejs_24 web-ext zip
cd src
cp firefox_manifest.json manifest.json
web-ext build --overwrite-dest
```

Open `about:config` and set `xpinstall.signatures.required` to `false`.

Open `about:addons`, click the gear icon ⚙️, and select `Install Add-on From File...`.

Choose the generated `.zip` file from `src/web-ext-artifacts/`.

# My settings

```
rys_settings_0:t,1:t,2:t,92:t,98:,101:,61:f,62:t,58:f,59:9<d1>00a-5<d1>00p,60:mo<d2>tu<d2>we<d2>th<d2>fr,85:f,86:,54:t,55:f,74:f,84:f,10:t,56:f,100:f,3:t,4:t,5:t,87:t,6:f,7:f,8:t,9:t,95:f,11:f,79:f,97:f,12:f,13:f,14:t,15:t,16:f,18:f,17:f,19:t,20:t,63:t,64:t,21:t,22:t,23:t,24:t,69:f,78:t,26:t,94:f,89:t,28:t,29:t,30:t,31:f,83:t,76:f,80:f,73:t,33:t,88:t,27:t,91:t,75:f,32:t,34:t,35:f,36:f,37:f,38:f,39:f,40:f,41:t,42:t,93:f,43:t,44:f,65:f,72:t,77:t,68:f,45:t,96:t,46:t,47:f,48:f,71:f,49:t,50:f,51:f,52:f,67:t,57:f,66:f,70:f,81:f,53:f,82:f,99:f,25:f
```

# RYS — Remove YouTube Suggestions
#### A Browser Extension

---

### What it does
A browser extension that lets you hide recommendations, customize the interface, and take control of your YouTube experience.

---

### Feedback and Support
Leave a review!
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/remove-youtube-s-suggestions)
- [Chrome](https://chrome.google.com/webstore/detail/remove-youtube-suggestion/cdhdichomdnlaadbndgmagohccgpejae)
- [Google Form](https://docs.google.com/forms/d/1AzQQxTWgG6M5N87jinvXKQkGS6Mehzg19XV4mjteTK0/edit)

Free to use with optional [premium features](https://lawrencehook.com/rys/premium/).

---

### Why I made it
YouTube's recommendation algorithm optimizes for the most _engaging_ videos, not the ones you actually want to watch — and it's easy to lose hours to the rabbit hole. This extension lets you cut the noise and use YouTube on your own terms.

Available for download at the links below:
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/remove-youtube-s-suggestions)
- [Chrome](https://chrome.google.com/webstore/detail/remove-youtube-suggestion/cdhdichomdnlaadbndgmagohccgpejae)

---

### Development
This project is 100% open source. Created and maintained by me, [Lawrence Hook](https://lawrencehook.com).  

Have a feature request or found a bug? Feel free to create a Github issue, submit a PR, or contact me at lawrencehook@gmail.com.

```bash
git clone https://github.com/lawrencehook/remove-youtube-suggestions.git
cd remove-youtube-suggestions
npm install --global web-ext

./dev.sh firefox     # opens Firefox with the extension loaded
./dev.sh chrome      # builds dist/chrome/ — load as unpacked in chrome://extensions
```
