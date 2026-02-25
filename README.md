<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/7aecc3f5-3834-47e8-9f32-2b242b2cdd44

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment

To deploy this application to **Vercel**:

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Configure the following environment variables in the Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string.
   - `JWT_SECRET`: A secure secret for JWT signing.
   - `GEMINI_API_KEY`: Your Google Gemini API key.
   - `APP_URL`: The production URL of your application.
4. Deploy!
