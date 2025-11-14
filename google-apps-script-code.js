/**
 * Google Apps Script - Contact Form Handler
 * This script receives form data and sends an email to omkar@grx10.com
 */

/**
 * Helper function to send email (used by both doGet and doPost)
 */
function sendContactEmail(name, phone, organizationName, organizationEmail) {
  try {
    Logger.log('=== sendContactEmail called ===');
    Logger.log('Parameters: name=' + name + ', phone=' + phone + ', org=' + organizationName + ', email=' + organizationEmail);
    
    const recipientEmail = 'omkar@grx10.com';
    const ccEmail = 'omkar8290@gmail.com';
    const subject = 'New Contact Form Submission - GRX10 Website';
    
    // Validate email before using as replyTo
    let replyToEmail = organizationEmail;
    if (!replyToEmail || replyToEmail === 'undefined' || replyToEmail === 'Not provided' || !replyToEmail.includes('@')) {
      Logger.log('Invalid replyTo email, using recipientEmail instead');
      replyToEmail = recipientEmail;
    }
    
    const body = `
You have received a new contact form submission from the GRX10 website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${name}

Organization: ${organizationName}

Email: ${organizationEmail}

Phone: ${phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was automatically generated from the GRX10 website contact form.
    `.trim();
    
    Logger.log('Attempting to send email...');
    Logger.log('To: ' + recipientEmail);
    Logger.log('CC: ' + ccEmail);
    Logger.log('ReplyTo: ' + replyToEmail);
    
    MailApp.sendEmail({
      to: recipientEmail,
      cc: ccEmail,
      subject: subject,
      body: body,
      replyTo: replyToEmail
    });
    
    Logger.log('✓ Email sent successfully to: ' + recipientEmail + ' and CC: ' + ccEmail);
    return true;
    
  } catch (error) {
    Logger.log('✗ ERROR in sendContactEmail: ' + error.toString());
    Logger.log('Error stack: ' + (error.stack || 'No stack trace'));
    throw error; // Re-throw so caller can handle it
  }
}

/**
 * Helper function to send email with message field (for Contact Us page)
 */
function sendContactEmailWithMessage(name, phone, organizationName, organizationEmail, message) {
  try {
    Logger.log('=== sendContactEmailWithMessage called ===');
    Logger.log('Parameters: name=' + name + ', phone=' + phone + ', org=' + organizationName + ', email=' + organizationEmail + ', message=' + message);
    
    const recipientEmail = 'omkar@grx10.com';
    const ccEmail = 'omkar8290@gmail.com';
    const subject = 'New Contact Us Form Submission - GRX10 Website';
    
    // Validate email before using as replyTo
    let replyToEmail = organizationEmail;
    if (!replyToEmail || replyToEmail === 'undefined' || replyToEmail === 'Not provided' || !replyToEmail.includes('@')) {
      Logger.log('Invalid replyTo email, using recipientEmail instead');
      replyToEmail = recipientEmail;
    }
    
    const body = `
You have received a new contact form submission from the GRX10 website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${name}

Email: ${organizationEmail}

Phone: ${phone}

${message ? `Message:\n${message}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was automatically generated from the GRX10 website contact form.
    `.trim();
    
    Logger.log('Attempting to send email...');
    Logger.log('To: ' + recipientEmail);
    Logger.log('CC: ' + ccEmail);
    Logger.log('ReplyTo: ' + replyToEmail);
    
    MailApp.sendEmail({
      to: recipientEmail,
      cc: ccEmail,
      subject: subject,
      body: body,
      replyTo: replyToEmail
    });
    
    Logger.log('✓ Email sent successfully to: ' + recipientEmail + ' and CC: ' + ccEmail);
    return true;
    
  } catch (error) {
    Logger.log('✗ ERROR in sendContactEmailWithMessage: ' + error.toString());
    Logger.log('Error stack: ' + (error.stack || 'No stack trace'));
    throw error; // Re-throw so caller can handle it
  }
}

/**
 * Handle GET requests (form submissions sent as URL parameters)
 */
function doGet(e) {
  try {
    Logger.log('doGet called - Event: ' + JSON.stringify(e));
    Logger.log('doGet - Has parameter: ' + (e && e.parameter ? 'Yes' : 'No'));
    
    // Check if parameters are provided
    if (!e || !e.parameter) {
      Logger.log('doGet - No parameters received');
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: 'No parameters received',
          receivedEvent: e ? 'Yes' : 'No'
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    Logger.log('doGet - Parameters received: ' + JSON.stringify(e.parameter));
    
    // Extract form fields from URL parameters
    const name = e.parameter.name || 'Not provided';
    const phone = e.parameter.phone || 'Not provided';
    const organizationName = e.parameter.organizationName || 'Not provided';
    const organizationEmail = e.parameter.organizationEmail || 'Not provided';
    
    Logger.log('doGet - Processing: name=' + name + ', email=' + organizationEmail);
    
    // Send email using helper function
    sendContactEmail(name, phone, organizationName, organizationEmail);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Email sent successfully'
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('doGet error: ' + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle POST requests (JSON data)
 */
function doPost(e) {
  try {
    Logger.log('=== doPost CALLED ===');
    Logger.log('Event type: ' + typeof e);
    Logger.log('Event is null: ' + (e === null));
    Logger.log('Event is undefined: ' + (e === undefined));
    Logger.log('Event stringified: ' + JSON.stringify(e));
    
    // If event is completely undefined/null, this is a deployment or routing issue
    if (!e) {
      Logger.log('ERROR: Event object is completely missing. This indicates a deployment or request routing issue.');
      Logger.log('Please check:');
      Logger.log('1. Is the script properly deployed as a Web App?');
      Logger.log('2. Is "Who has access" set to "Anyone"?');
      Logger.log('3. Try creating a new deployment');
      
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: 'Event object is missing. Please check script deployment settings.',
          troubleshooting: '1. Redeploy the script 2. Set "Who has access" to "Anyone" 3. Create a new deployment'
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    let data = {};
    
    Logger.log('Checking postData: ' + (e.postData ? 'exists' : 'missing'));
    Logger.log('Checking parameter: ' + (e.parameter ? 'exists' : 'missing'));
    
    // Try to get data from POST body
    if (e.postData && e.postData.contents) {
      try {
        const contents = e.postData.contents;
        Logger.log('postData.contents type: ' + e.postData.type);
        Logger.log('postData.contents: ' + contents);
        
        // If content type is form-encoded, parse it manually
        if (e.postData.type === 'application/x-www-form-urlencoded') {
          Logger.log('Parsing form-encoded data from postData.contents...');
          // Parse form-encoded string (name=value&phone=value&...)
          const params = {};
          const pairs = contents.split('&');
          for (let i = 0; i < pairs.length; i++) {
            const pair = pairs[i].split('=');
            if (pair.length === 2) {
              params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
          }
          Logger.log('Parsed form-encoded params: ' + JSON.stringify(params));
          
          // Use parsed params or check e.parameter
          if (e.parameter && Object.keys(e.parameter).length > 0) {
            Logger.log('Using e.parameter (preferred)');
            // e.parameter is already parsed by Google Apps Script
            data = {
              name: e.parameter.name || '',
              phone: e.parameter.phone || '',
              organizationName: e.parameter.organizationName || '',
              organizationEmail: e.parameter.organizationEmail || ''
            };
          } else {
            Logger.log('Using manually parsed params from postData.contents');
            data = {
              name: params.name || '',
              phone: params.phone || '',
              organizationName: params.organizationName || '',
              organizationEmail: params.organizationEmail || ''
            };
          }
          Logger.log('Data extracted from form-encoded: ' + JSON.stringify(data));
        } else {
          // Direct JSON
          data = JSON.parse(contents);
          Logger.log('doPost: Successfully parsed JSON data from postData.contents');
        }
        Logger.log('Data received: ' + JSON.stringify(data));
      } catch (parseError) {
        Logger.log('doPost: Parse error - ' + parseError.toString());
        Logger.log('Raw contents: ' + e.postData.contents);
      }
    }
    // Try to get data from form-encoded parameters (form submission)
    else if (e.parameter) {
      Logger.log('=== Processing e.parameter ===');
      Logger.log('All parameters: ' + JSON.stringify(e.parameter));
      Logger.log('Parameter keys: ' + Object.keys(e.parameter));
      Logger.log('e.parameter.name: ' + e.parameter.name);
      Logger.log('e.parameter.phone: ' + e.parameter.phone);
      Logger.log('e.parameter.organizationName: ' + e.parameter.organizationName);
      Logger.log('e.parameter.organizationEmail: ' + e.parameter.organizationEmail);
      
      // Check if there's a 'data' field with JSON
      if (e.parameter.data && e.parameter.data.trim() !== '') {
        Logger.log('Found parameter.data, attempting to parse as JSON...');
        try {
          data = JSON.parse(e.parameter.data);
          Logger.log('doPost: Parsed JSON from parameter.data');
        } catch (parseError) {
          Logger.log('doPost: Failed to parse parameter.data as JSON: ' + parseError.toString());
          // Fall back to individual parameters
          data = {
            name: e.parameter.name || '',
            phone: e.parameter.phone || '',
            organizationName: e.parameter.organizationName || '',
            organizationEmail: e.parameter.organizationEmail || ''
          };
          Logger.log('doPost: Using individual parameters as fallback');
        }
      } else {
        // Individual form fields (this is what we're using now)
        Logger.log('No parameter.data found, using individual parameters...');
        // Support both form formats:
        // Old format: name, phone, organizationName, organizationEmail
        // New format: firstName, lastName, email, phone, message
        if (e.parameter.firstName || e.parameter.lastName) {
          // New Contact Us page format
          data = {
            firstName: e.parameter.firstName || '',
            lastName: e.parameter.lastName || '',
            email: e.parameter.email || '',
            phone: e.parameter.phone || '',
            message: e.parameter.message || ''
          };
          Logger.log('doPost: Received Contact Us page form data');
        } else {
          // Old modal form format
          data = {
            name: e.parameter.name || '',
            phone: e.parameter.phone || '',
            organizationName: e.parameter.organizationName || '',
            organizationEmail: e.parameter.organizationEmail || ''
          };
          Logger.log('doPost: Received modal contact form data');
        }
        Logger.log('Raw values: ' + JSON.stringify(e.parameter));
        Logger.log('Extracted data: ' + JSON.stringify(data));
      }
      Logger.log('Final data object: ' + JSON.stringify(data));
    }
    // If no data found, return error
    else {
      Logger.log('doPost error: No data received in postData or parameter');
      Logger.log('Event keys: ' + Object.keys(e || {}));
      if (e.postData) {
        Logger.log('postData keys: ' + Object.keys(e.postData));
      }
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: 'Invalid request: No data received in postData or parameter',
          eventKeys: Object.keys(e || {}),
          hasPostData: !!e.postData,
          hasParameter: !!e.parameter
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Extract form fields - support both formats
    let name, phone, organizationName, organizationEmail, firstName, lastName, email, message = '';
    
    if (data.firstName || data.lastName) {
      // New Contact Us page format
      firstName = data.firstName || '';
      lastName = data.lastName || '';
      email = data.email || '';
      phone = data.phone || '';
      message = data.message || '';
      
      // Combine firstName and lastName for email
      name = (firstName + ' ' + lastName).trim() || 'Not provided';
      organizationName = '';
      organizationEmail = email || 'Not provided';
      
      Logger.log('=== Extracted Contact Us Form Data ===');
      Logger.log('First Name: "' + firstName + '"');
      Logger.log('Last Name: "' + lastName + '"');
      Logger.log('Full Name: "' + name + '"');
      Logger.log('Email: "' + email + '"');
      Logger.log('Phone: "' + phone + '"');
      Logger.log('Message: "' + message + '"');
    } else {
      // Old modal form format
      name = data.name || 'Not provided';
      phone = data.phone || 'Not provided';
      organizationName = data.organizationName || 'Not provided';
      organizationEmail = data.organizationEmail || 'Not provided';
      
      Logger.log('=== Extracted Modal Form Data ===');
      Logger.log('Name: "' + name + '"');
      Logger.log('Phone: "' + phone + '"');
      Logger.log('Organization: "' + organizationName + '"');
      Logger.log('Email: "' + organizationEmail + '"');
    }
    
    // Validate that we have at least some data
    const hasData = (name && name !== 'Not provided') || (phone && phone !== 'Not provided') || 
                    (organizationEmail && organizationEmail !== 'Not provided') ||
                    (email && email !== '') || (firstName && firstName !== '');
    
    if (!hasData) {
      Logger.log('ERROR: All fields are empty - data extraction failed!');
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: 'No valid form data received. All fields are empty.',
          receivedData: JSON.stringify(data)
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Send email using helper function
    try {
      Logger.log('Calling email function...');
      let emailSent;
      // For Contact Us page, include message in the email
      if (message !== undefined && message !== '') {
        emailSent = sendContactEmailWithMessage(name, phone, organizationName, organizationEmail, message);
      } else {
        emailSent = sendContactEmail(name, phone, organizationName, organizationEmail);
      }
      
      if (emailSent) {
        Logger.log('✓ doPost completed successfully - email was sent');
        // Return success response
        return ContentService.createTextOutput(
          JSON.stringify({
            success: true,
            message: 'Email sent successfully'
          })
        ).setMimeType(ContentService.MimeType.JSON);
      } else {
        throw new Error('sendContactEmail returned false');
      }
      
    } catch (emailError) {
      Logger.log('✗ Email sending error in doPost: ' + emailError.toString());
      Logger.log('Error details: ' + JSON.stringify(emailError));
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: 'Failed to send email: ' + emailError.toString()
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
  } catch (error) {
    Logger.log('doPost general error: ' + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
  
/**
 * Test function - you can run this to test the email sending via GET
 */
function testEmail() {
  const mockEvent = {
    parameter: {
      name: 'Test User',
      phone: '+1234567890',
      organizationName: 'Test Company',
      organizationEmail: 'test@example.com'
    }
  };
  
  const result = doGet(mockEvent);
  Logger.log('Test result: ' + result.getContent());
  return result.getContent();
}

/**
 * Test function for POST requests
 */
function testEmailPost() {
  const testData = {
    name: 'Test User',
    phone: '+1234567890',
    organizationName: 'Test Company',
    organizationEmail: 'test@example.com'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log('Test POST result: ' + result.getContent());
  return result.getContent();
}
  