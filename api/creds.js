const credentials = [];

export default function handler(req, res) {
    if (req.method === 'POST') {
        const newCreds = req.body;
        credentials.push(newCreds);
        res.status(200).json({ message: 'Credentials saved', creds: newCreds });
    } else if (req.method === 'GET') {
        res.status(200).json(credentials);
    }
}
