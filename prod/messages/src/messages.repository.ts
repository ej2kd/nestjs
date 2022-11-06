import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises'

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contens = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contens);

    return messages[id];
  }

  async findAll() {
    const contens = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contens);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}