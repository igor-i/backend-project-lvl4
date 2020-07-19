start:
	npm start

heroku:
	heroku open

heroku-logs:
	heroku logs --tail

heroku-deploy:
	git push heroku master
