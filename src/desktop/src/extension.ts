import * as vscode from "vscode";
import { log114514 } from "@syhx/common/src";
import { logPlatform } from "@platform/index";
import { ISamuraiMaster, SamuraiMaster } from "common/src/inversify";
import { Container } from "inversify";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "desktop" is now active!');
  const container = new Container();
  container.bind<ISamuraiMaster>(ISamuraiMaster).to(SamuraiMaster);
  const samuraiMaster: ISamuraiMaster = container.get(ISamuraiMaster);

  const text2 = logPlatform();
  const text3 = samuraiMaster.log();

  let disposable = vscode.commands.registerCommand("desktop.helloWorld", () => {
    vscode.window.showInformationMessage(text2);
    vscode.window.showInformationMessage(text3);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
