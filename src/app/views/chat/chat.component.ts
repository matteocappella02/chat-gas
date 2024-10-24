import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BOT_RESPONSE } from '../../data/bot-response';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('chatHistoryContainer') chatHistoryContainer!: ElementRef;
  userMessage: string = '';
  chatHistory: { message: string, sender: 'user' | 'bot' }[] = [];
  isLoading: boolean = false;

  botResponses: string[] = BOT_RESPONSE;

  sendMessage() {
    if (this.userMessage.trim() !== '') {
      this.chatHistory.push({ message: this.userMessage, sender: 'user' });

      this.isLoading = true;

      this.userMessage = '';

      setTimeout(() => {
        const randomResponse = this.botResponses[Math.floor(Math.random() * this.botResponses.length)];
        this.chatHistory.push({ message: randomResponse, sender: 'bot' });
        this.isLoading = false;
        this.scrollToBottom();
      }, 1000);
    }
  }

  scrollToBottom(): void {
    try {
      this.chatHistoryContainer.nativeElement.scrollTop = this.chatHistoryContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Errore durante lo scroll:', err);
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

}
