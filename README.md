## Deploying

We recommend using [Fly.io](https://fly.io/) for deployment.

As a fair warning, this will require a credit card. However, you probably won't get charged for it, as Fly.io has a generous free tier.

1. Make an account on [Fly.io](https://fly.io/)

2. Install [flyctl](https://fly.io/docs/hands-on/install-flyctl/)

3. Run `flyctl auth login`

    You may be prompted to add a credit card at this stage. We recommend doing so in order to proceed.

4. Run `flyctl launch`

    When asked for a region, select one close to you (I'd recommend Boston).
    When asked if you would "like to set up a Postgresql database now". Enter "N".
    Similarly, they may ask about setting up "an Upstash Redis database". Enter "N".
    When asked if you'd like to deploy now, enter "y".

    After launching, the terminal should print the URL at which your app is publicly available.

5. Modify the `BACKEND_BASE_PATH` variable.

    If you haven't already, go to `/frontend/src/constants/Navigation.tsx` and read the `TODO` instructions left there. Then, make the changes accordingly.

6. Run `flyctl deploy` to re-deploy changes to your app to the same URL.

### Debugging
If your deployment launch name gets too long. Try going into your (fly.io)[https://fly.io] dashboard and go to `Apps` then delete any current apps you may currently have. Then go back to the console and run `flyctl launch` when asked "Do you want to tweak these settings before proceeding?" type "y" and then change the name to your desired name.