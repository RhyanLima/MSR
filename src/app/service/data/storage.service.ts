import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storages: { [key: string]: Storage } = {};

  constructor(private storage: Storage) { this.init(); }

  private async init() {

    const defaultStorage = await this.storage.create();
    this._storages['default'] = defaultStorage;

    const playerStorage = await this.storage.create();
    this._storages['player'] = playerStorage;
  }

  public async set(storageKey: string, key: string, value: any): Promise<void> {
    const targetStorage = this._storages[storageKey];
    if (!targetStorage) {
      throw new Error(`Storage with key: "${storageKey}" not found.`);
    }
    await targetStorage.set(key, value);
  }

  public async get(storageKey: string, key: string,): Promise<any> {
    const targetStorage = this._storages[storageKey];
    if (!targetStorage) {
      throw new Error(`Storage with key: "${storageKey}" not found.`);
    }
    return await targetStorage.get(key)
  }

  public async remove(storageKey: string, key: string): Promise<void> {
    const targetStorage = this._storages[storageKey];
    if (!targetStorage) {
      throw new Error(`Storage with key: "${storageKey}" not found.`);
    }
    await targetStorage.remove(key);
  }

}
