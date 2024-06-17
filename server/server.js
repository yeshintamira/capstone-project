/* eslint-disable consistent-return */
const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Inisialisasi Supabase
const supabaseUrl = 'https://pgvyextmpgrjelznttvz.supabase.co';
const supabaseServiceRoleKey = 'your-supabase-service-role-key';
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint untuk menambahkan review
app.post('/api/reviews', async (req, res) => {
  const { review } = req.body;

  if (!review) {
    return res.status(400).json({ error: 'Review cannot be empty.' });
  }

  const { data, error } = await supabase
    .from('reviews')
    .insert([{ review }]);

  if (error) {
    return res.status(500).json({ error: 'Failed to submit review.' });
  }

  res.status(201).json(data);
});

// Mulai server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
