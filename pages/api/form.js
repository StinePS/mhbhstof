// This code handles the data from the submitted form - Could be set up to send an email or make a list in Google Docs or the like

// Setting up a Next.js Form API Route https://nextjs.org/docs/guides/building-forms#part-3-setting-up-a-nextjs-form-api-route
export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses in the command line where next.js app is running.
  console.log("body: ", body);

  // Guard clause checks for data and returns early if they are not found
  if (
    !body.firstname ||
    !body.lastname ||
    !body.email ||
    !body.topic ||
    !body.message
  ) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ message: "Data not found" });
  }

  // Found the data - Sends a HTTP success code
  res.status(200).json({ data: `${body.firstname} ${body.lastname}` });
}
