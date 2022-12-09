docker build --platform=linux/arm/v7 -t smuger/six_oclock_news_rss_sonos .
docker push smuger/six_oclock_news_rss_sonos:latest

// TESTING
docker run -d --restart always -p 3000:3000 smuger/six_oclock_news_rss_sonos