# 🧩 JODI MILAU
# look for .vsix file download and install in vsCode.
# Type command (ctrl + shift + p) -> "Jodi Milau" -> ENJOY ❤️❤️

> **Flip Tiles → Memorize → Match Pairs → Win Game**

---

## 🚀 Getting Started

### **Local Installation**
To install the extension manually using the `.vsix` bundle:

1. Open **VS Code**.
2. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac) to open the Command Palette.
3. Type and select: **"Extensions: Install from VSIX..."**
4. Choose the file: `jodi-milau-0.0.1.vsix`.
5. After the success notification, open the Command Palette again and search for **"Jodi Milau"** to play.

> [!IMPORTANT]  
> **Can't find the installer?** Check your root project folder or the `out/` directory for the `.vsix` output after running the package command.

---

## 🎮 How to Play
* **Select a Level:** Click the settings icon to choose between Level 1, 2, or 3.
* **Find Pairs:** Click a tile to reveal the image underneath. Find its match to clear them from the board.
* **Beat the Clock:** Complete the grid before the timer in the bottom corner hits zero.
* **Pause/Reset:** Use the controls at the bottom to pause your session or restart the game.

---

## 🛠️ Development & Building

If you are modifying the source code, use the following commands:

| Command | Action |
| :--- | :--- |
| `npm run compile` | Compiles TypeScript to JavaScript |
| `node esbuild.js` | Fast bundling of the extension logic |
| `vsce package` | Creates the `.vsix` installer file |

---

## 📂 Project Structure
* `src/` - TypeScript source code for the VS Code extension.
* `media/` - Styles (CSS), logic (JS), and game assets (Images).
* `out/` - Compiled output used by the extension host.

---

## 📜 Credits
Icons provided by [Flaticon](https://www.flaticon.com/).

---