/* eslint-disable consistent-return */
// server.js
const { createClient } = require('@supabase/supabase-js');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3005;

// Inisialisasi Supabase
const supabaseUrl = 'https://pgvyextmpgrjelznttvz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndnlleHRtcGdyamVsem50dHZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg1ODU4NDksImV4cCI6MjAzNDE2MTg0OX0.b6QtmT7ArzF5W3ACO5JZ33WIsgmEtvjHD3uW2qhCdjY';
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint untuk menambahkan review
app.post('/api/reviews', async (req, res) => {
  const { title, review } = req.body;

  if (!title || !review) {
    return res.status(400).json({ error: 'Title and review cannot be empty.' });
  }

  try {
    const { data, error } = await supabase
      .from('reviews')
      .insert([{ title, review }]);

    if (error) {
      throw error;
    }

    res.status(201).json(data);
  } catch (error) {
    console.error('Failed to add review:', error.message);
    res.status(500).json({ error: 'Failed to add review.' });
  }
});

// Mulai server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
