# V.K.Music 🎵

A modern, fully-featured static music website built with HTML, CSS, and JavaScript. No database required – everything runs on GitHub Pages!

**Live Site:** https://vasilikomusic.github.io/V.K.Music/

## ✨ Features

### 🎶 Music Player
- Full-featured audio player with play, pause, next, previous controls
- Progress bar with seek functionality
- Volume control
- Fixed bottom player that persists while browsing
- Modal player for detailed song view
- Playback speed control (coming soon)

### 🔍 Search & Discovery
- Real-time search across songs, artists, albums, and genres
- Advanced filtering by genre, artist, year
- Sort by: Featured, Newest, Most Played, Most Liked, Random
- Tag-based searching
- Lyrics search capability

### 📱 Responsive Design
- Spotify-inspired dark theme
- Mobile-first responsive design
- Works perfectly on desktop, tablet, and mobile
- Touch-friendly controls
- Adaptive layout

### 💬 Comments & Social
- Comment on songs with name and text
- CAPTCHA spam protection
- Rate limiting (60-second cooldown)
- Like/Dislike system with Local Storage persistence
- Social sharing buttons
- Copy song link to clipboard

### 👤 User Features
- Favorites (stored in Local Storage)
- Recently played songs tracking
- Like/Dislike voting system
- Theme toggle (Light/Dark mode)
- User vote persistence
- Continue listening

### 📊 Statistics & Analytics
- View platform statistics
- Most played songs
- Popular artists
- Genre breakdown
- Real-time play counts

### 🎨 Admin Panel
- Hidden admin page (password protected)
- Add/Edit/Delete songs
- Manage comments
- Backup & Restore JSON data
- Song feature management
- Comment moderation

### 🚀 Advanced Features
- Service Worker for offline support
- Progressive Web App (PWA) ready
- Can be installed on phones and desktops
- Optimized image loading
- SEO-friendly (sitemap, robots.txt, meta tags)
- 404 error page
- Light/Dark theme toggle
- Keyboard-accessible
- WCAG 2.2 accessibility features

## 📁 Project Structure

```
V.K.Music/
├── index.html                 # Main HTML file
├── style.css                  # Complete stylesheet
├── script.js                  # Main application logic
├── service-worker.js          # Offline support
├── manifest.json              # PWA configuration
├── 404.html                   # Error page
├── robots.txt                 # SEO robots configuration
├── sitemap.xml                # SEO sitemap
├── data/
│   ├── songs.json             # Song database
│   ├── artists.json           # Artist information
│   ├── albums.json            # Album information
│   ├── genres.json            # Genre list
│   ├── comments.json          # User comments
│   └── statistics.json        # Platform statistics
└── assets/
    ├── images/                # Album artwork
    ├── music/                 # MP3 files
    ├── lyrics/                # Lyrics text files
    └── logo/                  # Branding assets
```

## 🚀 Getting Started

### Option 1: Use as-is (with placeholder data)
1. Your site is already live at: https://vasilikomusic.github.io/V.K.Music/
2. All features work with the sample data included
3. No setup needed!

### Option 2: Add Your Own Music

#### Step 1: Upload Images
1. Go to your GitHub repository
2. Click **"Add file"** → **"Upload files"**
3. Create folder: `assets/images/`
4. Upload album artwork (JPG/PNG format)
5. Recommended size: 400x400px or larger

#### Step 2: Upload Audio Files
1. Click **"Add file"** → **"Upload files"**
2. Create folder: `assets/music/`
3. Upload MP3 files
4. Keep filenames simple (e.g., `my-song.mp3`)

#### Step 3: Add Lyrics
1. Click **"Add file"** → **"Upload files"**
2. Create folder: `assets/lyrics/`
3. Upload `.txt` files with lyrics
4. Use same filename as music file (e.g., `my-song.txt`)

#### Step 4: Edit Song Data
1. Edit `data/songs.json`
2. Add a new entry for each song:

```json
{
  "id": "007",
  "title": "Your Song Title",
  "artist": "Artist Name",
  "album": "Album Name",
  "genre": "Genre",
  "year": 2024,
  "duration": "03:45",
  "music": "assets/music/your-song.mp3",
  "image": "assets/images/your-song.jpg",
  "lyrics": "assets/lyrics/your-song.txt",
  "description": "Song description",
  "tags": ["tag1", "tag2"],
  "language": "English",
  "featured": false,
  "visible": true,
  "uploadDate": "2024-07-12",
  "playCount": 0,
  "likes": 0,
  "dislikes": 0,
  "commentCount": 0
}
```

#### Step 5: Update Other JSON Files (Optional)
- **artists.json**: Add artist information
- **albums.json**: Add album details
- **genres.json**: Add new genres if needed
- **statistics.json**: Update manually or leave for auto-calculation

### Step 6: Commit & Deploy
GitHub Pages automatically redeploys when you push changes (usually within 1-2 minutes).

## 🔐 Admin Panel Access

1. Go to your site
2. Scroll down on the navbar, find the "Admin" link (in red)
3. Click "Admin"
4. Enter password: `admin123`
5. Change this password in `script.js` line 8

**Default admin password:** `admin123`

To change it:
1. Edit `script.js`
2. Find: `ADMIN_PASSWORD: 'admin123',`
3. Replace with your password
4. Commit and push

## 📊 Data Files Reference

### songs.json
```json
{
  "id": "unique-id",
  "title": "Song Title",
  "artist": "Artist Name",
  "album": "Album Name",
  "genre": "Genre",
  "year": 2024,
  "duration": "MM:SS",
  "music": "path/to/file.mp3",
  "image": "path/to/image.jpg",
  "lyrics": "path/to/lyrics.txt",
  "description": "Description",
  "tags": ["tag1", "tag2"],
  "language": "Language",
  "featured": true/false,
  "visible": true/false,
  "uploadDate": "YYYY-MM-DD",
  "playCount": number,
  "likes": number,
  "dislikes": number,
  "commentCount": number
}
```

### artists.json
```json
{
  "id": "artist_001",
  "name": "Artist Name",
  "image": "path/to/image.jpg",
  "bio": "Biography",
  "genre": "Genre",
  "followers": 0,
  "verified": true/false
}
```

### genres.json
```json
{
  "id": "genre_001",
  "name": "Genre Name",
  "description": "Description",
  "icon": "emoji"
}
```

## 🎯 Customization

### Change Colors
Edit `style.css` CSS variables (line 1-20):
```css
:root {
  --primary: #1DB954;           /* Main green */
  --bg-primary: #121212;        /* Dark background */
  --text-primary: #FFFFFF;      /* White text */
  /* ... etc */
}
```

### Change Admin Password
Edit `script.js` line 8:
```javascript
ADMIN_PASSWORD: 'your-new-password',
```

### Change Site Title
Edit `index.html`:
- Line 1: `<title>Your Site Name</title>`
- Line 13: `<span class="logo-text">Your Brand</span>`

### Add Backend Integration
The app is designed to work with optional backend APIs:
1. Set API endpoint in `script.js` line 7
2. Uncomment the `syncVoteToBackend()` and `syncCommentToBackend()` functions
3. Create backend endpoints for `/votes` and `/comments`

## 💾 Backup & Restore

### Automated Backup
1. Go to Admin Panel
2. Click "Backup & Restore" tab
3. Click "Download Backup"
4. A JSON file will download with all data

### Restore from Backup
1. Go to Admin Panel
2. Click "Backup & Restore" tab
3. Click "Choose File"
4. Select your backup JSON file
5. Click "Restore"

## 🌐 Sharing Your Site

Your live site URL is:
```
https://vasilikomusic.github.io/V.K.Music/
```

Share this with anyone – **no login required!**

### Share Individual Songs
Click the "Share" button on any song, or:
```
https://vasilikomusic.github.io/V.K.Music/?song=001
```

## 📱 PWA Installation

Users can install your site as an app:

**On Android:**
1. Open site in Chrome
2. Tap menu (⋮)
3. Tap "Install app"

**On iOS:**
1. Open site in Safari
2. Tap Share
3. Tap "Add to Home Screen"

**On Desktop:**
1. Open site in Chrome
2. Click install icon in address bar

## 🔍 SEO Optimization

Already included:
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Meta tags
- ✅ Open Graph tags
- ✅ Structured data ready
- ✅ 404 page

Rank better by:
1. Add real song descriptions
2. Add artist bios
3. Encourage comments and engagement
4. Share on social media with og tags
5. Add more songs (more content = more indexing)

## 🛠️ Troubleshooting

### Songs not loading?
- Check file paths in `data/songs.json`
- Ensure image filenames match exactly
- Check console for errors (F12)

### Images not showing?
- Check file format (JPG/PNG)
- Check if files exist in `assets/images/`
- Clear browser cache (Ctrl+Shift+Delete)

### Audio not playing?
- Check MP3 file format and size
- Ensure file path is correct
- Try in a different browser
- Check browser console for CORS errors

### Admin panel not loading?
- Check password is correct
- Clear cache and refresh
- Check if JavaScript is enabled

### Changes not live?
- GitHub Pages takes 1-2 minutes to deploy
- Try hard refresh (Ctrl+Shift+R)
- Check if your commit went through

## 📄 License

This project is provided as-is for personal use. Customize it freely!

## 🤝 Contributing

To add features:
1. Create a new branch
2. Make changes
3. Test thoroughly
4. Commit with clear messages
5. Push and create a pull request

## 📞 Support

For issues:
1. Check troubleshooting section above
2. Review GitHub Issues
3. Create a new issue with details

## 🎓 Learning Resources

- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## ✅ Checklist for Adding New Music

- [ ] Uploaded album artwork (400x400+ px, JPG/PNG)
- [ ] Uploaded MP3 file
- [ ] Added lyrics TXT file (optional)
- [ ] Updated `data/songs.json` with new entry
- [ ] Updated `data/artists.json` if new artist
- [ ] Checked image/music file paths match exactly
- [ ] Set `"visible": true` to show the song
- [ ] Committed changes to GitHub
- [ ] Waited 1-2 minutes for deployment
- [ ] Refreshed site and verified it appears

---

**Made with ❤️ using HTML, CSS & JavaScript**

**Current Version:** 1.0.0  
**Last Updated:** 2024-07-12
