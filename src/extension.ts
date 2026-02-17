import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('jodi-milau.startGame', () => {
    const panel = vscode.window.createWebviewPanel(
      'memoryGame',
      'MEMORIZE',
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true, // Keeps the game running if you switch tabs
        localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
      }
    );

    panel.webview.html = getWebviewContent(panel.webview, context.extensionUri);
  });

  context.subscriptions.push(disposable);
}

function getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri) {
  const getUri = (pathList: string[]) => webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', ...pathList));

  const styleUri = getUri(['style.css']);
  const scriptUri = getUri(['logic.js']);

  const imgSetting = getUri(['img', 'setting.png']);
  const imgPlay = getUri(['img', 'play.png']);
  const imgRestart = getUri(['img', 'restart.png']);
  const imgCross = getUri(['img', 'cross.png']);
  const imgOne = getUri(['img', 'one.png']);
  const imgTwo = getUri(['img', 'two.png']);
  const imgThree = getUri(['img', 'three.png']);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MEMORIZE</title>
    <link rel="stylesheet" href="${styleUri}" />
  </head>
  <body class="main">
    <section class="btn-misc">
      <div class="title">
        <h1 class="game-title">MEMORIZE</h1>
        <p class="subtitle">(Flip - Memorize - Match)</p>
      </div>
      <img class="btn-img" src="${imgSetting}" onclick="openSettings()" />
    </section>

    <section class="table"></section>

    <section class="btn-containers">
      <img class="btn-img play-pause" src="${imgPlay}" onclick="toggleTimer()" id="playPauseBtn" />
      <div class="timer"><span class="time-left"></span></div>
    </section>

    <section class="alert">
      <div class="alert-content">
        <h1>Game Paused!!!</h1>
        <div class="alert-options">
          <div class="option-reset"><img src="${imgRestart}" onclick="resetGame()" /><p>Reset</p></div>
          <div class="option-cancel"><img src="${imgCross}" onclick="cancel()" /><p>Close</p></div>
        </div>
      </div>
    </section>

    <section class="win">
      <div class="win-content win-bg">
        <h1 class="win-loose-txt">You win!!!</h1>
        <div class="win-options">
          <div class="win-reset"><img src="${imgRestart}" onclick="resetGame()" /><p>Restart</p></div>
        </div>
      </div>
    </section>

    <section class="choose-lvl">
      <div class="lvl-options">
        <h1>Level</h1>
        <div class="lvls">
          <img src="${imgOne}" class="lvl" onclick="playLvl(1)" />
          <img src="${imgTwo}" class="lvl" onclick="playLvl(2)" />
          <img src="${imgThree}" class="lvl" onclick="playLvl(3)" />
        </div>
        <p class="c-lvl" onclick="removeLvlSelection()">Cancel</p>
      </div>
    </section>

    <script>
        window.iconPause = "${webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'img', 'pause.png'))}";
        window.iconPlay = "${webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'img', 'play.png'))}";
    </script>
    <script src="${scriptUri}"></script>
  </body>
</html>`;
}