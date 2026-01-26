export async function handler(event, context) {
  console.log("recaptcha-verify function HIT");

  try {
    const { token } = JSON.parse(event.body);

    if (!token) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: "Missing reCAPTCHA token",
        }),
      };
    }

    const projectId = process.env.GC_PROJECT_ID;
    const apiKey = process.env.RECAPTCHA_API_KEY;
    const expectedAction = "contact_form";

    const body = {
      event: {
        token,
        expectedAction,
      },
    };

    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const data = await response.json();
    console.log("reCAPTCHA full response:", JSON.stringify(data, null, 2));

    //check returned google score (likely bot 0.0 - likely human 1.0)
    const scoreThreshold = 0.5;
    const score = data?.riskAnalysis?.score || 0;

    if (score < scoreThreshold) {
      return {
        statusCode: 403,
        body: JSON.stringify({
          success: false,
          score,
          reason: "Low reCAPTCHA score",
        }),
      };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true, score }) };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Server error",
        details: err.message,
      }),
    };
  }
}
