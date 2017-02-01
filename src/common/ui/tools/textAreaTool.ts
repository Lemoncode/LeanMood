class TextAreaTool {
  public insertAtCaretGetText(textArea: HTMLTextAreaElement, caret: string, offsetCursor: number = 0): string {
    return this.buildTextWithCaretBetweenSelectedText(textArea, caret, offsetCursor);
  }

  private buildTextWithCaretBetweenSelectedText(
    textArea: HTMLTextAreaElement, caret: string, offsetCursor: number): string {
    const beforeText = this.getTextBeforeSelectedText(textArea);
    const selectedText = this.getSelectedText(textArea);
    const afterText = this.getTextAfterSelectedText(textArea);
    const caretStart = this.getCaretStart(caret, offsetCursor);
    const caretEnd = this.getCaretEnd(caret, offsetCursor);

    return beforeText + caretStart + selectedText + caretEnd + afterText;
  }

  private getTextBeforeSelectedText(textArea: HTMLTextAreaElement): string {
    return (textArea.value).substring(0, textArea.selectionStart);
  }

  private getSelectedText(textArea: HTMLTextAreaElement): string {
    return (textArea.value).substring(textArea.selectionStart, textArea.selectionEnd);
  }

  private getTextAfterSelectedText(textArea: HTMLTextAreaElement): string {
    return (textArea.value).substring(textArea.selectionEnd, textArea.value.length);
  }

  private getCaretStart(caret: string, offsetCursor: number): string {
    return caret.substring(0, offsetCursor);
  }

  private getCaretEnd(caret: string, offsetCursor: number): string {
    return caret.substring(offsetCursor, caret.length);
  }

  public hasSelectedText(textArea: HTMLTextAreaElement): boolean {
    const selectedText = this.getSelectedText(textArea);

    return selectedText.length > 0;
  }

  public caculateStartCursorPositionPlusOffset(textArea: HTMLTextAreaElement, offsetCursor: number): number {
    return (textArea.selectionStart + offsetCursor);
  }
}

export const textAreaTool = new TextAreaTool();
