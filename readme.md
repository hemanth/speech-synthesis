# speech-synthesis [![Build Status](https://travis-ci.org/hemanth/speech-synthesis.svg?branch=master)](https://travis-ci.org/hemanth/speech-synthesis)

> Speaks using the [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#tts-section)


## Install

```
$ npm install --save speech-synthesis
```


## Usage

```js
var speechSynthesis = require('speech-synthesis');

speechSynthesis('Hello World', 'en-IN');

// or

speechSynthesis('Hello World', 'veena');

```


## API

### speechSynthesis(message, voiceType)

#### message

*Required*  
Type: `string`

Lorem ipsum.

#### voiceType:


Either of __langs__ or __name__ (Case insenstive):


__langs:__ ```js speechSynthesis.langs```

```js
["en-US", "en-GB", "es-ES", "fr-FR", "it-IT", "de-DE", "ja-JP", "ko-KR", "zh-CN", "en-IN", "sv-SE", "fr-CA", "he-IL", "id-ID", 
 "es-AR", "nl-BE", "en", "ro-RO", "pt-PT", "th-TH", "en-AU", "sk-SK", "hi-IN", "pt-BR", "hu-HU", "zh-TW", "el-GR", "ru-RU", 
 "en-IE", "nb-NO", "es-MX", "da-DK", "fi-FI", "zh-HK", "ar-SA", "en-ZA", "nl-NL", "tr-TR", "pl-PL", "cs-CZ"]
```

P.S: If lang is provide, the first match is selected as the voice, to select a specific voice use name for now.

__names:__ ```js speechSynthesis.names```


```js
["Google US English", "Google UK English Male", "Google UK English Female", "Google Español", "Google Français", 
 "Google Italiano", "Google Deutsch", "Google 日本人", "Google 한국의", "Google 中国的", "Veena", "Agnes", "Albert", 
 "Alex", "Alice", "Alva", "Amelie", "Anna", "Bad News", "Bahh", "Bells", "Boing", "Bruce", "Bubbles", "Carmit", 
 "Cellos", "Damayanti", "Daniel", "Deranged", "Diego", "Ellen", "Fiona", "Fred", "Good News", "Hysterical", 
 "Ioana", "Joana", "Junior", "Kanya", "Karen", "Kathy", "Kyoko", "Laura", "Lekha", "Luciana", "Mariska", 
 "Mei-Jia", "Melina", "Milena", "Moira", "Monica", "Nora", "Paulina", "Pipe Organ", "Princess", "Ralph", 
 "Samantha", "Sara", "Satu", "Sin-ji", "Tarik", "Tessa", "Thomas", "Ting-Ting", "Trinoids", "Vicki", 
 "Victoria", "Whisper", "Xander", "Yelda", "Yuna", "Zarvox", "Zosia", "Zuzana"]
```

Note: This modules works only in [these](http://caniuse.com/#feat=speech-synthesis) browsers for now.

## License

MIT © [hemanth](http://h3manth.com)
