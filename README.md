# Svelte Icons Explorer

Live app: svelteicons.dev

## Features

- [x] Search through all available icon libraries
- [x] Installation Guide
- [ ] Click on Icon to copy its name to clipboard
- [ ] Icon Styling Guide
- [ ] Variable Icon Size
- [ ] Good Practices
- [ ] Light / Dark Mode
- [ ] Error Boundary / Fallback for errors with icons
- [ ] Color Picker
- [ ] Add icon library preferences (hidden / pinned)

---

## Issues & Potential Limitations

- BUILD TIMES ARE SLOW... 💩 (due to grouped icon imports, there's probably better ways to handle that...)
- Performance & Optimization for rendering many icons (maybe use intersection observer || button to "load more icons"...)
- Game Icons: GiJetPack is causing parsing errors / WiSmoke (build error with Vercel deployment) for Weather Icons
- Many icons lead to an error: `Error: <path> attribute d: Expected moveto path command ('M' or 'm'), "undefined".`
