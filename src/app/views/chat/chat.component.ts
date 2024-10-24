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
      const tmpMessage = this.userMessage;
      this.userMessage = '';

      this.isLoading = true;

      setTimeout(() => {
        let comparison = [];

        for (let response of this.botResponses) {
          const similarity = this.cosineSimilarity(tmpMessage, response);
          comparison.push({ response, similarity });
        }
        comparison.sort((a, b) => b.similarity - a.similarity)
        const similarityResponse = comparison.map(c => c.response).slice(0, 4);
        console.log(similarityResponse);
        const randomResponse = similarityResponse[Math.floor(Math.random() * similarityResponse.length)];
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

  tokenize(text: string): string[] {
    return text.toLowerCase().match(/\w+/g) || [];
  }

  getWordFrequency(sentence: string): Map<string, number> {
    const words = this.tokenize(sentence);
    const frequencyMap = new Map<string, number>();

    for (const word of words) {
      frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }

    return frequencyMap;
  }

  cosineSimilarity(sentence1: string, sentence2: string): number {
    const freq1 = this.getWordFrequency(sentence1);
    const freq2 = this.getWordFrequency(sentence2);

    const allWords = new Set([...freq1.keys(), ...freq2.keys()]);

    let dotProduct = 0;
    let magnitude1 = 0;
    let magnitude2 = 0;

    for (const word of allWords) {
      const freqInS1 = freq1.get(word) || 0;
      const freqInS2 = freq2.get(word) || 0;

      dotProduct += freqInS1 * freqInS2;
      magnitude1 += freqInS1 * freqInS1;
      magnitude2 += freqInS2 * freqInS2;
    }

    const magnitude = Math.sqrt(magnitude1) * Math.sqrt(magnitude2);

    // Avoid division by zero (if one sentence has no words)
    if (magnitude === 0) return 0;

    return dotProduct / magnitude;
  }


}
