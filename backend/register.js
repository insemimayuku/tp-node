exports.Register = async (req, res) => {
    try {
        const { email, password } = req.body;
        conn = await dblClick.pool.getConnection();

        const result = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
        conn.release();
        if (result.length > 0) {
            return res.status(400).json({ error: 'Cet utilisateur existe déjà'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const insertUserQuery = 'INSERT INTO user (email, password) VALUES (?, ?)';
        const insertUserValues = [email, hashedPassword];
        await conn.query(insertUserValues);
        conn.release();

        const token = jwt.sign({ email }, process.env.API_KEY, { expiresIn: '1h'});

        res.json({ token });
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de l\'inscription.'});
    }
}