import { Neovim } from '@chemzqm/neovim';
import { Disposable } from 'vscode-languageserver-protocol';
import Document from '../model/document';
import { CompleteConfig, CompleteOption, PopupChangeEvent } from '../types';
import Complete from './complete';
export interface LastInsert {
    character: string;
    timestamp: number;
}
export declare class Completion implements Disposable {
    config: CompleteConfig;
    private document;
    private floating;
    private currItem;
    private activted;
    private input;
    private lastInsert?;
    private nvim;
    private disposables;
    private complete;
    private recentScores;
    private resolveTokenSource;
    private changedTick;
    private insertCharTs;
    private insertLeaveTs;
    private isResolving;
    init(nvim: Neovim): void;
    readonly option: CompleteOption;
    private addRecent;
    private getPreviousContent;
    getResumeInput(pre: string): string;
    private readonly bufnr;
    readonly isActivted: boolean;
    private getCompleteConfig;
    startCompletion(option: CompleteOption): Promise<void>;
    private resumeCompletion;
    hasSelected(): boolean;
    private showCompletion;
    private _doComplete;
    private onTextChangedP;
    private onTextChangedI;
    private triggerCompletion;
    private onCompleteDone;
    private onInsertLeave;
    private onInsertEnter;
    private onInsertCharPre;
    private readonly latestInsert;
    private readonly latestInsertChar;
    shouldTrigger(document: Document, pre: string): Promise<boolean>;
    onPumChange(ev: PopupChangeEvent): Promise<void>;
    start(complete: Complete): void;
    private cancel;
    stop(): void;
    private getInput;
    private readonly completeOpt;
    private getCompleteItem;
    dispose(): void;
}
declare const _default: Completion;
export default _default;