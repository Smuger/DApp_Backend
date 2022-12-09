Sonos is a fun company, but they have many weird issues.

The only way to play the newest episode of your favourite podcast is to:
- Go to **TuneIn**
- My radio stations
- Click on **3 dots**
- Add New Radio Station
- Then find the **RSS** of your podcast (e.g. Six O'Clock News is "https://podcasts.files.bbci.co.uk/b006qjxt.rss")
- Realise that Sonos cannot handle XML from any RSS and just need a link to an **mp3** file
- **Build your own translating service** that extract mp3 link from RSS response
- Point Sonos App to your own translator
- After the radio gets added click on it and add it to your Sonos
- Now you can point to your podcast in Ikea smart house etc.

---

### Build, add to Docker Hub pull and run

docker build --platform=linux/arm/v7 -t smuger/six_oclock_news_rss_sonos .
docker push smuger/six_oclock_news_rss_sonos:latest

// TESTING
docker run -d --restart always -p 3000:3000 smuger/six_oclock_news_rss_sonos