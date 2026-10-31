# Warp Zone

Three pages, in the order people see them:

1. `index.html` is the game.
2. `book.html` is the booking page (calculator, form, Calendly).
3. `before-your-call.html` is Simon's pre-call page. People land here after they book.

## Editing wording

Open the file on GitHub, click the pencil icon, change the text, then click "Commit changes". The live site updates in about a minute.

- Pre-call page wording: `before-your-call.html`. Edit the text between the tags and leave the tags alone.
- Pre-call page colours and spacing: `assets/before-your-call.css`.
- Booking page settings (Calendly link, WhatsApp number, Pixel, GA4, the S$500k cutoff): the `CONFIG` block near the bottom of `book.html`.

## Leads

Both forms post to the "Warp Zone leads" Google Sheet under juel@warp.sg. The script behind it is `sheet-apps-script.gs`.
