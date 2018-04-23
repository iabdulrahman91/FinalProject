import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'https://www.eventbriteapi.com/v3/';
    public EventUrl = 'events/41893183640/';
    public token = '?token=2BRYQRQ2TIDTT7MKVD74';
    public ServerWithApiUrl = this.Server + this.EventUrl + this.token;
}

