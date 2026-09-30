English | [Leer en español](README.es.md)

# Chatbot Friend

A simple chatbot built with HTML, CSS, and JavaScript as part of the Front-End Development program at EBAC.

The application matches user messages against predefined responses and displays the conversation in separate message bubbles for the user and the bot.

**Live Demo:** [Chatbot Friend](https://y4e1-png.github.io/Chatbot-Friend/)

## Features

- Send messages using the submit button or the Enter key.
- Display different message bubbles for the user and the bot.
- Show bot responses after a 1.5-second delay.
- Display a help message when an input does not match a supported phrase.
- Clear the input field after sending a message.
- Clear visible conversation messages using the reset button.
- Adapt the header layout to smaller screens.

## Technologies

- **HTML:** page structure and message form.
- **CSS:** layout, colors, message bubbles, and responsive styles.
- **Vanilla JavaScript:** form events, response matching, and DOM updates.
- **Google Fonts:** the Squada One typeface used in the application title.

## Getting started

### Requirements

- A modern web browser.
- Git installed if you want to clone the repository.
- An internet connection to load the Google Fonts typeface.

No dependency installation or build process is required.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Y4E1-png/Chatbot-Friend.git
```

2. Open the downloaded project folder.
3. Open `index.html` in your browser.

You can also download the repository as a ZIP file, extract it, and open `index.html`.

## Usage example

The application interface and responses are in Spanish.

1. Enter `hola` in the message field.
2. Press Enter or click the send button.
3. Wait 1.5 seconds for the bot's response.
4. Try another supported message, such as `que puedes hacer?`.
5. Enter an unsupported phrase to see the help response.
6. After the bot has replied, use the reset button in the header to clear the visible conversation.

## Supported messages

| User message | Bot response |
|---|---|
| `hola` | `Hola, que tal` |
| `como estas?` | `Muy bien, ¿que tal tu?` |
| `adios` | `¡Hasta la proxima!` |
| `que puedes hacer?` | `Puedo responder a preguntas basicas` |

Some phrases also have explicitly defined variants with different capitalization or punctuation.

Messages must match a key in the `responses` object in `functions.js`. Capitalization, accents, and additional spaces can affect whether a message is recognized.

## How it works

When the user submits the form, JavaScript prevents the page from reloading, reads the input, clears the field, and adds the user's message to the conversation.

After a 1.5-second delay, the application looks up the message in the `responses` object. It displays the matching response or a help message if the input is unknown.

The reset button removes the messages currently displayed in the conversation.

## Current scope

- Responses are predefined in the source code.
- The chatbot uses phrase matching without an AI model or an external API.
- Conversation history is not saved. Reloading the page clears the messages.

## Main structure

```text
Chatbot-Friend/
├── assets/
│   └── logo-chatbot.png
├── index.html
├── styles.css
└── functions.js
```

- **`index.html`:** header, conversation area, and message form.
- **`styles.css`:** page layout and message bubble styles.
- **`functions.js`:** message submission, predefined responses, delayed replies, and conversation clearing.
- **`assets/`:** chatbot logo.

## Screenshots

<!-- Add a screenshot showing a conversation between the user and the bot here. -->

## Author

Developed by **Yael Aguilar** as part of the Front-End Development program at EBAC.

[GitHub profile](https://github.com/Y4E1-png)
