# 💕 Monthsary Gift - Interactive Love Box 💕

A beautiful, interactive web page for your girlfriend's monthsary! This creates a cute animated box that opens when clicked, revealing stuffed animals with hearts that play your voice recording when tapped.

## ✨ Features

- **Beautiful 3D Box Animation**: Click the box lid to open it with smooth animations
- **Interactive Hearts**: Tap the hearts on the stuffed animals to play your voice message
- **Confetti Effect**: Colorful confetti falls when the box opens
- **Mobile Responsive**: Works perfectly on phones and tablets
- **Touch Support**: Swipe gestures work on mobile devices
- **Keyboard Support**: Use Space or Enter keys to interact
- **Fallback Messages**: Shows sweet messages if voice file isn't available

## 🎁 How to Use

### 1. Add Your Voice Recording

To add your voice message:

1. **Record your message** using your phone's voice recorder or any audio recording app
2. **Save it as** `voice-message.mp3` or `voice-message.wav`
3. **Place the file** in the same folder as `index.html`

### 2. Customize the Message

You can edit the messages in `index.html`:

```html
<div class="message">
    <p>I love you so much! 💖</p>
    <p>Thank you for being amazing! 🌟</p>
</div>
```

### 3. Open the Gift

1. **Double-click** `index.html` to open it in your web browser
2. **Click** on the box lid to open it
3. **Tap the hearts** on the stuffed animals to play your voice message

## 📱 How to Share

### Option 1: Send the Files
- Send all the files (`index.html`, `styles.css`, `script.js`, and your voice file) to your girlfriend
- She can open `index.html` in any web browser

### Option 2: Host Online (Recommended)
- Upload the files to a free hosting service like:
  - **GitHub Pages** (free)
  - **Netlify** (free)
  - **Vercel** (free)
- Send her the website link

### Option 3: Use a File Sharing Service
- Upload the files to Google Drive, Dropbox, or similar
- Share the link with her

## 🎨 Customization Ideas

### Change Colors
Edit the colors in `styles.css`:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Change Messages
Edit the text in `index.html`:
```html
<h1 class="title">Happy Monthsary! 💕</h1>
<p class="subtitle">Tap the heart, your fluffy friends have something to say!</p>
```

### Add More Stuffed Animals
Add more animals in the HTML:
```html
<div class="stuffed-animals">
    <div class="monkey">
        <div class="heart-icon" id="heartIcon">❤️</div>
    </div>
    <div class="giraffe">
        <div class="heart-icon" id="heartIcon2">❤️</div>
    </div>
    <!-- Add more animals here -->
</div>
```

## 💝 Tips for the Perfect Gift

1. **Record a heartfelt message** - Tell her how much you love her and appreciate her
2. **Keep it short and sweet** - 30 seconds to 1 minute is perfect
3. **Test it first** - Make sure the voice file works before sending
4. **Add personal touches** - Mention specific things you love about her
5. **Send it at the right time** - Maybe on your exact monthsary date!

## 🔧 Troubleshooting

### Voice Message Not Playing?
- Make sure the audio file is named exactly `voice-message.mp3` or `voice-message.wav`
- Check that the file is in the same folder as `index.html`
- Try a different browser (Chrome works best)

### Box Not Opening?
- Make sure you're clicking on the brown lid part
- Try refreshing the page
- Check that all files are in the same folder

### Not Working on Mobile?
- The page is designed to work on mobile devices
- Try using a different browser app
- Make sure the files are properly uploaded if hosting online

## 💕 File Structure

```
monthsary-gift/
├── index.html          # Main webpage
├── styles.css          # Beautiful styling and animations
├── script.js           # Interactive functionality
├── voice-message.mp3   # Your voice recording (add this!)
└── README.md           # This file
```

## 🎉 Enjoy!

This is a special way to show your love and appreciation. The interactive elements and personal voice message will make it a memorable monthsary gift! 💖

---

*Made with love for your special someone* ❤️ 