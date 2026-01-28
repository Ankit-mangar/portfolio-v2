# AI Chatbot Setup Guide

## 🤖 Career Proxy AI - Setup Instructions

Your portfolio now includes an AI-powered chatbot that can answer questions about your experience, skills, and projects!

## ✨ Features

- **Smart AI Assistant**: Answers questions about your professional background
- **Beautiful UI**: Matches your portfolio's purple theme
- **Mobile Friendly**: Works on all devices
- **Real-time Chat**: Instant responses powered by Google Gemini (FREE!)
- **Easy Access**: "ASK AI" button in the navbar

## 🔧 Setup Steps

### 1. Get a Google Gemini API Key (FREE!)

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key" button
4. Copy the key (you can view it again later in AI Studio)

### 2. Add Your API Key

Create a `.env` file in your project root (if it doesn't exist) and add:

```env
VITE_GEMINI_API_KEY=your-gemini-api-key-here
```

### 3. Restart Your Dev Server

After adding the API key, restart your development server:

```bash
npm run dev
```

## 💡 How It Works

1. **Click "ASK AI"** button in the navbar
2. **Chat opens** with a welcome message
3. **Ask questions** like:
   - "What technologies does Ankit know?"
   - "Tell me about Ankit's experience at Roche"
   - "What projects has Ankit worked on?"
   - "What are Ankit's frontend skills?"

## 🎨 Customization

### Update AI Knowledge

Edit the system prompt in `src/components/sections/AIChat.tsx` (line 48-75) to update:
- Your experience details
- Skills and technologies
- Projects and achievements
- Any other information you want the AI to know

### Change AI Model

In `AIChat.tsx`, you can change the model:
- `gemini-pro` - Standard model (default, recommended, works with v1beta API)
- `gemini-1.5-pro` - More intelligent, may require v1 API
- Note: Model availability depends on API version. If you get 404 errors, try switching API version from `v1beta` to `v1`

### Styling

The chatbot uses your portfolio's theme colors:
- Primary: `#915eff` (purple)
- Background: `#1d1836` (dark blue)
- Tertiary: `#151030` (darker blue)

## 💰 Cost Considerations

- **Google Gemini offers a generous FREE tier!**
- Free tier: 15 requests per minute (RPM)
- Paid tier: 60 requests per minute (RPM)
- Very affordable pricing if you exceed free tier
- Set usage limits in your Google AI Studio dashboard
- Consider adding rate limiting for production

## 🚀 Current Setup

The chatbot is currently configured to use **Google Gemini API** which offers:
- ✅ Free tier with generous limits
- ✅ Fast response times
- ✅ High-quality responses
- ✅ Easy to set up

If you want to switch to other providers, you can modify the API call in `AIChat.tsx`.

## 🔒 Security Notes

- Never commit your `.env` file to Git
- The `.env` file is already in `.gitignore`
- For production, use environment variables on your hosting platform
- Consider implementing rate limiting to prevent API abuse

## 📱 Mobile Experience

The chatbot is fully responsive:
- Desktop: Full modal experience
- Mobile: Optimized for smaller screens
- Touch-friendly interface

## 🎯 Tips for Best Results

1. **Keep responses concise**: Set max_tokens to control length
2. **Update the system prompt**: Add more details about yourself
3. **Test different questions**: See what works best
4. **Monitor usage**: Check your OpenAI dashboard regularly

## 🐛 Troubleshooting

### "Failed to get response from AI"
- Check if your Gemini API key is correct
- Verify your API key is active in Google AI Studio
- Check browser console for detailed errors
- Make sure you're using `VITE_GEMINI_API_KEY` (not `VITE_OPENAI_API_KEY`)

### Button not appearing
- Clear browser cache
- Restart dev server
- Check if Navbar component is imported correctly

### Chatbot not opening
- Check browser console for errors
- Verify AIChat component is imported in Navbar

## 📞 Support

If you need help:
1. Check the browser console for errors
2. Verify all environment variables are set (`VITE_GEMINI_API_KEY`)
3. Ensure dev server is running
4. Check [Google AI Studio](https://aistudio.google.com/) for API status
5. Verify your API key is active and has quota available

---

**Enjoy your new AI-powered portfolio! 🚀**

