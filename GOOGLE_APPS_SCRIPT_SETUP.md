# Google Apps Script Setup for Contact Form

This solution uses Google Apps Script to send emails to **omkar@grx10.com** (Outlook email) using Gmail.

## Step 1: Create Google Apps Script

1. Go to https://script.google.com/
2. Click **"New Project"**
3. Delete the default code and paste the code from `google-apps-script-code.js` (see below)
4. Click **"Save"** (Ctrl+S) and name it "Contact Form Handler"

## Step 2: Deploy as Web App

1. Click **"Deploy"** > **"New deployment"**
2. Click the gear icon ⚙️ next to **"Select type"**
3. Choose **"Web app"**
4. Configure:
   - **Description**: "Contact Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (this allows your website to call it)
5. Click **"Deploy"**
6. **Copy the Web App URL** - you'll need this for your `.env` file
7. Click **"Authorize access"** and grant permissions

### ⚠️ Handling the "Google hasn't verified this app" Warning

When you click "Authorize access", you may see a warning page saying **"Google hasn't verified this app"**. This is normal for personal/development scripts. Here's how to proceed safely:

1. **Click "Advanced"** at the bottom left of the warning page
2. You'll see an option like **"Go to Contact Form Handler (unsafe)"** or **"Continue to Contact Form Handler"**
3. **Click that option** - it's safe because:
   - This is YOUR script that YOU created
   - You're only giving permission to YOUR own Google account
   - The script only sends emails from your Gmail account
4. **Grant the requested permissions**:
   - Click **"Allow"** when asked to "Send email on your behalf"
   - This permission is needed for the script to send emails to omkar@grx10.com
5. You should see a success message: **"This app isn't verified"** - click **"Advanced"** > **"Go to Contact Form Handler (unsafe)"** again if needed

## Step 3: Configure Environment Variable

1. Create a `.env` file in your project root (if you don't have one)
2. Add this line:
   ```
   VITE_GOOGLE_SCRIPT_URL=your_web_app_url_here
   ```
3. Replace `your_web_app_url_here` with the URL you copied in Step 2
4. Restart your development server

## Step 4: Test

1. Fill out the contact form on your website
2. Submit it
3. Check omkar@grx10.com inbox for the email

## Important Notes

- The script sends emails FROM your Gmail account TO omkar@grx10.com
- You need a Gmail account to use this solution
- The recipient (omkar@grx10.com) can be any email provider (Outlook, Gmail, etc.)
- Free to use - no limits on emails sent
- Emails will appear to come from your Gmail address

## Troubleshooting

### "Google hasn't verified this app" Warning
- **This is normal and safe** for personal scripts
- Click "Advanced" > "Go to [App Name] (unsafe)" to proceed
- This warning appears because Google hasn't reviewed your personal script
- For personal use, you can safely ignore this warning
- The warning will appear each time you authorize, but it's harmless

### Other Issues
- **Script not sending emails**: Make sure you clicked "Allow" when asked for email permissions
- **Form submission fails**: Check that the Web App URL in `.env` is correct
- **Permission denied**: Re-authorize the script by going to Deploy > Manage deployments > Edit > Authorize access
- **Timeout errors**: Check your internet connection and try again

### Removing the Warning (Optional - Not Required)
If you want to remove the warning permanently, you can:
1. Submit your app for Google verification (takes several weeks)
2. Use OAuth consent screen configuration (for production apps)
3. **For personal use, it's easier to just click through the warning each time**

### Quick Checklist
- ✅ Script code pasted correctly
- ✅ Web app deployed successfully
- ✅ Authorization completed (even with warning)
- ✅ Web App URL copied to `.env` file
- ✅ `.env` file in project root
- ✅ Development server restarted after adding `.env`

