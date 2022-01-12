export interface MessageResponse {
    success?: boolean;
    isTranslate?: boolean;
    translationText?: string;
    messageText?: string;
    listMessage?: ListMessage[];
  }
  
  export interface ListMessage {
    isTranslate?: boolean;
    messageText?: string;
    translationText?: string;
    argumentTexts?: ArgumentText[];
  }
  
  export interface ArgumentText {
    isTranslate?: boolean;
    messageText?: string;
    translationText?: string;
  }
  