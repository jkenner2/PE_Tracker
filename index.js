const express = require('express');
const path = require('path');
const PORT = pocess.env.PORT || 5000;
const { Pool } = require('pg');

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false;
	}
});
